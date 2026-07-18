import Image from "next/image";
import { FiBookOpen, FiCalendar, FiGlobe, FiPlayCircle } from "react-icons/fi";
import newsImageOne from "../../../puplic/caption.jpg";
import newsImageTwo from "../../../puplic/BPEdnTBCYAABNYm.jpg";
import newsImageThree from "../../../puplic/2f3cdab01c9f854d96af086e7f14c25f.jpg";
import styles from "./AuthorityNews.module.css";

const newsItems = [
  {
    title: "جهود عالمية متواصلة في خدمة السنة النبوية وعلومها",
    category: "أخبار الهيئة",
    date: "أحدث الأخبار",
    image: newsImageOne,
    icon: FiGlobe,
  },
  {
    title: "برامج علمية لتعزيز المعرفة بهدي النبي ﷺ",
    category: "برامج علمية",
    date: "أنشطة الهيئة",
    image: newsImageTwo,
    icon: FiBookOpen,
  },
  {
    title: "محتوى مرئي يقدّم قيم السنة بأسلوب معاصر",
    category: "مرئيات",
    date: "إعلامية الهيئة",
    image: newsImageThree,
    icon: FiPlayCircle,
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
          <span className={styles.eyebrow}>آخر المستجدات</span>
          <h2 id="news-title">أخبار الهيئة</h2>
          <p>
            تعرّف على أحدث أنشطة الهيئة ومبادراتها العلمية والإعلامية في
            خدمة السنة النبوية.
          </p>
        </header>

        <div className={styles.grid}>
          {newsItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
                key={item.title}
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
                  <span className={styles.category}>
                    <Icon aria-hidden="true" />
                    {item.category}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.date}>
                    <FiCalendar aria-hidden="true" />
                    {item.date}
                  </span>
                  <h3>{item.title}</h3>
                  <span className={styles.cardLine} aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
