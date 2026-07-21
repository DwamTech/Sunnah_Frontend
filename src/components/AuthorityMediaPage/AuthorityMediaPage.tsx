import { FiBookOpen, FiGlobe, FiMonitor, FiRadio, FiShare2, FiTv } from "react-icons/fi";
import styles from "./AuthorityMediaPage.module.css";

export type AuthorityMediaData = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  theme: string;
  icon: string;
  metric: string;
  metricValue: string;
  items: {
    title: string;
    subtitle: string;
    description: string;
    meta: string;
    tag: string;
    icon: string;
  }[];
};

export default function AuthorityMediaPage({
  data,
}: {
  data: AuthorityMediaData;
}) {
  const heroIcons = {
    tv: FiTv,
    radio: FiRadio,
    book: FiBookOpen,
    monitor: FiMonitor,
    share: FiShare2,
  };
  const HeroIcon = heroIcons[data.icon as keyof typeof heroIcons] ?? FiGlobe;

  return (
    <div className={`${styles.page} ${styles[data.theme] ?? ""}`}>
      <section className={styles.hero} aria-labelledby="media-page-title">
        <span className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroOrbit} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className={styles.heroContent}>
          <h1 id="media-page-title">{data.title}</h1>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <span className={styles.signalOne} />
          <span className={styles.signalTwo} />
          <div className={styles.iconCore}>
            <HeroIcon />
            <i />
          </div>
        </div>
      </section>

      <section className={styles.emptySection} aria-label="المحتوى">
        <div className={styles.emptyCard}>No Content Available</div>
      </section>
    </div>
  );
}
