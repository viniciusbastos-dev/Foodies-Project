import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "us-east-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const db = sql("meals.db");

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, {
    lower: true,
  });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  await new Promise((resolve, reject) => {
    s3.putObject(
      {
        Bucket: "viniciusbastos-next-demo-users-image",
        Key: fileName,
        Body: Buffer.from(bufferedImage),
        ContentType: meal.image.type,
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });

  meal.image = fileName;

  db.prepare(
    `
      INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
        )
        `
  ).run(meal);
}
