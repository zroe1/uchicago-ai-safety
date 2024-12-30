import React from "react";
import styles from "./CallToActionLinks.module.css";

const CallToActionLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.linkContainer}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScKAvi7FJEfi8zrXdGnHAdODk_G4RqYAQ2x5315Ow_4J36YFQ/viewform?usp=sf_link"
            className={styles.link}>
            Apply to our AI Safety Intro Fellowship
          </a>
          <a href="https://chicagoalignment.com/" className={styles.link}>
            Check out our upcoming convention
          </a>
          <a href="/coming-soon" className={styles.link}>
            Join our mailing list
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToActionLinks;
