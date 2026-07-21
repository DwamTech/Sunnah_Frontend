import Image from "next/image";
import graduationImageOne from "../../../puplic/صورة-واتساب-بتاريخ-2024-08-19-في-10.21.27_e71f96d0-350x250.jpg";
import graduationImageTwo from "../../../puplic/354366-350x250.jpg";
import outreachImage from "../../../puplic/465667-350x250.png";
import televisionImage from "../../../puplic/صورة-واتساب-بتاريخ-2024-07-16-في-15.02.25_a562931e-350x250.jpg";
import styles from "./AuthorityNews.module.css";

const newsItems = [
  {
    title: "حفل تخريج الدفعة 19 من مجمع العربي الفرنسي للعلوم الإسلامية والغربية في غينيا كوناكري",
    href: "https://wbpsunna.com/%d8%ad%d9%81%d9%84-%d8%aa%d8%ae%d8%b1%d9%8a%d8%ac-%d8%a7%d9%84%d8%af%d9%81%d8%b9%d8%a9-19-%d9%85%d9%86-%d9%85%d8%ac%d9%85%d8%b9-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a-%d8%a7%d9%84%d9%81%d8%b1%d9%86/",
    image: graduationImageOne,
  },
  {
    title: "حفل تخريج الدفعة الثانية من حفظة القرآن الكريم في مركز عمر بن الخطاب",
    href: "https://wbpsunna.com/%d8%ad%d9%81%d9%84-%d8%aa%d8%ae%d8%b1%d9%8a%d8%ac-%d8%a7%d9%84%d8%af%d9%81%d8%b9%d8%a9-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a%d8%a9-%d9%85%d9%86-%d8%ad%d9%81%d8%b8%d8%a9-%d8%a7%d9%84%d9%82%d8%b1%d8%a2/",
    image: graduationImageTwo,
  },
  {
    title: "جولة دعوية لمواجهة المد الشيعي في ساحل العاج",
    href: "https://wbpsunna.com/%d8%ac%d9%88%d9%84%d8%a9-%d8%af%d8%b9%d9%88%d9%8a%d8%a9-%d9%84%d9%85%d9%88%d8%a7%d8%ac%d9%87%d8%a9-%d8%a7%d9%84%d9%85%d8%af-%d8%a7%d9%84%d8%b4%d9%8a%d8%b9%d9%8a-%d9%81%d9%8a-%d8%b3%d8%a7%d8%ad%d9%84/",
    image: outreachImage,
  },
  {
    title: "أبو ناصر عبد الله يناقش في برنامج تلفزيوني بالسنغال أحكام عاشوراء وتصحيح المفاهيم الخاطئة",
    href: "https://wbpsunna.com/%d8%a3%d8%a8%d9%88-%d9%86%d8%a7%d8%b5%d8%b1-%d8%b9%d8%a8%d8%af-%d8%a7%d9%84%d9%84%d9%87-%d9%8a%d9%86%d8%a7%d9%82%d8%b4-%d9%81%d9%8a-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%aa%d9%84%d9%81%d8%b2%d9%8a/",
    image: televisionImage,
  },
];

export default function AuthorityNews() {
  return (
    <section className={styles.section} aria-labelledby="news-title">
      <div className={styles.separator} aria-hidden="true">
        <span />
      </div>

      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 id="news-title">أخبار الهيئة</h2>
        </header>

        <div className={styles.grid}>
          {newsItems.map((item, index) => {
            return (
              <a
                className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.imageWrapper}>
                  <Image
                    className={styles.image}
                    src={item.image}
                    alt=""
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 48rem) 100vw, 33vw"
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3>{item.title}</h3>
                  <span className={styles.cardLine} aria-hidden="true" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
