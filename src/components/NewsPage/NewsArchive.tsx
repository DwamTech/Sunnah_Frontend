"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FiArrowLeft, FiCalendar, FiGrid } from "react-icons/fi";
import newsItems from "../../data/news.json";
import { newsIcons, newsImages } from "./newsAssets";
import styles from "./NewsPage.module.css";

const filters = [
  { label: "الكل", value: "all" },
  { label: "أخبار الهيئة", value: "أخبار الهيئة" },
  { label: "برامج علمية", value: "برامج علمية" },
  { label: "إعلامية الهيئة", value: "إعلامية الهيئة" },
];

export default function NewsArchive() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredNews = useMemo(
    () =>
      activeFilter === "all"
        ? newsItems
        : newsItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  );
  const activeFilterLabel =
    filters.find((filter) => filter.value === activeFilter)?.label ?? "الكل";

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
            <span className={styles.sectionKicker}>
              <FiGrid aria-hidden="true" />
              المركز الإعلامي
            </span>
            <h2 id="news-archive-title">آخر المستجدات</h2>
          </div>
          <div className={styles.headingDescription}>
            <span className={styles.headingNumber} aria-hidden="true">01</span>
            <p>
              تغطية متجددة لأهم أعمال الهيئة ومشاركاتها ومشروعاتها العلمية
              حول العالم.
            </p>
          </div>
        </header>

        <div className={styles.filters} aria-label="تصنيفات الأخبار">
          {filters.map((filter) => (
            <button
              type="button"
              className={
                activeFilter === filter.value ? styles.activeFilter : undefined
              }
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
              key={filter.value}
            >
              {filter.label}
            </button>
          ))}
          <span className={styles.resultCount} aria-live="polite">
            <strong>{filteredNews.length}</strong>
            {activeFilterLabel === "الكل"
              ? " أخبار متاحة"
              : ` ضمن ${activeFilterLabel}`}
          </span>
        </div>

        <div className={styles.newsGrid}>
          {filteredNews.map((item, index) => {
            const Icon = newsIcons[item.icon];

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
                  <span className={styles.cardCategory}>
                    <Icon aria-hidden="true" />
                    {item.category}
                  </span>
                  <span className={styles.cardIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardDate}>
                    <FiCalendar aria-hidden="true" />
                    {item.date}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <button type="button" className={styles.readMore}>
                    تفاصيل الخبر
                    <FiArrowLeft aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
