import Link from "next/link";
import styles from "./page.module.css";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlider />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Prove e compartilhe comida de todo o mundo.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Junte-se à Comunidade</Link>
            <Link href="/meals">Explore Refeições</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>Como funciona</h2>
          <p>
            NextLevel Food é uma plataforma para amantes de comida
            compartilharem suas receitas favoritas com o mundo. É um lugar para
            descobrir novos pratos e se conectar com outros amantes de comida.
          </p>
          <p>
            NextLevel Food é um lugar para descobrir novos pratos e se conectar
            com outros amantes de comida.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Por que NextLevel Food?</h2>
          <p>
            NextLevel Food é uma plataforma para amantes de comida
            compartilharem suas receitas favoritas com o mundo. É um lugar para
            descobrir novos pratos e se conectar com outros amantes de comida.
          </p>
          <p>
            NextLevel Food é um lugar para descobrir novos pratos e se conectar
            com outros amantes de comida.
          </p>
        </section>
      </main>
    </>
  );
}
