import type { Metadata } from "next";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { NewsArchive, NewsHero } from "../../components/NewsPage";

export const metadata: Metadata = {
  title: "أخبار الهيئة | الهيئة العالمية للسنة النبوية",
  description:
    "تابع أحدث أخبار وأنشطة وبرامج الهيئة العالمية للسنة النبوية.",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <NewsHero />
        <NewsArchive />
      </main>
      <Footer />
    </>
  );
}
