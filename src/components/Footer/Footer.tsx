import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FiBookOpen,
  FiFileText,
  FiFolder,
  FiEye,
  FiInfo,
  FiPlayCircle,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import dwamLogo from "../../../puplic/02.png";
import logo from "../../../puplic/الهيئة_العالمية_للسنة_النبوية__1_-removebg-preview.png";
import styles from "./Footer.module.css";

const siteSections = [
  { label: "التعريف بالهيئة", icon: FiInfo },
  { label: "المنظمات الأعضاء", icon: FiUsers },
  { label: "أخبار الهيئة", icon: FiFileText },
  { label: "بيانات صادرة", icon: FiFileText },
];

const knowledgeSections = [
  { label: "كتب وإصدارات", icon: FiBookOpen },
  { label: "مقالات وبحوث", icon: FiFileText },
  { label: "ملفات وتقارير", icon: FiFolder },
  { label: "مرئيات", icon: FiPlayCircle },
];

type FooterItem = {
  label: string;
  icon: IconType;
};

function FooterList({ items }: { items: FooterItem[] }) {
  return (
    <ul>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <li key={item.label}>
            <Icon aria-hidden="true" />
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.identity} aria-label="عن الهيئة">
            <div className={styles.brand}>
              <Image
                className={styles.logo}
                src={logo}
                alt="شعار الهيئة العالمية للسنة النبوية"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h2>الهيئة العالمية للسنة النبوية</h2>
                <div className={styles.tagline}>
                  <span>رسالةٌ عالمية</span>
                  <span>علمٌ نافع</span>
                </div>
              </div>
            </div>

            <p>
              منصة معرفية تُعنى بخدمة السنة النبوية، ونشر هدي النبي ﷺ،
              وتقديم المحتوى العلمي الموثوق بأسلوب واضح ومعاصر.
            </p>
          </section>

          <section className={styles.column}>
            <h3>عن الهيئة</h3>
            <FooterList items={siteSections} />
          </section>

          <section className={styles.column}>
            <h3>المحتوى المعرفي</h3>
            <FooterList items={knowledgeSections} />
          </section>

          <section className={styles.messageGroup} aria-label="رسالة الهيئة ورؤيتها">
            <div className={styles.message}>
              <span className={styles.messageLabel}>
                <FiTarget aria-hidden="true" />
                رسالتنا
              </span>
              <blockquote>
                الإسهام في التعريف بالسنة النبوية وتعزيز حضورها في حياة
                المجتمعات بالعلم والحكمة.
              </blockquote>
            </div>

            <div className={`${styles.message} ${styles.vision}`}>
              <span className={styles.messageLabel}>
                <FiEye aria-hidden="true" />
                رؤيتنا
              </span>
              <blockquote>
                أن نكون مرجعًا عالميًا موثوقًا في خدمة السنة النبوية ونشر
                هديها بلغة العصر.
              </blockquote>
            </div>
          </section>
        </div>

        <div className={styles.bottomBar}>
          <nav className={styles.legalLinks} aria-label="الروابط القانونية">
            <Link href="/terms-and-conditions">شروط الأحكام</Link>
            <span aria-hidden="true">/</span>
            <Link href="/privacy-policy">سياسة الخصوصية</Link>
          </nav>

          <p>
            جميع الحقوق محفوظة © للهيئة العالمية للسنة النبوية
            <span className={styles.divider}>|</span>
            <span className={styles.credit}>
              تصميم وبرمجة دوام للتقنية
              <a href="https://dwam-tech.com/" target="_blank" rel="noreferrer">
                <Image
                  className={styles.dwamLogo}
                  src={dwamLogo}
                  alt="دوام للتقنية"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </span>
          </p>
          <p className={styles.signature}>بالعلم نهتدي، وبالسنة نقتدي</p>
        </div>
      </div>
    </footer>
  );
}
