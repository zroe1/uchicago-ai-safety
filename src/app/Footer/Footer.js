import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <div className={styles.brandGroup}>
              <Image
                src="/x-tech_2CBM.png"
                alt="AI Safety Group @ UChicago XLab logo"
                width={80}
                height={80}
                className={`${styles.logo} dark-invert-hue`}
              />
              <span className={styles.brandText}>
                <span className={styles.brandName}>AI Safety Group</span>
                <span>@ UChicago XLab</span>
              </span>
            </div>
            <p className={styles.location}>University of Chicago · Chicago, IL</p>
            <a
              href="https://xrisk.uchicago.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.xlabLink}>
              <Image
                src="/x-lab-logo.png"
                alt="Existential Risk Laboratory logo"
                width={853 * 0.22}
                height={293 * 0.22}
                className={`${styles.xlabLogo} dark-invert-hue`}
              />
            </a>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <p className={styles.columnTitle}>Explore</p>
              <Link href="/about-us">About Us</Link>
              <Link href="/research">Research</Link>
              <Link href="/fellowships">Fellowships</Link>
              <Link href="/events">Events</Link>
              <Link href="/leadership">Leadership</Link>
            </div>
            <div className={styles.column}>
              <p className={styles.columnTitle}>Connect</p>
              <Link href="/get-involved" className={styles.columnCta}>
                Get Involved <span aria-hidden="true">→</span>
              </Link>
              <a
                href="https://lists.uchicago.edu/web/info/aisafety"
                target="_blank"
                rel="noopener noreferrer">
                Mailing List
              </a>
              <a
                href="https://join.slack.com/t/xlab-uchicago/shared_invite/zt-47zdem4lv-vncDwWYv3WTBCHvK8ZgN8Q"
                target="_blank"
                rel="noopener noreferrer">
                Slack
              </a>
              <a href="https://xrisk.uchicago.edu/" target="_blank" rel="noopener noreferrer">
                XLab
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            &copy; {new Date().getFullYear()} AI Safety Group @ UChicago XLab. A program of the
            University of Chicago&apos;s Existential Risk Laboratory.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
