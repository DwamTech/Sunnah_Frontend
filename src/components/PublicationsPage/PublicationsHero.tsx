import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";
import publications from "../../data/publications.json";
import { publicationImages } from "./publicationAssets";
import styles from "./PublicationsPage.module.css";

export default function PublicationsHero() {
  return (
    <section className={styles.hero} aria-labelledby="publications-page-title">
      <div className={styles.heroPattern} aria-hidden="true" />
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 id="publications-page-title">
            كتب
            <strong>وإصدارات</strong>
          </h1>
        </div>

        <div className={styles.bookStage} aria-label="مجموعة من أغلفة إصدارات الهيئة">
          <span className={styles.stageRing} aria-hidden="true" />
          <span className={styles.stageLight} aria-hidden="true" />
          {publications.slice(0, 4).map((publication) => (
            <Image
              className={styles.heroBook}
              src={publicationImages[publication.image]}
              alt={`غلاف كتاب ${publication.title}`}
              priority
              key={publication.number}
            />
          ))}
        </div>
      </div>

      <a className={styles.scrollHint} href="#publications-library">
        استكشف المكتبة
        <FiArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
