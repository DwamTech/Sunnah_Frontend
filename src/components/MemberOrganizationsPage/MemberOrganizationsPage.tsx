import Image from "next/image";
import reportsImage from "../../../puplic/isometric-stacked-binders-with-papers-vector-350x250.jpg";
import styles from "./MemberOrganizationsPage.module.css";

const lead = "قراءة في استراتيجية نشر التشيع والدور الوظيفي لإيران في الاستراتيجية الأمريكية3";
const articles = [
  ["وثيقة علماء افريقيا فرنسي", "https://wbpsunna.com/%d9%88%d8%ab%d9%8a%d9%82%d8%a9-%d8%b9%d9%84%d9%85%d8%a7%d8%a1-%d8%a7%d9%81%d8%b1%d9%8a%d9%82%d9%8a%d8%a7-%d9%81%d8%b1%d9%86%d8%b3%d9%8a/", "وثيقة فرنسي🔗"],
  ["وثيقة علماء افريقيا عربي", "https://wbpsunna.com/%d9%88%d8%ab%d9%8a%d9%82%d8%a9-%d8%b9%d9%84%d9%85%d8%a7%d8%a1-%d8%a7%d9%81%d8%b1%d9%8a%d9%82%d9%8a%d8%a7-%d8%b9%d8%b1%d8%a8%d9%8a/", "وثيقة عربي🔗"],
  ["وثيقة علماء افريقيا انجليزي", "https://wbpsunna.com/%d9%88%d8%ab%d9%8a%d9%82%d8%a9-%d8%b9%d9%84%d9%85%d8%a7%d8%a1-%d8%a7%d9%81%d8%b1%d9%8a%d9%82%d9%8a%d8%a7-%d8%a7%d9%86%d8%ac%d9%84%d9%8a%d8%b2%d9%8a/", "وثيقة انجليزي🔗"],
  ["محركات السياسة الفارسية", "https://wbpsunna.com/%d9%85%d8%ad%d8%b1%d9%83%d8%a7%d8%aa-%d8%a7%d9%84%d8%b3%d9%8a%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d9%81%d8%a7%d8%b1%d8%b3%d9%8a%d8%a9/", "محركات السياسة الفارسية 🔗"],
  ["تقرير الهيئة لعام 2017", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2017/", "تقرير 2017🔗"],
  ["تقرير اعلامية الهيئة", "https://wbpsunna.com/%d8%a7%d8%b9%d9%84%d8%a7%d9%85%d9%8a%d8%a9-%d8%a7%d9%84%d9%87%d9%8a%d8%a6%d8%a9/", "اعلامية الهيئة🔗"],
  ["تقرير الهيئة لعام 2019", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2019/", "تقرير 2019🔗"],
  ["تقرير الهيئة لعام 2016", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2016/", "تقرير 2016🔗"],
  ["التقرير التأسيسي للهيئة", "https://wbpsunna.com/%d8%a7%d9%84%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-%d8%a7%d9%84%d8%aa%d8%a3%d8%b3%d9%8a%d8%b3%d9%8a/", "التقرير التأسيسي🔗"],
  ["تقرير الهيئة لعام 2015", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2015/", "تقرير 2015🔗"],
];

export default function MemberOrganizationsPage() {
  return (
    <main className={styles.latestPage}>
      <section className={styles.pageHero} aria-labelledby="members-page-title">
        <span aria-hidden="true" />
        <div>
          <h1 id="members-page-title">المنظمات الأعضاء</h1>
        </div>
      </section>
      <div className={styles.latestContainer}>
        <label className={styles.search}><input type="search" placeholder="Search..." aria-label="Search" /></label>
        <h1>Latest Articles</h1>
        <div className={styles.latestList}>
          {articles.map(([title, href, category]) => (
            <article className={styles.latestArticle} key={title}>
              <Image src={reportsImage} alt="" width={180} height={180} />
              <div>
                <p>{lead}</p>
                <h2><a href={href} target="_blank" rel="noreferrer">{title}</a></h2>
                <p>by <a href="https://wbpsunna.com/author/admin/" target="_blank" rel="noreferrer">admin</a> <a href={href} target="_blank" rel="noreferrer">28 أغسطس، 2024</a> <a href={`${href}#comments`} target="_blank" rel="noreferrer">0</a></p>
                <p>{category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
