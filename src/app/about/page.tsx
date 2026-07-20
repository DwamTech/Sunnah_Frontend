import type { Metadata } from "next";
import {
  AboutHero,
  AboutIntroduction,
  AboutObjectives,
  AboutPolicy,
  OrganizationalStructure,
} from "../../components/AboutPage";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export const metadata: Metadata = {
  title: "التعريف بالهيئة | الهيئة العالمية للسنة النبوية",
  description:
    "تعرف على الهيئة العالمية للسنة النبوية ورسالتها وأهدافها وسياساتها وهيكلها الإداري.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutIntroduction />
        <AboutObjectives />
        <AboutPolicy />
        <OrganizationalStructure />
      </main>
      <Footer />
    </>
  );
}
