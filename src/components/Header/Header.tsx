"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  FiBookOpen,
  FiArchive,
  FiChevronDown,
  FiFileText,
  FiGrid,
  FiGlobe,
  FiHome,
  FiInfo,
  FiMenu,
  FiPlayCircle,
  FiRadio,
  FiSearch,
  FiUsers,
  FiX,
} from "react-icons/fi";
import styles from "./Header.module.css";

type NavigationChild = {
  label: string;
  href?: string;
};

type NavigationItem = {
  label: string;
  id: string;
  icon: IconType;
  href?: string;
  children?: NavigationChild[];
};

const navigation: NavigationItem[] = [
  { label: "الرئيسية", id: "home", icon: FiHome, href: "/" },
  { label: "التعريف بالهيئة", id: "about", icon: FiInfo, href: "/about" },
  { label: "أخبار الهيئة", id: "news", icon: FiFileText, href: "/news" },
  {
    label: "كتب وإصدارات",
    id: "publications",
    icon: FiBookOpen,
    href: "/publications",
  },
  {
    label: "مقالات وبحوث",
    id: "research",
    icon: FiSearch,
    href: "/research",
  },
  { label: "مرئيات", id: "media", icon: FiPlayCircle, href: "/media" },
  { label: "المنظمات الأعضاء", id: "members", icon: FiUsers, href: "/member-organizations" },
  { label: "ملفات وتقارير", id: "reports", icon: FiArchive, href: "/reports" },
  { label: "بيانات صادرة", id: "statements", icon: FiFileText, href: "/statements" },
  {
    label: "إعلامية الهيئة",
    id: "authority-media",
    icon: FiRadio,
    href: "/authority-media",
    children: [
      { label: "قنوات فضائية", href: "/authority-media/satellite-channels" },
      { label: "إذاعات راديو", href: "/authority-media/radio-stations" },
      { label: "مجلات ودوريات", href: "/authority-media/journals" },
      { label: "مواقع إلكترونية", href: "/authority-media/websites" },
      { label: "تواصل اجتماعي", href: "/authority-media/social-media" },
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.accentLine} />
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.identityRow}>
          <nav
            className={`${styles.navigation} ${
              isMenuOpen ? styles.navigationOpen : ""
            }`}
            aria-label="التنقل الرئيسي"
          >
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.href
                    ? pathname.startsWith(item.href)
                    : item.children?.some(
                        (child) =>
                          child.href && pathname.startsWith(child.href),
                      ) ?? false;

              return (
                <div className={styles.navigationItem} key={item.id}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`${styles.navControl} ${
                        isActive ? styles.active : ""
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className={styles.navIcon} aria-hidden="true" />
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={`${styles.navControl} ${
                        isActive ? styles.active : ""
                      }`}
                      onClick={() => {
                        if (!item.children) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <Icon className={styles.navIcon} aria-hidden="true" />
                      <span>{item.label}</span>
                      {item.children ? (
                        <FiChevronDown
                          className={styles.chevron}
                          aria-hidden="true"
                        />
                      ) : null}
                    </button>
                  )}

                  {item.children ? (
                    <div className={styles.dropdown}>
                      {item.children.map((child) => (
                        child.href ? (
                          <Link
                            href={child.href}
                            onClick={() => setIsMenuOpen(false)}
                            key={child.label}
                          >
                            <span className={styles.dropdownDot} />
                            {child.label}
                          </Link>
                        ) : (
                          <button type="button" key={child.label}>
                            <span className={styles.dropdownDot} />
                            {child.label}
                          </button>
                        )
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <button
            className={styles.menuButton}
            type="button"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
