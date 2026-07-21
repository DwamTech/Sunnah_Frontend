import Image from "next/image";
import { FiBookOpen } from "react-icons/fi";
import publications from "../../data/publications.json";
import { publicationImages } from "../PublicationsPage/publicationAssets";
import styles from "./PublicationsSection.module.css";

export default function PublicationsSection() {
  return (
    <section className={styles.section} aria-labelledby="publications-title">
      <div className={styles.topShape} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>
            <FiBookOpen aria-hidden="true" />
            المكتبة العلمية
          </span>
          <h2 id="publications-title">كتب وإصدارات</h2>
        </header>

        <div className={styles.grid}>
          {publications.slice(0, 4).map((publication) => (
            <a
              className={`${styles.card} ${styles[publication.tone]}`}
              key={publication.number}
              href={publication.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.visual}>
                <span className={styles.halo} aria-hidden="true" />
                <Image
                  className={styles.bookImage}
                  src={publicationImages[publication.image]}
                  alt={`غلاف كتاب ${publication.title}`}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 40rem) 70vw, (max-width: 64rem) 35vw, 20vw"
                />
              </div>

              <div className={styles.details}>
                <h3>{publication.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
