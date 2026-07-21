import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import episodeImage from "../../../puplic/5.webp";
import tabyanImageThree from "../../../puplic/mqdefault_6s.webp";
import tabyanImageFour from "../../../puplic/hqdefault-3.webp";
import styles from "./VisualsSection.module.css";

const visuals = [
  {
    title: "عمائم الإرهاب – الحلقة 5",
    href: "https://wbpsunna.com/videos/%d8%b9%d9%85%d8%a7%d8%a6%d9%85-%d8%a7%d9%84%d8%a5%d8%b1%d9%87%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-5/",
    image: episodeImage,
  },
  {
    title: "سلسلة حلقات التبيان في الرد على الاحمدية القاديانية ( 3 ) د. حمدي عبيد",
    href: "https://wbpsunna.com/videos/%d8%b3%d9%84%d8%b3%d9%84%d8%a9-%d8%ad%d9%84%d9%82%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%a8%d9%8a%d8%a7%d9%86-%d9%81%d9%8a-%d8%a7%d9%84%d8%b1%d8%af-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%a7%d8%ad%d9%85%d8%af-2/",
    image: tabyanImageThree,
  },
  {
    title: "سلسلة حلقات التبيان في الرد على الاحمدية القاديانية ( 4 ) د. حمدي عبيد",
    href: "https://wbpsunna.com/videos/%d8%b3%d9%84%d8%b3%d9%84%d8%a9-%d8%ad%d9%84%d9%82%d8%a7%d8%aa-%d8%a7%d9%84%d8%aa%d8%a8%d9%8a%d8%a7%d9%86-%d9%81%d9%8a-%d8%a7%d9%84%d8%b1%d8%af-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%a7%d8%ad%d9%85%d8%af/",
    image: tabyanImageFour,
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
            <h2 id="visuals-title">مرئيات</h2>
          </div>
        </header>

        <div className={styles.showcase}>
          {visuals.map((visual, index) => (
            <a
              className={`${styles.card} ${
                index === 0 ? styles.featured : styles.compact
              }`}
              key={visual.title}
              href={visual.href}
              target="_blank"
              rel="noreferrer"
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
              <span className={styles.play} aria-hidden="true">
                <span>
                  <FiPlay />
                </span>
              </span>

              <div className={styles.cardContent}>
                <h3>{visual.title}</h3>
                <span>by <strong>admin</strong></span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
