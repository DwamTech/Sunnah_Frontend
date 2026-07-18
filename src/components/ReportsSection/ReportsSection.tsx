import Image from "next/image";
import { FiArchive, FiCalendar, FiFileText } from "react-icons/fi";
import reportsImage from "../../../puplic/isometric-stacked-binders-with-papers-vector-350x250.jpg";
import styles from "./ReportsSection.module.css";

const reports = [
  {
    title: "وثيقة علماء أفريقيا عربي",
    type: "وثيقة علمية",
    year: "2024",
    tone: "emerald",
    description:
      "وثيقة معرفية تجمع الرؤى العلمية وتوثّق الجهود المشتركة في خدمة السنة النبوية.",
  },
  {
    title: "وثيقة علماء أفريقيا إنجليزي",
    type: "وثيقة مترجمة",
    year: "2024",
    tone: "gold",
    description: "نسخة دولية تُتيح محتوى الوثيقة للباحثين والمهتمين حول العالم.",
  },
  {
    title: "محركات السياسة الفارسية",
    type: "ملف بحثي",
    year: "2023",
    tone: "forest",
    description: "قراءة بحثية موثقة في المؤثرات الفكرية والسياسية المعاصرة.",
  },
  {
    title: "تقرير الهيئة السنوي",
    type: "تقرير مؤسسي",
    year: "2012",
    tone: "mint",
    description: "عرض موجز لأبرز أعمال الهيئة وبرامجها ومبادراتها خلال العام.",
  },
];

export default function ReportsSection() {
  return (
    <section className={styles.section} aria-labelledby="reports-title">
      <div className={styles.waves} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className={styles.backgroundShapes} aria-hidden="true">
        <span className={styles.greenCircle} />
        <span className={styles.goldDiamond} />
        <span className={styles.curvedBand} />
        <span className={styles.dots} />
      </div>

      <div className={styles.container}>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>
            <FiArchive aria-hidden="true" />
            الأرشيف المعرفي
          </span>
          <h2 id="reports-title">ملفات وتقارير</h2>
          <p>
            وثائق وتقارير مختارة توثّق جهود الهيئة وتعرض رؤيتها العلمية
            ومبادراتها المؤسسية.
          </p>
        </header>

        <div className={styles.grid}>
          {reports.map((report, index) => (
            <article
              className={`${styles.card} ${styles[report.tone]} ${
                index === 0 ? styles.featured : ""
              } ${index === reports.length - 1 ? styles.wide : ""}`}
              key={report.title}
            >
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className={styles.visual}>
                <span className={styles.backPlate} aria-hidden="true" />
                <Image
                  className={styles.image}
                  src={reportsImage}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 40rem) 80vw, (max-width: 68rem) 40vw, 22vw"
                />
              </div>

              <div className={styles.content}>
                <span className={styles.type}>
                  <FiFileText aria-hidden="true" />
                  {report.type}
                </span>
                <h3>{report.title}</h3>
                <p>{report.description}</p>
                <span className={styles.year}>
                  <FiCalendar aria-hidden="true" />
                  {report.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
