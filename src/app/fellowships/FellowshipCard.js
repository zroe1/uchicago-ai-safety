"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function FellowshipCard({ name, description, syllabusHref, comingSoonText = "Syllabus coming soon" }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className={styles.fellowshipCard}>
      <h2 className={styles.fellowshipName}>{name}</h2>
      <p className={styles.fellowshipDescription}>{description}</p>
      <div className={styles.cardFooter}>
        {syllabusHref ? (
          <a href={syllabusHref} target="_blank" rel="noopener noreferrer" className={styles.syllabusLink}>
            View Syllabus <span aria-hidden="true">→</span>
          </a>
        ) : (
          <Link href="/coming-soon" className={styles.comingSoonLink}>
            {comingSoonText} <span aria-hidden="true">→</span>
          </Link>
        )}
        <button className={styles.applyButton} onClick={() => setShowMessage(!showMessage)}>
          Apply
        </button>
      </div>
      {showMessage && (
        <p className={styles.applyMessage}>
          This fellowship program is not currently accepting applications. If you want to get
          updated when applications open, join our{" "}
          <a
            href="https://lists.uchicago.edu/web/info/aisafety"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.applyMessageLink}>
            mailing list
          </a>
          .
        </p>
      )}
    </div>
  );
}
