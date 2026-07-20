"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiCalendar,
  FiCheckCircle,
  FiFileText,
  FiFilter,
  FiShield,
  FiX,
} from "react-icons/fi";
import statements from "../../data/statements.json";
import styles from "./StatementsPage.module.css";

type Statement = (typeof statements)[number];

const filters = [
  { label: "كل البيانات", value: "all" },
  { label: "بيانات رسمية", value: "official" },
  { label: "مواقف مؤسسية", value: "positions" },
  { label: "شكر وتقدير", value: "appreciation" },
];

export default function StatementsArchive() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedStatement, setSelectedStatement] = useState<Statement | null>(null);
  const filteredStatements = useMemo(
    () =>
      activeFilter === "all"
        ? statements
        : statements.filter((statement) => statement.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (!selectedStatement) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedStatement(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedStatement]);

  return (
    <section
      className={styles.archive}
      id="statements-archive"
      aria-labelledby="statements-archive-title"
    >
      <span className={styles.archiveShape} aria-hidden="true" />
      <div className={styles.container}>
        <header className={styles.archiveHeading}>
          <div>
            <span className={styles.sectionKicker}>
              <FiFileText aria-hidden="true" />
              الأرشيف الرسمي
            </span>
            <h2 id="statements-archive-title">الكلمة موقف</h2>
          </div>
          <p>
            أرشيف منظم للبيانات والتوجيهات والمواقف المؤسسية التي تعبّر عن
            رسالة الهيئة ورؤيتها.
          </p>
          <span className={styles.headingSeal} aria-hidden="true">
            <FiShield />
          </span>
        </header>

        <div className={styles.filterBar} aria-label="تصنيفات البيانات">
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
          <span aria-live="polite">{filteredStatements.length} بيانات</span>
        </div>

        <div className={styles.statementsGrid}>
          {filteredStatements.map((statement, index) => (
            <article
              className={`${styles.statementCard} ${
                index === 0 ? styles.featuredCard : ""
              }`}
              key={statement.number}
            >
              <span className={styles.paperFold} aria-hidden="true" />
              <header>
                <span className={styles.statementNumber}>{statement.number}</span>
                <span className={styles.statementCategory}>
                  <FiShield aria-hidden="true" />
                  {statement.categoryLabel}
                </span>
              </header>
              <div className={styles.statementBody}>
                <span className={styles.statementDate}>
                  <FiCalendar aria-hidden="true" />
                  {statement.date}
                </span>
                <h3>{statement.title}</h3>
                <p>{statement.summary}</p>
              </div>
              <footer>
                <span><FiCheckCircle aria-hidden="true" /> صادر عن الهيئة</span>
                <button type="button" onClick={() => setSelectedStatement(statement)}>
                  اقرأ البيان
                  <FiArrowLeft aria-hidden="true" />
                </button>
              </footer>
            </article>
          ))}
        </div>
      </div>

      {selectedStatement ? (
        <div
          className={styles.readerOverlay}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedStatement(null);
          }}
        >
          <article
            className={styles.reader}
            role="dialog"
            aria-modal="true"
            aria-labelledby="statement-reader-title"
          >
            <button
              type="button"
              className={styles.closeReader}
              aria-label="إغلاق البيان"
              onClick={() => setSelectedStatement(null)}
            >
              <FiX aria-hidden="true" />
            </button>
            <header className={styles.readerHeader}>
              <FiShield aria-hidden="true" />
              <span>الهيئة العالمية للسنة النبوية</span>
              <small>{selectedStatement.categoryLabel}</small>
              <h2 id="statement-reader-title">{selectedStatement.title}</h2>
              <time>{selectedStatement.date}</time>
            </header>
            <div className={styles.readerContent}>
              <p className={styles.readerLead}>{selectedStatement.summary}</p>
              {selectedStatement.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className={styles.signature}>
                <FiShield aria-hidden="true" />
                <span>صادر عن<br /><strong>الهيئة العالمية للسنة النبوية</strong></span>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}
