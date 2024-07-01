"use client";
import ImagePicker from "@/components/ImagePicker";
import styles from "./page.module.css";
import { shareMeal } from "@/lib/actions";

export default function ShareMealPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Compartilhe sua{" "}
          <span className={styles.highlight}>refeição favorita</span>
        </h1>
        <p>
          Ou qualquer outra refeição que você sinta que precisa compartilhar!
        </p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMeal}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Título</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Resumo Curto</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instruções</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Sua imagem" name="image" />
          <p className={styles.actions}>
            <button type="submit">Compartilhar Refeição</button>
          </p>
        </form>
      </main>
    </>
  );
}
