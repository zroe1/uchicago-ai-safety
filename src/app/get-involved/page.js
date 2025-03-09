import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Get Involved - UChicago AI Safety",
  description:
    "Get Involved with UChicago AI Safety. Join our AI Safety Fundamentals program, mailing list, or the Chicago Symposium on Transformative AI.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

export default function GetInvolved() {
  return (
    <div className={styles.getInvolvedContainer}>
      <h1 className={styles.pageTitle}>Get Involved</h1>
      <div className={styles.pageDivider}></div>

      <section className={styles.fellowshipSection}>
        <h2>XLab AI Safety Fundamentals Program</h2>
        <p>
          Join our intensive AI Safety Fundamentals program to dive deep into AI Safety concepts,
          develop your skills, and connect with like-minded peers. Our program is designed to
          value-align and upskill undergraduates interested in AI Safety careers.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeFHozMw2Asi9qGCOkgWPXjxirIAI6Omp92MbLirEqAFYk-ew/viewform?usp=dialog"
          className={styles.actionButton}>
          Learn More & Apply
        </a>
      </section>

      <section className={styles.mailingListSection}>
        <h2>Join Our Mailing List</h2>
        <p>
          Stay updated on our events, opportunities, and the latest in AI Safety. Our mailing list
          is the best way to keep in touch and never miss an important announcement.
        </p>
        <a href="https://lists.uchicago.edu/web/info/aisafety" className={styles.actionButton}>
          Join Our Mailing List
        </a>
      </section>

      <section className={styles.symposiumSection}>
        <h2>Chicago Symposium on Transformative AI</h2>
        <p>
          Join us for an intensive two-day symposium where undergraduates come together to think
          rigorously about the future of AI and its implications. The symposium will take place on
          November 9-10, 2024, at the David Rubenstein Forum, University of Chicago.
        </p>
        <ul>
          <li>Engage with 30-40 of the most promising undergraduate students in AI Safety</li>
          <li>Hear from speakers in technical AI alignment and AI governance</li>
          <li>Collaborate with peers to challenge assumptions and develop new ideas</li>
          <li>Participate in pre-conference preparation to maximize the symposium&#39s impact</li>
        </ul>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeawF6v2f9KHdGdV4mZW_coewp26g9eQWOtQYOtBr8h8ltmBg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionButton}>
          Express Interest
        </a>
      </section>

      <section className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>
          Have questions or want to learn more? Don&#39;t hesitate to reach out to us directly. You
          can contact our presidents Avik and Jo at{" "}
          <span className={styles.email}>avikg@uchicago.edu</span> and{" "}
          <span className={styles.email}>jialingjiao@uchicago.edu</span> or the deputy director of
          x-lab at <span className={styles.email}>zrudolph@uchicago.edu</span>.
        </p>
      </section>
    </div>
  );
}
