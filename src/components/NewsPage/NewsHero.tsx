import Image from "next/image";
import { FiCalendar } from "react-icons/fi";
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
          <h1 id="news-page-title">
            أخبار
            <strong>الهيئة</strong>
          </h1>
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
