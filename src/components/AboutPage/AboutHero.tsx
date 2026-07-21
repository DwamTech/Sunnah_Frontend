import Image from "next/image";
import { FiStar } from "react-icons/fi";
import logo from "../../../puplic/الهيئة_العالمية_للسنة_النبوية__1_-removebg-preview.png";
import bookOne from "../../../puplic/Group-29-360x504.png";
import bookTwo from "../../../puplic/Group-20-360x504.png";
import bookThree from "../../../puplic/Group-28-360x504.png";
import bookFour from "../../../puplic/Group-36-360x504.png";
import styles from "./AboutPage.module.css";

const books = [bookOne, bookTwo, bookThree, bookFour];

export default function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-page-title">
      <div className={styles.heroPattern} aria-hidden="true" />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 id="about-page-title">
            هيئة العالمية
            <strong>للسنة النبوية</strong>
          </h1>
        </div>

        <div className={styles.knowledgeVisual} aria-hidden="true">
          <span className={styles.visualOrbit} />
          <span className={styles.visualOrbit} />

          <div className={styles.logoSeal}>
            <Image src={logo} alt="" priority />
            <span>
              <FiStar />
            </span>
          </div>

          <div className={styles.books}>
            {books.map((book, index) => (
              <Image
                className={styles.book}
                src={book}
                alt=""
                priority={index < 2}
                key={book.src}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
