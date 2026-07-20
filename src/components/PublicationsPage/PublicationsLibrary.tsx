"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiAward,
  FiBook,
  FiCheckCircle,
  FiCalendar,
  FiGrid,
  FiLayers,
  FiShield,
} from "react-icons/fi";
import publications from "../../data/publications.json";
import { publicationImages } from "./publicationAssets";
import styles from "./PublicationsPage.module.css";

const filters = [
  { label: "كل الإصدارات", value: "all" },
  { label: "القيم النبوية", value: "values" },
  { label: "الهوية والفكر", value: "identity" },
  { label: "دراسات السنة", value: "studies" },
];

export default function PublicationsLibrary() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredPublications = useMemo(
    () =>
      activeFilter === "all"
        ? publications
        : publications.filter(
            (publication) => publication.category === activeFilter,
          ),
    [activeFilter],
  );

  return (
    <section
      className={styles.library}
      id="publications-library"
      aria-labelledby="library-title"
    >
      <span className={styles.libraryShape} aria-hidden="true" />
      <div className={styles.container}>
        <header className={styles.libraryHeading}>
          <div className={styles.headingContent}>
            <span className={styles.sectionKicker}>
              <FiGrid aria-hidden="true" />
              المكتبة العلمية
            </span>
            <h2 id="library-title">إصدارات تصنع أثرًا</h2>
          </div>
          <p>
            تصفح مجموعة منتقاة من الكتب والدراسات التي تجمع الدقة العلمية
            ووضوح الطرح والارتباط بقضايا الإنسان والمجتمع.
          </p>
          <div className={styles.headingVisual} aria-hidden="true">
            <FiBook />
            <strong>04</strong>
            <span>إصدارات علمية</span>
          </div>
        </header>

        <div className={styles.libraryStats} aria-label="مميزات المكتبة">
          <span>
            <FiBook aria-hidden="true" />
            <strong>4</strong>
            إصدارات مختارة
          </span>
          <span>
            <FiLayers aria-hidden="true" />
            <strong>3</strong>
            مجالات معرفية
          </span>
          <span>
            <FiShield aria-hidden="true" />
            <strong>100%</strong>
            محتوى علمي موثوق
          </span>
        </div>

        <div className={styles.filterBar} aria-label="تصنيفات الإصدارات">
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
          <span className={styles.booksCount} aria-live="polite">
            <FiBook aria-hidden="true" />
            {filteredPublications.length} إصدارات
          </span>
        </div>

        <div className={styles.publicationsGrid}>
          {filteredPublications.map((publication) => (
            <article
              className={`${styles.publicationCard} ${
                styles[publication.tone]
              }`}
              key={publication.number}
            >
              <span className={styles.cardAccent} aria-hidden="true" />
              <div className={styles.coverSide}>
                <span className={styles.bookNumber}>{publication.number}</span>
                <span className={styles.coverHalo} aria-hidden="true" />
                <Image
                  className={styles.cover}
                  src={publicationImages[publication.image]}
                  alt={`غلاف كتاب ${publication.title}`}
                  loading="lazy"
                  sizes="(max-width: 48rem) 70vw, 24rem"
                />
              </div>

              <div className={styles.publicationDetails}>
                <span className={styles.category}>
                  <FiLayers aria-hidden="true" />
                  {publication.categoryLabel}
                </span>
                <h3>{publication.title}</h3>
                <strong>{publication.description}</strong>
                <p>{publication.summary}</p>
                <div className={styles.cardFooter}>
                  <span>
                    <FiCalendar aria-hidden="true" />
                    {publication.year}
                  </span>
                  <button type="button">
                    استعرض الإصدار
                    <FiArrowLeft aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.libraryPromise}>
          <span className={styles.promiseIcon}>
            <FiAward aria-hidden="true" />
          </span>
          <div>
            <span>منهج النشر في الهيئة</span>
            <h3>علمٌ مؤصّل، وطرحٌ واضح، وأثرٌ يبقى</h3>
          </div>
          <ul>
            <li><FiCheckCircle aria-hidden="true" /> مراجعة علمية</li>
            <li><FiCheckCircle aria-hidden="true" /> معالجة معاصرة</li>
            <li><FiCheckCircle aria-hidden="true" /> رسالة عالمية</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
