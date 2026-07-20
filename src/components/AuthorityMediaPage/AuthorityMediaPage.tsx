import type { IconType } from "react-icons";
import {
  FiAward,
  FiBookmark,
  FiBookOpen,
  FiChevronLeft,
  FiFileText,
  FiGlobe,
  FiHeadphones,
  FiHeart,
  FiLayers,
  FiMessageCircle,
  FiMic,
  FiMonitor,
  FiPlay,
  FiRadio,
  FiSearch,
  FiShare2,
  FiTrendingUp,
  FiTv,
  FiUsers,
  FiVolume2,
  FiWifi,
} from "react-icons/fi";
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

const icons: Record<string, IconType> = {
  award: FiAward,
  bookmark: FiBookmark,
  book: FiBookOpen,
  broadcast: FiWifi,
  file: FiFileText,
  globe: FiGlobe,
  headphones: FiHeadphones,
  heart: FiHeart,
  layers: FiLayers,
  message: FiMessageCircle,
  mic: FiMic,
  monitor: FiMonitor,
  radio: FiRadio,
  search: FiSearch,
  share: FiShare2,
  trending: FiTrendingUp,
  tv: FiTv,
  users: FiUsers,
  volume: FiVolume2,
};

export default function AuthorityMediaPage({
  data,
}: {
  data: AuthorityMediaData;
}) {
  const HeroIcon = icons[data.icon] ?? FiGlobe;

  return (
    <div
      className={`${styles.page} ${styles[data.theme] ?? ""}`}
      data-media-theme={data.theme}
    >
      <section className={styles.hero} aria-labelledby="media-page-title">
        <span className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroOrbit} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{data.eyebrow}</span>
            <h1 id="media-page-title">{data.title}</h1>
            <p>{data.intro}</p>
            <a href="#media-directory" className={styles.explore}>
              استكشف المنصات
              <FiChevronLeft aria-hidden="true" />
            </a>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <span className={styles.signalOne} />
            <span className={styles.signalTwo} />
            <div className={styles.iconCore}>
              <HeroIcon />
              <i />
            </div>
            <div className={styles.metric}>
              <strong>{data.metricValue}</strong>
              <span>{data.metric}</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.directory}
        id="media-directory"
        aria-labelledby="directory-title"
      >
        <div className={styles.container}>
          <header className={styles.sectionHeading}>
            <div>
              <span>منصات الهيئة</span>
              <h2 id="directory-title">محتوى يصنع معرفة وأثرًا</h2>
            </div>
            <p>
              مبادرات إعلامية متخصصة تجمع دقة المعلومة وجودة التقديم، وتفتح
              نوافذ متنوعة للوصول إلى جمهور أوسع.
            </p>
          </header>

          <div className={styles.cards}>
            {data.items.map((item, index) => {
              const ItemIcon = icons[item.icon] ?? FiPlay;

              return (
                <article className={styles.card} key={item.title}>
                  <span className={styles.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.cardIcon}>
                    <ItemIcon aria-hidden="true" />
                  </div>
                  <span className={styles.cardTag}>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <strong>{item.subtitle}</strong>
                  <p>{item.description}</p>
                  <footer>
                    <span>{item.meta}</span>
                    <span className={styles.status}>
                      <i aria-hidden="true" />
                      متاح الآن
                    </span>
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.promise} aria-label="رسالة إعلامية الهيئة">
        <div className={styles.container}>
          <FiShare2 aria-hidden="true" />
          <div>
            <span>إعلامٌ مسؤول</span>
            <h2>معرفة موثوقة، بلغة العصر، ورسالة تتجاوز الحدود</h2>
          </div>
          <p>
            نختار المحتوى بعناية، ونقدمه بوضوح، ونبني من خلاله جسورًا من
            الفهم والوعي والتواصل الإنساني.
          </p>
        </div>
      </section>
    </div>
  );
}
