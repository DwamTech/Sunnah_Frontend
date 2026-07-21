"use client";

import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import publications from "../../data/publications.json";
import { publicationImages } from "./publicationAssets";
import styles from "./PublicationsPage.module.css";

export default function PublicationsLibrary() {
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
            <h2 id="library-title">كتب وإصدارات</h2>
          </div>
        </header>

        <div className={styles.publicationsGrid}>
          {publications.map((publication) => (
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
                <h3>{publication.title}</h3>
                <div className={styles.cardFooter}>
                  <a href={publication.href} target="_blank" rel="noreferrer">
                    استعرض الإصدار
                    <FiArrowLeft aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
