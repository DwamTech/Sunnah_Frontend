import type { Metadata } from "next";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { VisualGallery, VisualsHero } from "../../components/VisualsPage";

export const metadata: Metadata = {
  title: "مرئيات | الهيئة العالمية للسنة النبوية",
  description:
    "محتوى مرئي موثوق يقدّم هدي السنة النبوية وقيمها بلغة معاصرة.",
};

export default function MediaPage() {
  return (
    <>
      <Header />
      <main>
        <VisualsHero />
        <VisualGallery />
      </main>
      <Footer />
    </>
  );
}
