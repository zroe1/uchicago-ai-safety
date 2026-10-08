import React from "react";
import Link from "next/link";
import styles from "./CallToActionLinks.module.css";

const actions = [
  {
    title: "Apply to Fellowships",
    description: "Join a quarter-long reading and discussion group on AI Safety — open to students from any background.",
    href: "/fellowships",
    internal: true,
  },
  {
    title: "Apply to Working Groups",
    description: "Do research with us across the technical, strategic, and governance dimensions of AI safety.",
    href: "/research",
    internal: true,
  },
  {
    title: "Apply to Leadership",
    description: "Help run our programming and shape the direction of AI safety at UChicago.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScT5UnaMvGvIGZseCLhHdSDrllh8ZOIwr-1eQgv-Fg5kZejZg/viewform?usp=header",
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
        {actions.map((action) => {
          const content = (
            <>
              <h3 className={styles.cardTitle}>{action.title}</h3>
              <p className={styles.cardDescription}>{action.description}</p>
              <span className={styles.cardArrow} aria-hidden="true">
                →
              </span>
            </>
          );
          return action.internal ? (
            <Link key={action.title} href={action.href} className={styles.card}>
              {content}
            </Link>
          ) : (
            <a
              key={action.title}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}>
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CallToActionLinks;
