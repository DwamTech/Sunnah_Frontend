import Image from "next/image";
import { FiClock, FiFilm, FiPlay } from "react-icons/fi";
import mainVisual from "../../../puplic/1395849838834267800.jpg.webp";
import visualTwo from "../../../puplic/images.jpg";
import visualThree from "../../../puplic/2f3cdab01c9f854d96af086e7f14c25f.jpg";
import styles from "./VisualsSection.module.css";

const visuals = [
  {
    title: "من رحاب المسجد النبوي: هديٌ يبني الإنسان",
    category: "سلسلة معرفية",
    duration: "18:42",
    image: mainVisual,
  },
  {
    title: "السنة النبوية وبناء الوعي المعاصر",
    category: "برنامج علمي",
    duration: "12:18",
    image: visualTwo,
  },
  {
    title: "قيم الرحمة في هدي النبي ﷺ",
    category: "رسائل مرئية",
    duration: "09:35",
    image: visualThree,
  },
];

export default function VisualsSection() {
  return (
    <section className={styles.section} aria-labelledby="visuals-title">
      <div className={styles.topTransition} aria-hidden="true" />
      <div className={styles.lightBeam} aria-hidden="true" />
      <div className={styles.filmPattern} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>
              <FiFilm aria-hidden="true" />
              المشاهدة المختارة
            </span>
            <h2 id="visuals-title">مرئيات</h2>
          </div>
          <p>
            محتوى مرئي موثوق يقدّم هدي السنة النبوية وقيمها بلغة معاصرة
            وتجربة مشاهدة ملهمة.
          </p>
        </header>

        <div className={styles.showcase}>
          {visuals.map((visual, index) => (
            <article
              className={`${styles.card} ${
                index === 0 ? styles.featured : styles.compact
              }`}
              key={visual.title}
            >
              <Image
                className={styles.image}
                src={visual.image}
                alt=""
                fill
                loading="lazy"
                decoding="async"
                sizes={
                  index === 0
                    ? "(max-width: 48rem) 100vw, 65vw"
                    : "(max-width: 48rem) 100vw, 32vw"
                }
              />

              <div className={styles.imageOverlay} aria-hidden="true" />
              <span className={styles.sequence} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.play} aria-hidden="true">
                <span>
                  <FiPlay />
                </span>
              </span>

              <div className={styles.cardContent}>
                <span className={styles.category}>{visual.category}</span>
                <h3>{visual.title}</h3>
                <span className={styles.duration}>
                  <FiClock aria-hidden="true" />
                  {visual.duration}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footerLine} aria-hidden="true">
          <span>محتوى معرفي</span>
          <i />
          <span>رؤية معاصرة</span>
          <i />
          <span>رسالة عالمية</span>
        </div>
      </div>
    </section>
  );
}
