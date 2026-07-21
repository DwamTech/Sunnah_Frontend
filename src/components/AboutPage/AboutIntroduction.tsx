import Image from "next/image";
import logo from "../../../puplic/الهيئة_العالمية_للسنة_النبوية__1_-removebg-preview.png";
import styles from "./AboutPage.module.css";

export default function AboutIntroduction() {
  return (
    <section
      className={styles.introduction}
      id="about-introduction"
      aria-labelledby="introduction-title"
    >
      <div className={styles.sectionContainer}>
        <div className={styles.introductionLogo}>
          <span className={styles.logoHalo} aria-hidden="true" />
          <Image src={logo} alt="شعار الهيئة العالمية للسنة النبوية" />
        </div>

        <div className={styles.introductionContent}>
          <span className={styles.sectionKicker}>التعريف</span>
          <h2 id="introduction-title">التعريف</h2>
          <blockquote>
            هي هيئة إسلامية عالمية تنسيقية لدعم جهود الاعتصام بالكتاب
            والسنة، ونصرة الصحابة وأهل البيت، ورد الشبهات المثارة حولهم.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
