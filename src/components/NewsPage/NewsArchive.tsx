"use client";

import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import newsItems from "../../data/news.json";
import { newsImages } from "./newsAssets";
import styles from "./NewsPage.module.css";

export default function NewsArchive() {
  return (
    <section
      className={styles.archive}
      id="news-archive"
      aria-labelledby="news-archive-title"
    >
      <div className={styles.archiveShape} aria-hidden="true" />
      <div className={styles.container}>
        <header className={styles.archiveHeading}>
          <div className={styles.headingTitle}>
            <h2 id="news-archive-title">أخبار الهيئة</h2>
          </div>
        </header>

        <div className={styles.newsGrid}>
          {newsItems.map((item, index) => {
            return (
              <article
                className={`${styles.newsCard} ${
                  index === 0 ? styles.featuredCard : ""
                }`}
                key={item.title}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={newsImages[item.image]}
                    alt=""
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes={
                      index === 0
                        ? "(max-width: 48rem) 100vw, 60vw"
                        : "(max-width: 48rem) 100vw, 30vw"
                    }
                  />
                </div>

                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <a className={styles.readMore} href={item.href} target="_blank" rel="noreferrer">
                    تفاصيل الخبر
                    <FiArrowLeft aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
