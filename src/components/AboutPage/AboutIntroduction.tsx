import Image from "next/image";
import { FiBookOpen, FiGlobe, FiHeart, FiUsers } from "react-icons/fi";
import logo from "../../../puplic/الهيئة_العالمية_للسنة_النبوية__1_-removebg-preview.png";
import styles from "./AboutPage.module.css";

const pillars = [
  { label: "الكتاب والسنة", icon: FiBookOpen },
  { label: "الصحابة وأهل البيت", icon: FiHeart },
  { label: "تنسيق الجهود", icon: FiUsers },
  { label: "رسالة عالمية", icon: FiGlobe },
];

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
          <h2 id="introduction-title">رسالة تجمع العلم والعمل</h2>
          <blockquote>
            هي هيئة إسلامية عالمية تنسيقية لدعم جهود الاعتصام بالكتاب
            والسنة، ونصرة الصحابة وأهل البيت، ورد الشبهات المثارة حولهم.
          </blockquote>

          <div className={styles.pillars}>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div className={styles.pillar} key={pillar.label}>
                  <Icon aria-hidden="true" />
                  <span>{pillar.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
