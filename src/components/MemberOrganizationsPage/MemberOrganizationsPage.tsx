import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FiArrowLeft,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiRadio,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import authorityLogo from "../../../puplic/الهيئة_العالمية_للسنة_النبوية__1_-removebg-preview.png";
import organizations from "../../data/member-organizations.json";
import styles from "./MemberOrganizationsPage.module.css";

const icons: Record<string, IconType> = {
  award: FiAward,
  book: FiBookOpen,
  globe: FiGlobe,
  heart: FiHeart,
  radio: FiRadio,
  users: FiUsers,
};

const benefits = [
  {
    title: "تعاون معرفي",
    description: "تبادل الخبرات والمحتوى والمشروعات بين المؤسسات الأعضاء.",
    icon: FiLayers,
  },
  {
    title: "أثر عالمي",
    description: "توسيع نطاق المبادرات والوصول إلى مجتمعات وثقافات متعددة.",
    icon: FiGlobe,
  },
  {
    title: "معايير موثوقة",
    description: "العمل ضمن مرجعية علمية ومهنية تحفظ جودة الرسالة والمحتوى.",
    icon: FiShield,
  },
];

const membershipSteps = [
  "توافق رسالة الجهة مع أهداف الهيئة وقيمها العلمية.",
  "تقديم نبذة مؤسسية وملف بالمبادرات والأنشطة.",
  "مراجعة الطلب والتواصل لاستكمال متطلبات العضوية.",
  "اعتماد الشراكة ووضع خطة أولية للتعاون المشترك.",
];

export default function MemberOrganizationsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="members-page-title">
        <span className={styles.pattern} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>شبكة عالمية لخدمة السنة</span>
            <h1 id="members-page-title">
              المنظمات
              <strong>الأعضاء</strong>
            </h1>
            <p>
              منظومة مؤسسية تجمع الجهات العلمية والتعليمية والإعلامية حول
              رسالة مشتركة: معرفة موثوقة، وتعاون فعّال، وأثر يصل إلى العالم.
            </p>
            <a href="#organizations-directory">
              استكشف شبكة العضوية
              <FiArrowLeft aria-hidden="true" />
            </a>
          </div>

          <div className={styles.networkVisual} aria-hidden="true">
            <span className={styles.orbitOne} />
            <span className={styles.orbitTwo} />
            <span className={styles.orbitThree} />
            <div className={styles.visualCore}>
              <Image src={authorityLogo} alt="" priority />
              <strong>مركز الشراكة</strong>
            </div>
            {organizations.slice(0, 6).map((organization, index) => {
              const Icon = icons[organization.icon] ?? FiUsers;

              return (
                <span className={styles.networkNode} key={organization.number}>
                  <Icon />
                  <i>{index + 1}</i>
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.overview} aria-label="قيمة شبكة العضوية">
        <div className={styles.container}>
          <div className={styles.overviewIntro}>
            <span>شراكة تتجاوز الحدود</span>
            <h2>نتكامل لنصنع أثرًا أعمق وأبقى</h2>
            <p>
              تمنح شبكة العضوية المؤسسات مساحة للتنسيق وتبادل الخبرة وبناء
              مبادرات مشتركة تخدم السنة النبوية والمجتمعات.
            </p>
          </div>
          <div className={styles.benefits}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article key={benefit.title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className={styles.directory}
        id="organizations-directory"
        aria-labelledby="directory-title"
      >
        <div className={styles.container}>
          <header className={styles.sectionHeading}>
            <div>
              <span>مجالات العضوية</span>
              <h2 id="directory-title">مؤسسات متنوعة، ورسالة واحدة</h2>
            </div>
            <p>
              تضم الشبكة أنماطًا متنوعة من المؤسسات، بما يحقق التكامل بين
              البحث والتعليم والإعلام والعمل المجتمعي.
            </p>
          </header>

          <div className={styles.organizationsGrid}>
            {organizations.map((organization) => {
              const Icon = icons[organization.icon] ?? FiUsers;

              return (
                <article className={styles.organizationCard} key={organization.number}>
                  <span className={styles.cardNumber}>{organization.number}</span>
                  <div className={styles.cardTop}>
                    <span className={styles.cardIcon}>
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <span className={styles.category}>{organization.category}</span>
                      <span className={styles.region}>
                        <FiGlobe aria-hidden="true" />
                        {organization.region}
                      </span>
                    </div>
                  </div>
                  <h3>{organization.name}</h3>
                  <p>{organization.description}</p>
                  <ul>
                    {organization.focus.map((focus) => (
                      <li key={focus}>
                        <FiCheck aria-hidden="true" />
                        {focus}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.membership} aria-labelledby="membership-title">
        <div className={styles.container}>
          <div className={styles.membershipMessage}>
            <span>
              <FiTarget aria-hidden="true" />
              انضم إلى شبكة الأثر
            </span>
            <h2 id="membership-title">خطوات عضوية واضحة ومنظمة</h2>
            <p>
              نرحب بالمؤسسات الجادة التي تشارك الهيئة رسالتها، وتؤمن بالعمل
              المؤسسي والتعاون العلمي المسؤول.
            </p>
          </div>
          <ol>
            {membershipSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
