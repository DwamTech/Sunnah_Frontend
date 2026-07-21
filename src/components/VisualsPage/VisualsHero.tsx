import Image from "next/image";
import {
  FiArrowDown,
  FiClock,
  FiFilm,
  FiPlay,
  FiVolume2,
} from "react-icons/fi";
import visuals from "../../data/visuals.json";
import { mediaImages } from "./mediaAssets";
import styles from "./VisualsPage.module.css";

export default function VisualsHero() {
  const featuredVisual = visuals[0];

  return (
    <section className={styles.hero} aria-labelledby="visuals-page-title">
      <div className={styles.heroBackdrop} aria-hidden="true">
        <Image
          src={mediaImages[featuredVisual.image]}
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <span className={styles.filmEdge} aria-hidden="true" />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.liveLabel}>
            <i aria-hidden="true" />
            استوديو الهيئة
          </span>
          <h1 id="visuals-page-title">
            مرئيات
          </h1>
          <div className={styles.heroMeta}>
            <span><FiFilm aria-hidden="true" /> {featuredVisual.categoryLabel}</span>
            <span><FiClock aria-hidden="true" /> {featuredVisual.duration}</span>
            <span><FiVolume2 aria-hidden="true" /> صوت وصورة</span>
          </div>
        </div>

        <a className={styles.heroPlay} href="#visual-library">
          <span className={styles.playRings} aria-hidden="true" />
          <i><FiPlay aria-hidden="true" /></i>
          <strong>ابدأ المشاهدة</strong>
          <small>{featuredVisual.title}</small>
        </a>
      </div>

      <a className={styles.scrollHint} href="#visual-library">
        اكتشف المكتبة المرئية
        <FiArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
