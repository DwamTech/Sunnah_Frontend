import { policies } from "./aboutData";
import styles from "./AboutPage.module.css";

export default function AboutPolicy() {
  return (
    <section className={styles.policy} aria-labelledby="policy-title">
      <div className={styles.policyShape} aria-hidden="true" />

      <div className={styles.sectionContainer}>
        <header className={styles.policyHeading}>
          <div>
            <h2 id="policy-title">سياستنا</h2>
          </div>
        </header>

        <div className={styles.policyTimeline}>
          {policies.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <article className={styles.policyItem} key={policy.title}>
                <span className={styles.policyMarker}>
                  <Icon aria-hidden="true" />
                </span>
                <span className={styles.policyNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{policy.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
