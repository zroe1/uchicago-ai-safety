import React from "react";
import styles from "./CallToActionLinks.module.css";

const CallToActionLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.linkContainer}>
          <a href="/coming-soon" className={styles.link}>
            Apply to our technical AI safety fellowship
          </a>
          <a href="https://chicagoalignment.com/" className={styles.link}>
            Check out our upcoming convention
          </a>
          <a href="#" className={styles.link}>
            Join our mailing list
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToActionLinks;
