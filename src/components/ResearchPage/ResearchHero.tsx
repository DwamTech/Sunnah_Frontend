import {
  FiArrowDown,
  FiBookOpen,
  FiEdit3,
  FiFeather,
  FiSearch,
} from "react-icons/fi";
import styles from "./ResearchPage.module.css";

const floatingPages = [
  { number: "01", label: "تأصيل" },
  { number: "02", label: "بحث" },
  { number: "03", label: "وعي" },
];

export default function ResearchHero() {
  return (
    <section className={styles.hero} aria-labelledby="research-page-title">
      <div className={styles.heroPattern} aria-hidden="true" />
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <FiFeather aria-hidden="true" />
            معرفة مؤصّلة ورؤية معاصرة
          </span>
          <h1 id="research-page-title">
            مقالات
            <strong>وبحوث</strong>
          </h1>
          <p>
            مساحة معرفية تجمع البحث العلمي والفكر الرصين، وتقرأ قضايا
            الإنسان والمجتمع في ضوء السنة النبوية ومقاصدها.
          </p>

          <div className={styles.heroFeatures}>
            <span><FiBookOpen aria-hidden="true" /> بحوث موثقة</span>
            <span><FiEdit3 aria-hidden="true" /> مقالات متخصصة</span>
            <span><FiSearch aria-hidden="true" /> قراءة تحليلية</span>
          </div>
        </div>

        <div className={styles.pagesVisual} aria-hidden="true">
          <span className={styles.visualOrbit} />
          {floatingPages.map((page) => (
            <div className={styles.floatingPage} key={page.number}>
              <span>{page.number}</span>
              <i />
              <i />
              <i />
              <strong>{page.label}</strong>
            </div>
          ))}
          <div className={styles.visualCore}>
            <FiFeather />
            <strong>المعرفة</strong>
            <span>أصلٌ راسخ • أثرٌ ممتد</span>
          </div>
        </div>
      </div>

      <a className={styles.scrollHint} href="#research-library">
        تصفح المركز المعرفي
        <FiArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
