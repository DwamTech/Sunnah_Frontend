import {
  FiBriefcase,
  FiDollarSign,
  FiEdit3,
  FiFileText,
  FiMessageCircle,
  FiRadio,
  FiSettings,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import styles from "./AboutPage.module.css";

const executiveCommittees = [
  { title: "لجنة البحوث والتوثيق", icon: FiFileText },
  { title: "لجنة الحوار", icon: FiMessageCircle },
  { title: "اللجنة التنظيمية والمالية", icon: FiSettings },
];

const supportCommittees = [
  { title: "الإدارة المالية", icon: FiDollarSign },
  { title: "اللجنة الإعلامية", icon: FiRadio },
  { title: "وحدة تنظيم البرامج والعلاقات", icon: FiEdit3 },
];

export default function OrganizationalStructure() {
  return (
    <section className={styles.structure} aria-labelledby="structure-title">
      <div className={styles.sectionContainer}>
        <header className={styles.centeredHeading}>
          <span className={styles.sectionKicker}>حوكمة واضحة</span>
          <h2 id="structure-title">الهيكل الإداري</h2>
          <p>هيكل مؤسسي يربط القيادة بالتنفيذ واللجان المتخصصة.</p>
        </header>

        <div className={styles.orgChart}>
          <div className={`${styles.orgNode} ${styles.chairman}`}>
            <span><FiUser aria-hidden="true" /></span>
            <small>القيادة العليا</small>
            <strong>رئيس مجلس الأمناء</strong>
          </div>

          <span className={styles.verticalConnector} aria-hidden="true" />

          <div className={`${styles.orgNode} ${styles.vicePresident}`}>
            <span><FiBriefcase aria-hidden="true" /></span>
            <small>القيادة التنفيذية</small>
            <strong>نائب الرئيس</strong>
          </div>

          <div className={styles.branches}>
            <div className={styles.branch}>
              <div className={styles.orgNode}>
                <span><FiUsers aria-hidden="true" /></span>
                <small>الإدارة التنفيذية</small>
                <strong>الأمين العام</strong>
              </div>

              <div className={styles.committees}>
                {executiveCommittees.map((committee) => {
                  const Icon = committee.icon;
                  return (
                    <div className={styles.committee} key={committee.title}>
                      <Icon aria-hidden="true" />
                      {committee.title}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.branch}>
              <div className={styles.orgNode}>
                <span><FiUsers aria-hidden="true" /></span>
                <small>الدعم التنفيذي</small>
                <strong>الأمين العام المساعد</strong>
              </div>

              <div className={styles.committees}>
                {supportCommittees.map((committee) => {
                  const Icon = committee.icon;
                  return (
                    <div className={styles.committee} key={committee.title}>
                      <Icon aria-hidden="true" />
                      {committee.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
