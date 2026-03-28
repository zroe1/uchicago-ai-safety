import React from "react";
import styles from "./CallToActionLinks.module.css";

const CallToActionLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.linkContainer}>
          <a
            href="https://coda.io/form/AI-Safety-Fundamentals-Application-Spring-2025_dfkdiryGjhQ"
            className={styles.link}>
            Apply to our AI Safety Fundamentals Program
          </a>
          <a href="https://lists.uchicago.edu/web/info/aisafety" className={styles.link}>
            Join our mailing list
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToActionLinks;
