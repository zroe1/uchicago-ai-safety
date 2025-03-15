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
          Applications for the 2025 Chicago Symposium on Transformative AI are now closed. This is
          an intensive two-day symposium where undergraduates will come together to think rigorously
          about the future of AI and its implications. The symposium will feature:
        </p>
        <ul>
          <li>Engagement with 30-40 of the most promising undergraduate students in AI Safety</li>
          <li>Talks from speakers in technical AI alignment and AI governance</li>
          <li>Peer collaboration to challenge assumptions and develop new ideas</li>
        </ul>
        <p>
          Join our mailing list to be notified about future symposiums and similar opportunities.{" "}
          <a href="https://lists.uchicago.edu/web/info/aisafety">Click here</a> to join. To learn
          more about the symposium, click the button below.
        </p>
        <a href="https://chicagoalignment.com/" className={styles.actionButton}>
          Learn More
        </a>
      </section>

      <section className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>
          Have questions or want to learn more? Don&#39;t hesitate to reach out to us directly. You
          can find our contact information on the leadership page of this website.
        </p>
      </section>
    </div>
  );
}
