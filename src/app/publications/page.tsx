import type { Metadata } from "next";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {
  PublicationsHero,
  PublicationsLibrary,
} from "../../components/PublicationsPage";

export const metadata: Metadata = {
  title: "كتب وإصدارات | الهيئة العالمية للسنة النبوية",
  description:
    "تصفح الكتب والإصدارات العلمية للهيئة العالمية للسنة النبوية.",
};

export default function PublicationsPage() {
  return (
    <>
      <Header />
      <main>
        <PublicationsHero />
        <PublicationsLibrary />
      </main>
      <Footer />
    </>
  );
}
