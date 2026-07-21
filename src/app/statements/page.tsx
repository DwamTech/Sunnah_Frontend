import type { Metadata } from "next";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {
  StatementsArchive,
  StatementsHero,
} from "../../components/StatementsPage";

export const metadata: Metadata = {
  title: "بيانات صادرة | الهيئة العالمية للسنة النبوية",
  description:
    "البيانات والمواقف الرسمية الصادرة عن الهيئة العالمية للسنة النبوية.",
};

export default function StatementsPage() {
  return (
    <>
      <Header />
      <main>
        <StatementsHero />
        <StatementsArchive />
      </main>
      <Footer />
    </>
  );
}
