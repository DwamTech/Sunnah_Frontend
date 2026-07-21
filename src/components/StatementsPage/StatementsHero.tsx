import { FiArrowDown, FiFileText, FiShield } from "react-icons/fi";
import styles from "./StatementsPage.module.css";

export default function StatementsHero() {
  return (
    <section className={styles.hero} aria-labelledby="statements-page-title">
      <div className={styles.heroPattern} aria-hidden="true" />
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 id="statements-page-title">
            بيانات
            <strong>صادرة</strong>
          </h1>
        </div>

        <div className={styles.documentsVisual} aria-hidden="true">
          <span className={styles.documentGlow} />
          <div className={styles.documentBack}>
            <span>الهيئة العالمية للسنة النبوية</span>
            <i /><i /><i /><i />
          </div>
          <div className={styles.documentFront}>
            <header>
              <FiFileText />
              <span>بيان رسمي</span>
              <strong>01</strong>
            </header>
            <h2>الكلمة أمانة</h2>
            <i /><i /><i /><i /><i />
            <div className={styles.officialStamp}>
              <FiShield />
              <span>معتمد</span>
            </div>
          </div>
        </div>
      </div>

      <a className={styles.scrollHint} href="#statements-archive">
        تصفح البيانات
        <FiArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
