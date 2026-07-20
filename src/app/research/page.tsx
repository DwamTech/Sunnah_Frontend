import type { Metadata } from "next";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {
  ResearchHero,
  ResearchLibrary,
  ResearchTopics,
} from "../../components/ResearchPage";

export const metadata: Metadata = {
  title: "مقالات وبحوث | الهيئة العالمية للسنة النبوية",
  description:
    "مقالات وبحوث علمية وفكرية في السنة النبوية وقضايا الإنسان والمجتمع.",
};

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main>
        <ResearchHero />
        <ResearchLibrary />
        <ResearchTopics />
      </main>
      <Footer />
    </>
  );
}
