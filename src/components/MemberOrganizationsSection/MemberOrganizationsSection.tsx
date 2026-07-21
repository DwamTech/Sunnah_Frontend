"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import logoOne from "../../../puplic/screen-0-1-300x300.jpg";
import logoTwo from "../../../puplic/r1TO90eh_400x400-1-300x300.jpg";
import logoThree from "../../../puplic/317728098_114554131486116_7715122729249262930_n-1-300x300.jpg";
import logoFour from "../../../puplic/456330378_950616597107683_890519627821782829_n-1-300x300.jpg";
import logoFive from "../../../puplic/2024-08-27-150020-1-300x226.png";
import logoSix from "../../../puplic/لوجو-التنوير-300x208.jpg";
import styles from "./MemberOrganizationsSection.module.css";

const organizations: StaticImageData[] = [logoOne, logoTwo, logoThree, logoFour, logoFive, logoSix];

export default function MemberOrganizationsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % organizations.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  const visibleOrganizations = Array.from({ length: 4 }, (_, index) => organizations[(active + index) % organizations.length]);

  return (
    <section className={styles.section} aria-labelledby="organizations-title">
      <div className={styles.container}>
        <h2 id="organizations-title">المنظمات الأعضاء</h2>
        <div className={styles.slider} aria-live="polite">
          {visibleOrganizations.map((logo, index) => (
            <div className={styles.logoCard} key={`${active}-${index}`}>
              <Image src={logo} alt="شعار منظمة عضو" fill sizes="(max-width: 40rem) 38vw, 14rem" />
            </div>
          ))}
        </div>
        <div className={styles.dots} aria-label="التنقل بين شعارات المنظمات">
          {organizations.map((_, index) => <button className={index === active ? styles.activeDot : ""} type="button" aria-label={`عرض الشعار ${index + 1}`} onClick={() => setActive(index)} key={index} />)}
        </div>
      </div>
    </section>
  );
}
