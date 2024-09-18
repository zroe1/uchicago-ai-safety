import React from "react";
import styles from "./CallToActionLinks.module.css";

const CallToActionLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* <h2 className={styles.heading}>Get Involved</h2> */}
        <div className={styles.linkContainer}>
          <a href="#" className={styles.link}>
            Apply to our technical AI safety fellowship
          </a>
          <a href="#" className={styles.link}>
            Apply to our AI policy fellowship
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
