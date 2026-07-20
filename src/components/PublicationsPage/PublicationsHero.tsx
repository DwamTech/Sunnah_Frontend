import Image from "next/image";
import { FiArrowDown, FiBookOpen, FiFeather } from "react-icons/fi";
import publications from "../../data/publications.json";
import { publicationImages } from "./publicationAssets";
import styles from "./PublicationsPage.module.css";

export default function PublicationsHero() {
  return (
    <section className={styles.hero} aria-labelledby="publications-page-title">
      <div className={styles.heroPattern} aria-hidden="true" />
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <FiFeather aria-hidden="true" />
            معرفة موثوقة بلغة العصر
          </span>
          <h1 id="publications-page-title">
            كتب
            <strong>وإصدارات</strong>
          </h1>
          <p>
            مكتبة علمية تجمع التأصيل والتحليل، وتقدم إصدارات متخصصة في
            السنة النبوية والقيم والهوية والقضايا الفكرية المعاصرة.
          </p>

          <div className={styles.heroMeta}>
            <span>
              <strong>{String(publications.length).padStart(2, "0")}</strong>
              إصدارات مختارة
            </span>
            <span>
              <FiBookOpen aria-hidden="true" />
              محتوى علمي محكّم
            </span>
          </div>
        </div>

        <div className={styles.bookStage} aria-label="مجموعة من أغلفة إصدارات الهيئة">
          <span className={styles.stageRing} aria-hidden="true" />
          <span className={styles.stageLight} aria-hidden="true" />
          {publications.map((publication) => (
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
