"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiFilm,
  FiMaximize,
  FiPause,
  FiPlay,
  FiVolume2,
  FiX,
} from "react-icons/fi";
import visuals from "../../data/visuals.json";
import { mediaImages } from "./mediaAssets";
import styles from "./VisualsPage.module.css";

type VisualItem = (typeof visuals)[number];

const filters = [
  { label: "كل المرئيات", value: "all" },
  { label: "سلاسل معرفية", value: "series" },
  { label: "برامج علمية", value: "programs" },
  { label: "رسائل مرئية", value: "messages" },
];

export default function VisualGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedVisual, setSelectedVisual] = useState<VisualItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const filteredVisuals = useMemo(
    () =>
      activeFilter === "all"
        ? visuals
        : visuals.filter((visual) => visual.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (!selectedVisual) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedVisual(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedVisual]);

  const openVisual = (visual: VisualItem) => {
    window.open(visual.href, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className={styles.library}
      id="visual-library"
      aria-labelledby="visual-library-title"
    >
      <span className={styles.lightBeam} aria-hidden="true" />
      <div className={styles.container}>
        <header className={styles.libraryHeading}>
          <div>
            <span className={styles.sectionKicker}>
              <FiFilm aria-hidden="true" />
              المكتبة المرئية
            </span>
            <h2 id="visual-library-title">شاهد المعرفة</h2>
          </div>
          <p>
            برامج وسلاسل ورسائل قصيرة تجمع المعلومة الموثوقة والصورة
            الملهمة في تجربة مشاهدة سهلة وقريبة.
          </p>
          <span className={styles.headingFrame} aria-hidden="true">
            <FiPlay />
          </span>
        </header>

        <div className={styles.filterBar} aria-label="تصنيفات المرئيات">
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
          <span aria-live="polite">{filteredVisuals.length} مواد مرئية</span>
        </div>

        <div className={styles.gallery}>
          {filteredVisuals.map((visual, index) => (
            <article
              className={`${styles.visualCard} ${
                index === 0 ? styles.featuredCard : ""
              }`}
              key={visual.number}
            >
              <Image
                src={mediaImages[visual.image]}
                alt=""
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes={
                  index === 0
                    ? "(max-width: 48rem) 100vw, 65vw"
                    : "(max-width: 48rem) 100vw, 32vw"
                }
              />
              <span className={styles.cardShade} aria-hidden="true" />
              <span className={styles.sequence}>{visual.number}</span>
              <button
                type="button"
                className={styles.cardPlay}
                aria-label={`مشاهدة ${visual.title}`}
                onClick={() => openVisual(visual)}
              >
                <FiPlay aria-hidden="true" />
              </button>
              <div className={styles.cardContent}>
                <span>{visual.categoryLabel}</span>
                <h3>{visual.title}</h3>
                <div>
                  <span><FiClock aria-hidden="true" /> {visual.duration}</span>
                  <span><FiCalendar aria-hidden="true" /> {visual.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.studioStats}>
          <span><strong>06</strong> مواد مختارة</span>
          <span><strong>03</strong> مسارات مشاهدة</span>
          <span><strong>∞</strong> أثر معرفي ممتد</span>
        </div>
      </div>

      {selectedVisual ? (
        <div
          className={styles.playerOverlay}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedVisual(null);
          }}
        >
          <article
            className={styles.player}
            role="dialog"
            aria-modal="true"
            aria-labelledby="player-title"
          >
            <button
              type="button"
              className={styles.closePlayer}
              aria-label="إغلاق المشغل"
              onClick={() => setSelectedVisual(null)}
            >
              <FiX aria-hidden="true" />
            </button>
            <div className={styles.playerScreen}>
              <Image
                src={mediaImages[selectedVisual.image]}
                alt=""
                fill
                sizes="90vw"
              />
              <span className={styles.screenShade} aria-hidden="true" />
              <button
                type="button"
                className={styles.mainControl}
                aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
                onClick={() => setIsPlaying((current) => !current)}
              >
                {isPlaying ? <FiPause /> : <FiPlay />}
              </button>
              <div className={styles.controls}>
                <button type="button" onClick={() => setIsPlaying((current) => !current)}>
                  {isPlaying ? <FiPause /> : <FiPlay />}
                </button>
                <span className={styles.progress}><i /></span>
                <span>{selectedVisual.duration}</span>
                <FiVolume2 aria-hidden="true" />
                <FiMaximize aria-hidden="true" />
              </div>
            </div>
            <div className={styles.playerInfo}>
              <span>{selectedVisual.categoryLabel}</span>
              <h2 id="player-title">{selectedVisual.title}</h2>
              <p>{selectedVisual.description}</p>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}
