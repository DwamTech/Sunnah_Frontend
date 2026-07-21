"use client";

import { useEffect, useRef, useState } from "react";
import { FiBookOpen, FiRadio, FiTrendingUp, FiUsers } from "react-icons/fi";
import styles from "./AuthorityStatisticsSection.module.css";

const statistics = [
  {
    value: 43,
    label: "الإصدارات",
    icon: FiBookOpen,
    tone: "gold",
  },
  {
    value: 22,
    label: "الإعلام",
    icon: FiRadio,
    tone: "green",
  },
  {
    value: 29,
    label: "المنظمات",
    icon: FiUsers,
    tone: "mint",
  },
];

export default function AuthorityStatisticsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState(() => statistics.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    let animationFrame: number | undefined;
    let hasStarted = false;

    if (!section) {
      return undefined;
    }

    const startCounter = () => {
      if (hasStarted) {
        return;
      }

      hasStarted = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCounts(statistics.map((statistic) => statistic.value));
        return;
      }

      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        let isComplete = true;

        const nextCounts = statistics.map((statistic, index) => {
          const duration = 1500 + index * 220;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          if (progress < 1) {
            isComplete = false;
          }

          return Math.round(statistic.value * easedProgress);
        });

        setCounts(nextCounts);

        if (!isComplete) {
          animationFrame = requestAnimationFrame(updateCounter);
        }
      };

      animationFrame = requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (animationFrame !== undefined) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="statistics-title"
    >
      <div className={styles.topCurve} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>
            <FiTrendingUp aria-hidden="true" />
            أثرٌ يتنامى
          </span>
          <h2 id="statistics-title">إحصائيات الهيئة</h2>
          <p>أرقام تختصر مسيرة من المعرفة والتعاون والانتشار.</p>
        </header>

        <div className={styles.grid}>
          {statistics.map((statistic, index) => {
            const Icon = statistic.icon;

            return (
              <article
                className={`${styles.statistic} ${styles[statistic.tone]}`}
                key={statistic.label}
              >
                <span className={styles.index} aria-hidden="true">
                  0{index + 1}
                </span>
                <div className={styles.iconOrbit}>
                  <span className={styles.orbitDot} aria-hidden="true" />
                  <span className={styles.icon}>
                    <Icon aria-hidden="true" />
                  </span>
                </div>
                <strong>{counts[index]}</strong>
                <h3>{statistic.label}</h3>
              </article>
            );
          })}
        </div>

        <div className={styles.statement}>
          <span />
          <p>العلم رسالة، والأثر رحلة مستمرة</p>
          <span />
        </div>
      </div>
    </section>
  );
}
