import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import reportsImage from "../../../puplic/isometric-stacked-binders-with-papers-vector-350x250.jpg";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "ملفات وتقارير | الهيئة العالمية للسنة النبوية" };

const description = "قراءة في استراتيجية نشر التشيع والدور الوظيفي لإيران في الاستراتيجية الأمريكية3";
const reports = [
  ["وثيقة علماء افريقيا فرنسي", "https://wbpsunna.com/%d9%88%d8%ab%d9%8a%d9%82%d8%a9-%d8%b9%d9%84%d9%85%d8%a7%d8%a1-%d8%a7%d9%81%d8%b1%d9%8a%d9%82%d9%8a%d8%a7-%d9%81%d8%b1%d9%86%d8%b3%d9%8a/"], ["وثيقة علماء افريقيا عربي", "https://wbpsunna.com/%d9%88%d8%ab%d9%8a%d9%82%d8%a9-%d8%b9%d9%84%d9%85%d8%a7%d8%a1-%d8%a7%d9%81%d8%b1%d9%8a%d9%82%d9%8a%d8%a7-%d8%b9%d8%b1%d8%a8%d9%8a/"], ["وثيقة علماء افريقيا انجليزي", "https://wbpsunna.com/%d9%88%d8%ab%d9%8a%d9%82%d8%a9-%d8%b9%d9%84%d9%85%d8%a7%d8%a1-%d8%a7%d9%81%d8%b1%d9%8a%d9%82%d9%8a%d8%a7-%d8%a7%d9%86%d8%ac%d9%84%d9%8a%d8%b2%d9%8a/"], ["محركات السياسة الفارسية", "https://wbpsunna.com/%d9%85%d8%ad%d8%b1%d9%83%d8%a7%d8%aa-%d8%a7%d9%84%d8%b3%d9%8a%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d9%81%d8%a7%d8%b1%d8%b3%d9%8a%d8%a9/"], ["تقرير الهيئة لعام 2017", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2017/"], ["تقرير اعلامية الهيئة", "https://wbpsunna.com/%d8%a7%d8%b9%d9%84%d8%a7%d9%85%d9%8a%d8%a9-%d8%a7%d9%84%d9%87%d9%8a%d8%a6%d8%a9/"], ["تقرير الهيئة لعام 2019", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2019/"], ["تقرير الهيئة لعام 2016", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2016/"], ["التقرير التأسيسي للهيئة", "https://wbpsunna.com/%d8%a7%d9%84%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-%d8%a7%d9%84%d8%aa%d8%a3%d8%b3%d9%8a%d8%b3%d9%8a/"], ["تقرير الهيئة لعام 2015", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2015/"], ["نحو رؤية استراتيجية 2", "https://wbpsunna.com/%d9%86%d8%ad%d9%88-%d8%b1%d8%a4%d9%8a%d8%a9-%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a%d8%a9-2/"], ["تقرير الهيئة لعام 2012", "https://wbpsunna.com/%d8%aa%d9%82%d8%b1%d9%8a%d8%b1-2012/"], [description, "https://wbpsunna.com/%d9%82%d8%b1%d8%a7%d8%a1%d8%a9-%d9%81%d9%8a-%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a%d8%a9-%d9%86%d8%b4%d8%b1-%d8%a7%d9%84%d8%aa%d8%b4%d9%8a%d8%b9-%d9%88%d8%a7%d9%84%d8%af%d9%88%d8%b1/"]
];

export default function ReportsPage() { return <><Header /><main className={styles.page}><section className={styles.hero}><h1>ملفات وتقارير</h1><Image src={reportsImage} alt="" priority /></section><section className={styles.list}>{reports.map(([title, href]) => <article key={href}><Image src={reportsImage} alt="" /><div><p>{description}</p><h2><a href={href} target="_blank" rel="noreferrer">{title}</a></h2></div></article>)}</section></main><Footer /></>; }
