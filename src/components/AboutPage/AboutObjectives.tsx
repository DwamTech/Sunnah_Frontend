import { objectives } from "./aboutData";
import styles from "./AboutPage.module.css";

export default function AboutObjectives() {
  return (
    <section className={styles.objectives} aria-labelledby="objectives-title">
      <div className={styles.objectivesGlow} aria-hidden="true" />

      <div className={styles.sectionContainer}>
        <header className={styles.centeredHeading}>
          <h2 id="objectives-title">أهدافنا</h2>
        </header>

        <div className={styles.objectivesGrid}>
          {objectives.map((objective, index) => {
            const Icon = objective.icon;

            return (
              <article className={styles.objectiveCard} key={objective.title}>
                <span className={styles.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.objectiveIcon}>
                  <Icon aria-hidden="true" />
                </span>
                <h3>{objective.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
