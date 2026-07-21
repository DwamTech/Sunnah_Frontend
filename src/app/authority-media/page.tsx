import type { Metadata } from "next";
import Image from "next/image";
import { FiRadio } from "react-icons/fi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import televisionImage from "../../../puplic/صورة-واتساب-بتاريخ-2024-07-16-في-15.02.25_a562931e-350x250.jpg";
import outreachImage from "../../../puplic/465667-350x250.png";
import graduationImageTwo from "../../../puplic/354366-350x250.jpg";
import graduationImageOne from "../../../puplic/صورة-واتساب-بتاريخ-2024-08-19-في-10.21.27_e71f96d0-350x250.jpg";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "إعلامية الهيئة | الهيئة العالمية للسنة النبوية",
};

const items = [
  ["أبو ناصر عبد الله يناقش في برنامج تلفزيوني بالسنغال أحكام عاشوراء وتصحيح المفاهيم الخاطئة", "https://wbpsunna.com/%d8%a3%d8%a8%d9%88-%d9%86%d8%a7%d8%b5%d8%b1-%d8%b9%d8%a8%d8%af-%d8%a7%d9%84%d9%84%d9%87-%d9%8a%d9%86%d8%a7%d9%82%d8%b4-%d9%81%d9%8a-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d8%ac-%d8%aa%d9%84%d9%81%d8%b2%d9%8a/", televisionImage],
  ["جولة دعوية لمواجهة المد الشيعي في ساحل العاج", "https://wbpsunna.com/%d8%ac%d9%88%d9%84%d8%a9-%d8%af%d8%b9%d9%88%d9%8a%d8%a9-%d9%84%d9%85%d9%88%d8%a7%d8%ac%d9%87%d8%a9-%d8%a7%d9%84%d9%85%d8%af-%d8%a7%d9%84%d8%b4%d9%8a%d8%b9%d9%8a-%d9%81%d9%8a-%d8%b3%d8%a7%d8%ad%d9%84/", outreachImage],
  ["حفل تخريج الدفعة الثانية من حفظة القرآن الكريم في مركز عمر بن الخطاب", "https://wbpsunna.com/%d8%ad%d9%81%d9%84-%d8%aa%d8%ae%d8%b1%d9%8a%d8%ac-%d8%a7%d9%84%d8%af%d9%81%d8%b9%d8%a9-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a%d8%a9-%d9%85%d9%86-%d8%ad%d9%81%d8%b8%d8%a9-%d8%a7%d9%84%d9%82%d8%b1%d8%a2/", graduationImageTwo],
  ["حفل تخريج الدفعة 19 من مجمع العربي الفرنسي للعلوم الإسلامية والغربية في غينيا كوناكري", "https://wbpsunna.com/%d8%ad%d9%81%d9%84-%d8%aa%d8%ae%d8%b1%d9%8a%d8%ac-%d8%a7%d9%84%d8%af%d9%81%d8%b9%d8%a9-19-%d9%85%d9%86-%d9%85%d8%ac%d9%85%d8%b9-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a-%d8%a7%d9%84%d9%81%d8%b1%d9%86/", graduationImageOne],
] as const;

export default function AuthorityMediaPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="authority-media-title">
          <span className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroOrbit} aria-hidden="true"><span /><span /><span /></div>
          <div className={styles.heroContent}>
            <h1 id="authority-media-title">إعلامية الهيئة</h1>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <span className={styles.signalOne} />
            <span className={styles.signalTwo} />
            <div className={styles.iconCore}><FiRadio /><i /></div>
          </div>
        </section>

        <section className={styles.grid} aria-label="أخبار إعلامية الهيئة">
          {items.map(([title, href, image]) => (
            <a href={href} target="_blank" rel="noreferrer" key={href}>
              <Image src={image} alt="" fill sizes="(max-width: 40rem) 100vw, 45vw" />
              <span />
              <h2>{title}</h2>
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
