import Image from "next/image";
import {
  FiBookOpen,
  FiGlobe,
  FiRadio,
  FiUsers,
} from "react-icons/fi";
import authorityLogo from "../../../puplic/الهيئة_العالمية_للسنة_النبوية__1_-removebg-preview.png";
import styles from "./MemberOrganizationsSection.module.css";

const organizations = [
  {
    title: "المراكز العلمية",
    description: "بحث وتأصيل",
    icon: FiBookOpen,
    position: "topRight",
  },
  {
    title: "الجمعيات المتخصصة",
    description: "تعاون وتكامل",
    icon: FiUsers,
    position: "bottomRight",
  },
  {
    title: "المنصات المعرفية",
    description: "محتوى وانتشار",
    icon: FiGlobe,
    position: "topLeft",
  },
  {
    title: "المؤسسات الإعلامية",
    description: "رسالة وتأثير",
    icon: FiRadio,
    position: "bottomLeft",
  },
];

export default function MemberOrganizationsSection() {
  return (
    <section className={styles.section} aria-labelledby="organizations-title">
      <div className={styles.background} aria-hidden="true">
        <span />
        <span />
      </div>

      <div className={styles.container}>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>شراكات تصنع الأثر</span>
          <h2 id="organizations-title">المنظمات الأعضاء</h2>
          <p>
            شبكة عالمية تجمع المؤسسات العلمية والمعرفية والإعلامية حول
            رسالة مشتركة في خدمة السنة النبوية.
          </p>
        </header>

        <div className={styles.network}>
          <div className={styles.connections} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className={styles.center}>
            <span className={styles.centerRing} aria-hidden="true" />
            <Image
              className={styles.logo}
              src={authorityLogo}
              alt="شعار الهيئة العالمية للسنة النبوية"
              loading="lazy"
              decoding="async"
            />
            <strong>الهيئة العالمية</strong>
            <span>مركز الشبكة</span>
          </div>

          {organizations.map((organization, index) => {
            const Icon = organization.icon;

            return (
              <article
                className={`${styles.organization} ${
                  styles[organization.position]
                }`}
                key={organization.title}
              >
                <span className={styles.nodeNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.organizationIcon}>
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{organization.title}</h3>
                  <p>{organization.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.networkCaption}>
          <FiGlobe aria-hidden="true" />
          شبكة تنمو بالعلم والتعاون
        </div>
      </div>
    </section>
  );
}
