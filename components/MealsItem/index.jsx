import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const MealItem = ({ title, slug, image, summary, creator }) => {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image
            src={`https://viniciusbastos-next-demo-users-image.s3.us-east-2.amazonaws.com/${image}`}
            alt={title}
            fill
          />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>por {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>Ver detalhes</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
