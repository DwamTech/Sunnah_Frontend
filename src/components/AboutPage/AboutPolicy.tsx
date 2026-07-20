import { policies } from "./aboutData";
import styles from "./AboutPage.module.css";

export default function AboutPolicy() {
  return (
    <section className={styles.policy} aria-labelledby="policy-title">
      <div className={styles.policyShape} aria-hidden="true" />

      <div className={styles.sectionContainer}>
        <header className={styles.policyHeading}>
          <div>
            <span className={styles.sectionKicker}>منهج العمل</span>
            <h2 id="policy-title">سياستنا</h2>
          </div>
          <p>
            مبادئ تحكم حركتنا، وتحفظ رسالتنا، وتضمن أن يكون أثرنا مؤسسيًا
            وواعيًا ومستدامًا.
          </p>
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
                  <p>{policy.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
