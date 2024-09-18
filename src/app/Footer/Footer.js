import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image
            src="/logo.png"
            alt="AI Safety Student Team Logo"
            width={468 * 0.5}
            height={288 * 0.5}
            className={styles.logo}
          />
          <p className={styles.x}>X</p>
          <Image
            src="/x-lab-logo.png"
            alt="X-Risk Lab Logo"
            width={853 * 0.33}
            height={293 * 0.33}
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; 2024 UChicago AI Safety. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
