import Link from "next/link";
import styles from "./page.module.css";
import GridFade from "@/app/ornaments/GridFade";

export default function ComingSoon() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <div className={styles.container}>
      <div className={styles.recursion} aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className={styles.eyebrow}>Coming Soon</p>
      <h1 className={styles.title}>This page doesn&#39;t exist yet.</h1>
      <p className={styles.text}>
        We&#39;re still working on it — please check back soon!
      </p>
      <Link href="/" className={styles.homeLink}>
        Back to home <span aria-hidden="true">→</span>
      </Link>
      </div>
    </div>
  );
}
