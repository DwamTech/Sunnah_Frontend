import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import AuthorityNews from "../components/AuthorityNews/AuthorityNews";
import PublicationsSection from "../components/PublicationsSection/PublicationsSection";
import ReportsSection from "../components/ReportsSection/ReportsSection";
import VisualsSection from "../components/VisualsSection/VisualsSection";
import ArticlesResearchSection from "../components/ArticlesResearchSection/ArticlesResearchSection";
import MemberOrganizationsSection from "../components/MemberOrganizationsSection/MemberOrganizationsSection";
import AuthorityMediaSection from "../components/AuthorityMediaSection/AuthorityMediaSection";
import AuthorityStatisticsSection from "../components/AuthorityStatisticsSection/AuthorityStatisticsSection";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className={styles.homePage}>
        <Hero />
        <AuthorityNews />
        <PublicationsSection />
        <ReportsSection />
        <VisualsSection />
        <ArticlesResearchSection />
        <AuthorityMediaSection />
        <MemberOrganizationsSection />
        <AuthorityStatisticsSection />
      </main>
      <Footer />
    </>
  );
}
