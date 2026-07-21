import Image from "next/image";
import reportsImage from "../../../puplic/isometric-stacked-binders-with-papers-vector-350x250.jpg";
import styles from "./ReportsSection.module.css";

const reports = [
  ["وثيقة علماء افريقيا فرنسي", "https://wbpsunna.com/%d9%88%d8%ab%d9%8a%d9%82%d8%a9-%d8%b9%d9%84%d9%85%d8%a7%d8%a1-%d8%a7%d9%81%d8%b1%d9%8a%d9%82%d9%8a%d8%a7-%d9%81%d8%b1%d9%86%d8%b3%d9%8a/", "وثيقة فرنسي🔗"],
  ["وثيقة علماء افريقيا عربي", "https://wbpsunna.com/%d9%88%d8%ab%d9%8a%d9%82%d8%a9-%d8%b9%d9%84%d9%85%d8%a7%d8%a1-%d8%a7%d9%81%d8%b1%d9%8a%d9%82%d9%8a%d8%a7-%d8%b9%d8%b1%d8%a8%d9%8a/", "وثيقة عربي🔗"],
  ["وثيقة علماء افريقيا انجليزي", "https://wbpsunna.com/%d9%88%d8%ab%d9%8a%d9%82%d8%a9-%d8%b9%d9%84%d9%85%d8%a7%d8%a1-%d8%a7%d9%81%d8%b1%d9%8a%d9%82%d9%8a%d8%a7-%d8%a7%d9%86%d8%ac%d9%84%d9%8a%d8%b2%d9%8a/", "وثيقة انجليزي🔗"],
  ["محركات السياسة الفارسية", "https://wbpsunna.com/%d9%85%d8%ad%d8%b1%d9%83%d8%a7%d8%aa-%d8%a7%d9%84%d8%b3%d9%8a%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d9%81%d8%a7%d8%b1%d8%b3%d9%8a%d8%a9/", "محركات السياسة الفارسية 🔗"],
  ["تقرير الهيئة لعام 2017", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2017/", "تقرير 2017🔗"],
  ["تقرير اعلامية الهيئة", "https://wbpsunna.com/%d8%a7%d8%b9%d9%84%d8%a7%d9%85%d9%8a%d8%a9-%d8%a7%d9%84%d9%87%d9%8a%d8%a6%d8%a9/", "اعلامية الهيئة🔗"],
  ["تقرير الهيئة لعام 2019", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2019/", "تقرير 2019🔗"],
  ["تقرير الهيئة لعام 2016", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2016/", "تقرير 2016🔗"],
  ["التقرير التأسيسي للهيئة", "https://wbpsunna.com/%d8%a7%d9%84%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-%d8%a7%d9%84%d8%aa%d8%a3%d8%b3%d9%8a%d8%b3%d9%8a/", "التقرير التأسيسي🔗"],
  ["تقرير الهيئة لعام 2015", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2015/", "تقرير 2015🔗"],
].map(([title, href, description], index) => ({ title, href, description, tone: ["emerald", "gold", "forest", "mint"][index % 4] }));

export default function ReportsSection() {
  return (
    <section id="reports" className={styles.section} aria-labelledby="reports-title">
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
          <h2 id="reports-title">ملفات وتقارير</h2>
        </header>

        <div className={styles.grid}>
          {reports.map((report, index) => (
            <article
              className={`${styles.card} ${styles[report.tone]} ${
                index === 0 ? styles.featured : ""
              } ${index === reports.length - 1 ? styles.wide : ""}`}
              key={report.title}
            >
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
                <h3><a href={report.href} target="_blank" rel="noreferrer">{report.title}</a></h3>
                <p>by <a href="https://wbpsunna.com/author/admin/" target="_blank" rel="noreferrer">admin</a> <a href={report.href} target="_blank" rel="noreferrer">28 أغسطس 2024</a> <a href={`${report.href}#comments`} target="_blank" rel="noreferrer">0</a></p>
                <p>{report.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
