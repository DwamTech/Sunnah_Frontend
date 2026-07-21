import { FiArrowLeft } from "react-icons/fi";
import statements from "../../data/statements.json";
import styles from "./StatementsPage.module.css";

export default function StatementsArchive() {
  return (
    <section className={styles.archive} id="statements-archive" aria-labelledby="statements-archive-title">
      <div className={styles.container}>
        <h2 id="statements-archive-title">بيانات صادرة</h2>
        <div className={styles.statementsGrid}>
          {statements.map((statement) => (
            <article className={styles.statementCard} key={statement.number}>
              <div className={styles.statementBody}><h3>{statement.title}</h3></div>
              <footer><a href={statement.href} target="_blank" rel="noreferrer">اقرأ البيان <FiArrowLeft aria-hidden="true" /></a></footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
