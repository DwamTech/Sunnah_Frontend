import { FiEye, FiShield, FiTarget } from "react-icons/fi";
import styles from "./StatementsPage.module.css";

const values = [
  { icon: FiShield, title: "مرجعية علمية", text: "مواقف تستند إلى التأصيل والتحقق." },
  { icon: FiEye, title: "وضوح وشفافية", text: "صياغة واضحة تحفظ المعنى والسياق." },
  { icon: FiTarget, title: "أثر مسؤول", text: "كلمة تراعي المجتمع ونتائج الخطاب." },
];

export default function StatementValues() {
  return (
    <section className={styles.values} aria-label="منهج البيانات الصادرة">
      <div className={styles.container}>
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <article key={value.title}>
              <Icon aria-hidden="true" />
              <div>
                <h2>{value.title}</h2>
                <p>{value.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
