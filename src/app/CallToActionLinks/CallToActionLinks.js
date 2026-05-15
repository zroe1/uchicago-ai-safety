import React from "react";
import styles from "./CallToActionLinks.module.css";

const CallToActionLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.linkContainer}>
          <a
            href="https://coda.io/form/Spring-2026-Leadership-Application_dzKEtAMgmOx"
            className={styles.link}>
            Apply to Join Our Leadership Team
          </a>
          <a href="https://lists.uchicago.edu/web/info/aisafety" className={styles.link}>
            Join Our Mailing List
          </a>
          <a href="https://join.slack.com/t/xlab-uchicago/shared_invite/zt-3y40eokbn-U3Pc5k7UosBic0eljNg5Bg" className={styles.link}>
            Join Our Slack
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToActionLinks;
