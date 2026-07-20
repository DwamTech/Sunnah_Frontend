import type { Metadata } from "next";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { MemberOrganizationsPage } from "../../components/MemberOrganizationsPage";

export const metadata: Metadata = {
  title: "المنظمات الأعضاء | الهيئة العالمية للسنة النبوية",
  description:
    "تعرف على شبكة المنظمات الأعضاء ومجالات التعاون المؤسسي في خدمة السنة النبوية.",
};

export default function MemberOrganizationsRoute() {
  return (
    <>
      <Header />
      <main>
        <MemberOrganizationsPage />
      </main>
      <Footer />
    </>
  );
}
