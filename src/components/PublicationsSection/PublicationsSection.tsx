import Image from "next/image";
import { FiBookOpen, FiLayers } from "react-icons/fi";
import cooperationBook from "../../../puplic/Group-29-360x504.png";
import terminologyBook from "../../../puplic/Group-20-360x504.png";
import preservationBook from "../../../puplic/Group-28-360x504.png";
import mahdiBook from "../../../puplic/Group-36-360x504.png";
import styles from "./PublicationsSection.module.css";

const publications = [
  {
    title: "تعاونوا نتفق",
    description: "قيم التعاون والتآلف في ضوء السنة النبوية",
    image: cooperationBook,
    tone: "emerald",
    number: "01",
  },
  {
    title: "المصطلحات الوافدة",
    description: "وأثرها على الهوية الإسلامية",
    image: terminologyBook,
    tone: "amber",
    number: "02",
  },
  {
    title: "وإنّا له لحافظون",
    description: "دراسات في حفظ الوحي والسنة",
    image: preservationBook,
    tone: "mint",
    number: "03",
  },
  {
    title: "المهدي المنتظر",
    description: "الرجعة والشفاعة في ميزان العلم",
    image: mahdiBook,
    tone: "rose",
    number: "04",
  },
];

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
          <p>
            مجموعة مختارة من إصدارات الهيئة العلمية لخدمة السنة النبوية
            ومعالجة القضايا الفكرية والمجتمعية.
          </p>
        </header>

        <div className={styles.grid}>
          {publications.map((publication) => (
            <article
              className={`${styles.card} ${styles[publication.tone]}`}
              key={publication.number}
            >
              <span className={styles.number}>{publication.number}</span>

              <div className={styles.visual}>
                <span className={styles.halo} aria-hidden="true" />
                <Image
                  className={styles.bookImage}
                  src={publication.image}
                  alt={`غلاف كتاب ${publication.title}`}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 40rem) 70vw, (max-width: 64rem) 35vw, 20vw"
                />
              </div>

              <div className={styles.details}>
                <span className={styles.meta}>
                  <FiLayers aria-hidden="true" />
                  إصدار علمي
                </span>
                <h3>{publication.title}</h3>
                <p>{publication.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
