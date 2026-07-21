import styles from "./ResearchPage.module.css";

export default function ResearchEmpty() {
  return (
    <section className={styles.emptySection} aria-label="No Content Available">
      <p className={styles.noContent}>No Content Available</p>
    </section>
  );
}
