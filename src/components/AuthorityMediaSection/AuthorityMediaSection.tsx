import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiFileText, FiGlobe, FiRadio, FiTv } from "react-icons/fi";
import orbitImage from "../../../puplic/authority-media-orbit.png";
import styles from "./AuthorityMediaSection.module.css";

const outlets = [
  { title: "قنوات فضائية", icon: FiTv, position: "top", href: "/authority-media/satellite-channels" },
  { title: "إذاعات راديو", icon: FiRadio, position: "right", href: "/authority-media/radio-stations" },
  { title: "مجلات ودوريات", icon: FiFileText, position: "bottomRight", href: "/authority-media/journals" },
  { title: "مواقع إلكترونية", icon: FiGlobe, position: "bottomLeft", href: "/authority-media/websites" },
  { title: "تواصل اجتماعي", icon: FiFacebook, position: "left", href: "/authority-media/social-media" },
];

export default function AuthorityMediaSection() {
  return (
    <section id="authority-media" className={styles.section} aria-labelledby="authority-media-title">
      <div className={styles.container}>
        <header className={styles.heading}>
          <span>رسالة تصل إلى العالم</span>
          <h2 id="authority-media-title">إعلامية الهيئة</h2>
        </header>

        <div className={styles.network}>
          <div className={styles.connections} aria-hidden="true">
            {outlets.map((outlet) => <i className={styles[outlet.position]} key={outlet.position} />)}
          </div>
          <div className={styles.orbitImage}><Image src={orbitImage} alt="" fill sizes="(max-width: 40rem) 15rem, 24rem" /></div>
          {outlets.map((outlet) => {
            const Icon = outlet.icon;
            return <Link className={`${styles.outlet} ${styles[outlet.position]}`} href={outlet.href} key={outlet.title}><Icon aria-hidden="true" /><h3>{outlet.title}</h3></Link>;
          })}
        </div>
      </div>
    </section>
  );
}
