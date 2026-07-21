import Image from "next/image";
import authorityLogo from "../../../puplic/الهيئة_العالمية_للسنة_النبوية__1_-removebg-preview.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.imageFrame}>
          <Image
            className={styles.background}
            src={authorityLogo}
            alt="شعار الهيئة العالمية للسنة النبوية"
            fill
            priority
            sizes="(max-width: 48rem) 80vw, 30rem"
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
          <h1 id="hero-title">
            <span className={styles.titleLine}>
              <span className={styles.goldTitle}>الهيئة العالمية</span>
              <strong>للسنة النبوية</strong>
            </span>
          </h1>

          <p>
            هيئة إسلامية عالمية تنسيقية لدعم جهود الاعتصام بالكتاب والسنة
            ونصرة الصحابة وأهل البيت ورد الشبهات المثارة حولهم.
          </p>

        </div>
      </div>

      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
