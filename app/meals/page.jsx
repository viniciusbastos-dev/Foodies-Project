import React, { Suspense } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/MealsGrid";
import { getMeals } from "@/lib/meals";
import MealsLoadingPage from "./loading-out";

export const metadata = {
  title: "Todos os pratos",
  description:
    "Navegue pelas refeições deliciosas compartilhadas por nossa vibrante comunidade.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Refeições deliciosas, criadas{" "}
          <span className={styles.highlight}>por você</span>
        </h1>
        <p>
          Escolha sua receita favorita e cozinhe você mesmo. É fácil e
          divertido!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Compartilhe Sua Receita Favorita</Link>
        </p>
      </header>

      <main className={styles.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
