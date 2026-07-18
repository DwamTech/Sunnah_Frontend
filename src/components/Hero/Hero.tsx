import Image from "next/image";
import { FiBookOpen, FiCheckCircle, FiGlobe } from "react-icons/fi";
import heroImage from "../../../puplic/hero-3d.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.imageFrame}>
          <Image
            className={styles.background}
            src={heroImage}
            alt=""
            fill
            priority
            sizes="(max-width: 48rem) 80vw, 42vw"
          />
        </div>
        <span className={`${styles.orbit} ${styles.orbitOne}`} />
        <span className={`${styles.orbit} ${styles.orbitTwo}`} />
        <span className={`${styles.orbit} ${styles.orbitThree}`} />
      </div>

      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.pattern} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span />
            في رحاب السنة النبوية
          </span>

          <h1 id="hero-title">
            <span className={styles.titleLine}>
              <span className={styles.goldTitle}>معًا لخدمة</span>
              <strong>السنة النبوية</strong>
            </span>
            <span className={styles.goldTitle}>ونشر هديها للعالم</span>
          </h1>

          <p>
            نُسهم في تقديم المعرفة الصحيحة بالسنة النبوية، ونشر قيمها
            ومقاصدها بأسلوب علمي موثوق يصل إلى المجتمعات حول العالم.
          </p>

          <div className={styles.features} aria-label="مميزات المنصة">
            <div className={styles.feature}>
              <span className={styles.icon}>
                <FiBookOpen aria-hidden="true" />
              </span>
              <div>
                <strong>محتوى علمي</strong>
                <span>موثوق ومتخصص</span>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={styles.icon}>
                <FiGlobe aria-hidden="true" />
              </span>
              <div>
                <strong>رسالة عالمية</strong>
                <span>علم وهداية للجميع</span>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={styles.icon}>
                <FiCheckCircle aria-hidden="true" />
              </span>
              <div>
                <strong>منهج علمي</strong>
                <span>تأصيل ودقة ووضوح</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
