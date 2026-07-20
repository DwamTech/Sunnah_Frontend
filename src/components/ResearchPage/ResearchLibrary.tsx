"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  FiArrowLeft,
  FiBookOpen,
  FiClock,
  FiFileText,
  FiFilter,
  FiSearch,
  FiX,
} from "react-icons/fi";
import researchItems from "../../data/research.json";
import styles from "./ResearchPage.module.css";

type ResearchItem = (typeof researchItems)[number];

const filters = [
  { label: "كل المحتوى", value: "all" },
  { label: "بحوث علمية", value: "research" },
  { label: "مقالات", value: "article" },
  { label: "دراسات معاصرة", value: "study" },
];

export default function ResearchLibrary() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<ResearchItem | null>(null);
  const filteredItems = useMemo(
    () =>
      activeFilter === "all"
        ? researchItems
        : researchItems.filter((item) => item.type === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (!selectedItem) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedItem]);

  return (
    <section
      className={styles.library}
      id="research-library"
      aria-labelledby="research-library-title"
    >
      <span className={styles.libraryShape} aria-hidden="true" />
      <div className={styles.container}>
        <header className={styles.libraryHeading}>
          <div>
            <span className={styles.sectionKicker}>
              <FiBookOpen aria-hidden="true" />
              المركز المعرفي
            </span>
            <h2 id="research-library-title">معرفة تقرأ الواقع</h2>
          </div>
          <p>
            محتوى علمي وفكري يعالج قضايا الإنسان والمجتمع، ويصل بين أصالة
            المنهج ووضوح اللغة واحتياجات العصر.
          </p>
          <span className={styles.headingMark} aria-hidden="true">عِلم</span>
        </header>

        <div className={styles.tools}>
          <div className={styles.filters} aria-label="تصنيفات المحتوى">
            <FiFilter aria-hidden="true" />
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
          </div>
          <span className={styles.resultCount} aria-live="polite">
            <FiSearch aria-hidden="true" />
            {filteredItems.length} مواد معرفية
          </span>
        </div>

        <div className={styles.researchGrid}>
          {filteredItems.map((item, index) => (
            <article
              className={`${styles.researchCard} ${
                index === 0 ? styles.featuredCard : ""
              }`}
              key={item.number}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{item.number}</span>
                <span className={styles.cardType}>
                  <FiFileText aria-hidden="true" />
                  {item.typeLabel}
                </span>
              </div>
              <div className={styles.cardBody}>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <div className={styles.keywords}>
                  {item.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              </div>
              <footer className={styles.cardFooter}>
                <span><FiClock aria-hidden="true" /> {item.time}</span>
                <span>{item.date}</span>
                <button type="button" onClick={() => setSelectedItem(item)}>
                  اقرأ المادة
                  <FiArrowLeft aria-hidden="true" />
                </button>
              </footer>
            </article>
          ))}
        </div>
      </div>

      {selectedItem
        ? createPortal(
            <div
              className={styles.readerOverlay}
              role="presentation"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setSelectedItem(null);
              }}
            >
              <article
                className={styles.reader}
                role="dialog"
                aria-modal="true"
                aria-labelledby="reader-title"
              >
                <button
                  type="button"
                  className={styles.closeReader}
                  aria-label="إغلاق المادة"
                  onClick={() => setSelectedItem(null)}
                >
                  <FiX aria-hidden="true" />
                </button>

                <header className={styles.readerHeader}>
                  <span>{selectedItem.typeLabel}</span>
                  <strong>{selectedItem.number}</strong>
                  <h2 id="reader-title">{selectedItem.title}</h2>
                  <div>
                    <span>
                      <FiClock aria-hidden="true" /> {selectedItem.time}
                    </span>
                    <span>{selectedItem.date}</span>
                  </div>
                </header>

                <div className={styles.readerContent}>
                  <p className={styles.readerLead}>{selectedItem.excerpt}</p>
                  {selectedItem.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className={styles.readerKeywords}>
                    {selectedItem.keywords.map((keyword) => (
                      <span key={keyword}>{keyword}</span>
                    ))}
                  </div>
                </div>
              </article>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
