import {
  FiArrowUpLeft,
  FiBookOpen,
  FiClock,
  FiFeather,
} from "react-icons/fi";
import researchItems from "../../data/research.json";
import styles from "./ArticlesResearchSection.module.css";

const featuredResearch = researchItems[0];
const articles = researchItems.slice(1, 4);

export default function ArticlesResearchSection() {
  return (
    <section className={styles.section} aria-labelledby="articles-title">
      <div className={styles.transition} aria-hidden="true" />

      <div className={styles.backgroundArt} aria-hidden="true">
        <span className={styles.ribbonOne} />
        <span className={styles.ribbonTwo} />
        <span className={styles.ribbonThree} />
        <span className={styles.orbit} />
      </div>

      <div className={styles.container}>
        <header className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>
              <FiFeather aria-hidden="true" />
              المعرفة الموثوقة
            </span>
            <h2 id="articles-title">مقالات وبحوث</h2>
          </div>
          <p>
            رؤى علمية ودراسات متخصصة تستلهم هدي السنة النبوية وتقرأ قضايا
            الإنسان والمجتمع بمنهج رصين.
          </p>
        </header>

        <div className={styles.editorial}>
          <article className={styles.featured}>
            <span className={styles.watermark} aria-hidden="true">
              عِلم
            </span>
            <span className={styles.featuredLabel}>
              <FiBookOpen aria-hidden="true" />
              البحث المختار
            </span>

            <div className={styles.featuredContent}>
              <span className={styles.issue}>
                الإصدار المعرفي • {featuredResearch.number}
              </span>
              <h3>{featuredResearch.title}</h3>
              <p>{featuredResearch.excerpt}</p>
              <div className={styles.meta}>
                <span>
                  <FiClock aria-hidden="true" />
                  {featuredResearch.time} قراءة
                </span>
                <span className={styles.decorativeArrow}>
                  استكشف الفكرة
                  <FiArrowUpLeft aria-hidden="true" />
                </span>
              </div>
            </div>
          </article>

          <div className={styles.articlesList}>
            {articles.map((article) => (
              <article className={styles.articleCard} key={article.number}>
                <span className={styles.number}>{article.number}</span>
                <div className={styles.articleContent}>
                  <span className={styles.type}>{article.typeLabel}</span>
                  <h3>{article.title}</h3>
                  <span className={styles.readingTime}>
                    <FiClock aria-hidden="true" />
                    {article.time}
                  </span>
                </div>
                <span className={styles.cardArrow} aria-hidden="true">
                  <FiArrowUpLeft />
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.knowledgeLine} aria-hidden="true">
          <span>تأصيل</span>
          <i />
          <span>بحث</span>
          <i />
          <span>وعي</span>
          <i />
          <span>أثر</span>
        </div>
      </div>
    </section>
  );
}
