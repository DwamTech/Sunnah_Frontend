"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiBookOpen,
  FiChevronDown,
  FiFileText,
  FiGrid,
  FiHome,
  FiInfo,
  FiMenu,
  FiPlayCircle,
  FiSearch,
  FiX,
} from "react-icons/fi";
import logo from "../../../puplic/الهيئة_العالمية_للسنة_النبوية__1_-removebg-preview.png";
import styles from "./Header.module.css";

const navigation = [
  { label: "الرئيسية", id: "home", icon: FiHome },
  { label: "التعريف بالهيئة", id: "about", icon: FiInfo },
  { label: "أخبار الهيئة", id: "news", icon: FiFileText },
  { label: "كتب وإصدارات", id: "publications", icon: FiBookOpen },
  { label: "مقالات وبحوث", id: "research", icon: FiSearch },
  { label: "مرئيات", id: "media", icon: FiPlayCircle },
  {
    label: "المزيد",
    id: "more",
    icon: FiGrid,
    children: [
      "المنظمات الأعضاء",
      "ملفات وتقارير",
      "بيانات صادرة",
      "إعلامية الهيئة",
      "قنوات فضائية",
      "إذاعات راديو",
      "مجلات ودوريات",
      "مواقع إلكترونية",
      "تواصل اجتماعي",
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.accentLine} />
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.identityRow}>
          <div className={styles.brand}>
            <span className={styles.logoFrame}>
              <Image
                className={styles.logo}
                src={logo}
                alt="شعار الهيئة العالمية للسنة النبوية"
                priority
              />
            </span>
            <span className={styles.brandText}>الهيئة العالمية للسنة النبوية</span>
          </div>

          <nav
            className={`${styles.navigation} ${
              isMenuOpen ? styles.navigationOpen : ""
            }`}
            aria-label="التنقل الرئيسي"
          >
            {navigation.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className={styles.navigationItem} key={item.id}>
                  <button
                    type="button"
                    className={index === 0 ? styles.active : undefined}
                    onClick={() => {
                      if (!item.children) {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    <Icon className={styles.navIcon} aria-hidden="true" />
                    <span>{item.label}</span>
                    {item.children ? (
                      <FiChevronDown className={styles.chevron} aria-hidden="true" />
                    ) : null}
                  </button>

                  {item.children ? (
                    <div className={styles.dropdown}>
                      {item.children.map((child) => (
                        <button type="button" key={child}>
                          <span className={styles.dropdownDot} />
                          {child}
                        </button>
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
