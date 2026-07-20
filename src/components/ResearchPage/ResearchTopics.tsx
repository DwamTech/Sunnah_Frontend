import {
  FiBook,
  FiCompass,
  FiHeart,
  FiMessageCircle,
} from "react-icons/fi";
import styles from "./ResearchPage.module.css";

const topics = [
  {
    icon: FiBook,
    title: "علوم السنة",
    description: "تأصيل المفاهيم ومناهج التثبت والفهم.",
  },
  {
    icon: FiCompass,
    title: "الفكر والوعي",
    description: "قراءة التحولات وبناء رؤية متوازنة.",
  },
  {
    icon: FiHeart,
    title: "القيم والمجتمع",
    description: "الهدي النبوي في حياة الإنسان والأسرة.",
  },
  {
    icon: FiMessageCircle,
    title: "قضايا معاصرة",
    description: "معالجات علمية بلغة واضحة وقريبة.",
  },
];

export default function ResearchTopics() {
  return (
    <section className={styles.topics} aria-labelledby="topics-title">
      <div className={styles.container}>
        <header className={styles.topicsHeading}>
          <span>مسارات المعرفة</span>
          <h2 id="topics-title">موضوعات نبحثها بعمق</h2>
        </header>
        <div className={styles.topicsGrid}>
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <article key={topic.title}>
                <span className={styles.topicNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon aria-hidden="true" />
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
