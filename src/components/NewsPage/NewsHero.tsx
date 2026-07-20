import Image from "next/image";
import { FiArrowDown, FiCalendar, FiGlobe } from "react-icons/fi";
import logo from "../../../puplic/الهيئة_العالمية_للسنة_النبوية__1_-removebg-preview.png";
import newsItems from "../../data/news.json";
import { newsImages } from "./newsAssets";
import styles from "./NewsPage.module.css";

export default function NewsHero() {
  const featuredNews = newsItems[0];

  return (
    <section className={styles.hero} aria-labelledby="news-page-title">
      <div className={styles.heroImage} aria-hidden="true">
        <Image
          src={newsImages[featuredNews.image]}
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.heroPattern} aria-hidden="true" />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <FiGlobe aria-hidden="true" />
            نافذة الهيئة إلى العالم
          </span>
          <h1 id="news-page-title">
            أخبار
            <strong>الهيئة</strong>
          </h1>
          <p>
            تابع أحدث الأنشطة والمبادرات والبرامج العلمية والإعلامية التي
            تصنع أثرًا معرفيًا في خدمة السنة النبوية.
          </p>
          <a className={styles.exploreButton} href="#news-archive">
            تصفح آخر الأخبار
            <FiArrowDown aria-hidden="true" />
          </a>
        </div>

        <article className={styles.heroStory}>
          <span className={styles.storyAccent} aria-hidden="true" />
          <div className={styles.storyLogo}>
            <Image src={logo} alt="" />
          </div>
          <span className={styles.storyCategory}>{featuredNews.category}</span>
          <h2>{featuredNews.title}</h2>
          <p>{featuredNews.excerpt}</p>
          <span className={styles.storyDate}>
            <FiCalendar aria-hidden="true" />
            {featuredNews.date}
          </span>
        </article>
      </div>
    </section>
  );
}
