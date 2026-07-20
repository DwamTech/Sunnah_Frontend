import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import {
  AuthorityMediaPage,
  type AuthorityMediaData,
} from "../../../components/AuthorityMediaPage";
import mediaPages from "../../../data/authority-media.json";

type PageProps = {
  params: Promise<{ section: string }>;
};

const pages = mediaPages as AuthorityMediaData[];

function getPage(section: string) {
  return pages.find((page) => page.slug === section);
}

export function generateStaticParams() {
  return pages.map((page) => ({ section: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { section } = await params;
  const page = getPage(section);

  if (!page) return {};

  return {
    title: `${page.title} | الهيئة العالمية للسنة النبوية`,
    description: page.intro,
  };
}

export default async function AuthorityMediaRoute({ params }: PageProps) {
  const { section } = await params;
  const page = getPage(section);

  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        <AuthorityMediaPage data={page} />
      </main>
      <Footer />
    </>
  );
}
