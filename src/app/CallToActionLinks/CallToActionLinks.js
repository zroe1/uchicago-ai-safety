import React from "react";
import styles from "./CallToActionLinks.module.css";

const actions = [
  {
    title: "Apply to Leadership",
    description: "Help run our programming and shape the direction of AI safety at UChicago.",
    href: "https://coda.io/form/Spring-2026-Leadership-Application_dzKEtAMgmOx",
  },
  {
    title: "Join the Mailing List",
    description: "Stay updated on events, fellowship applications, and opportunities in the field.",
    href: "https://lists.uchicago.edu/web/info/aisafety",
  },
  {
    title: "Join Our Slack",
    description: "Meet the community and follow the conversation between meetings.",
    href: "https://join.slack.com/t/xlab-uchicago/shared_invite/zt-3y40eokbn-U3Pc5k7UosBic0eljNg5Bg",
  },
];

const CallToActionLinks = () => {
  return (
    <section className={styles.container}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>Get Involved</p>
        <h2 className={styles.title}>Join us in shaping the future of AI.</h2>
      </div>
      <div className={styles.grid}>
        {actions.map((action) => (
          <a
            key={action.title}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}>
            <h3 className={styles.cardTitle}>{action.title}</h3>
            <p className={styles.cardDescription}>{action.description}</p>
            <span className={styles.cardArrow} aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CallToActionLinks;
