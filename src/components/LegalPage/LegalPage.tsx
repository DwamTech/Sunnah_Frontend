import {
  FiArrowDown,
  FiCheckCircle,
  FiFileText,
  FiShield,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./LegalPage.module.css";

type LegalSection = {
  id: string;
  title: string;
  icon: IconType;
  paragraphs: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconType;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  description,
  icon: PageIcon,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="legal-page-title">
          <div className={styles.heroShapes} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                <PageIcon aria-hidden="true" />
                {eyebrow}
              </span>
              <h1 id="legal-page-title">{title}</h1>
              <p>{description}</p>
              <span className={styles.status}>
                <FiCheckCircle aria-hidden="true" />
                نسخة الموقع الحالية
              </span>
            </div>

            <div className={styles.documentVisual} aria-hidden="true">
              <span className={styles.documentBack} />
              <div className={styles.document}>
                <span className={styles.documentIcon}>
                  <PageIcon />
                </span>
                <span className={styles.documentLine} />
                <span className={styles.documentLine} />
                <span className={styles.documentLine} />
                <strong>{title}</strong>
              </div>
              <span className={styles.documentOrbit} />
            </div>
          </div>

          <a className={styles.scrollHint} href="#legal-content">
            <FiArrowDown aria-hidden="true" />
            استعرض البنود
          </a>
        </section>

        <section className={styles.contentSection} id="legal-content">
          <div className={styles.contentShapes} aria-hidden="true">
            <span />
            <span />
          </div>

          <div className={styles.contentContainer}>
            <aside className={styles.index}>
              <div className={styles.indexHeading}>
                <FiFileText aria-hidden="true" />
                <div>
                  <span>دليل الصفحة</span>
                  <strong>المحتويات</strong>
                </div>
              </div>

              <nav aria-label={`محتويات ${title}`}>
                {sections.map((section, index) => (
                  <a href={`#${section.id}`} key={section.id}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className={styles.assurance}>
                <FiShield aria-hidden="true" />
                <p>نلتزم بالوضوح وحماية حقوق مستخدمي المنصة.</p>
              </div>
            </aside>

            <div className={styles.sections}>
              {sections.map((section, index) => {
                const SectionIcon = section.icon;

                return (
                  <article
                    className={styles.sectionCard}
                    id={section.id}
                    key={section.id}
                  >
                    <span className={styles.sectionNumber} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.sectionIcon}>
                      <SectionIcon aria-hidden="true" />
                    </span>
                    <div>
                      <h2>{section.title}</h2>
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
