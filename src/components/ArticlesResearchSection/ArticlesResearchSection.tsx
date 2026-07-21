import styles from "./ArticlesResearchSection.module.css";

export default function ArticlesResearchSection() {
  return (
    <section className={styles.section} aria-labelledby="articles-title">
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 id="articles-title">مقالات وبحوث</h2>
        </header>
        <p className={styles.empty}>No Content Available</p>
      </div>
    </section>
  );
}
