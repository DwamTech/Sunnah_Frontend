import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Regarding the Prophetic Sunnah",
  description: "A project about the Prophetic Sunnah.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
