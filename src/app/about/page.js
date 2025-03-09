import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "About - UChicago AI Safety",
  description:
    "About UChicago AI Safety: our mission, vision, activities, affiliation, and how to get involved.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.pageTitle}>About UChicago AI Safety</h1>
      <div className={styles.pageDivider}></div>

      <section className={styles.missionSection}>
        <h2 className={styles.secondaryTitle}>Our Mission</h2>
        <p className={styles.paragraph}>
          UChicago AI Safety is dedicated to channeling talent from the University of Chicago into
          AI Safety causes, focusing on both technical research and governance. Our primary goal is
          to create counterfactual AI Safety careers and foster a community of students engaged in
          critical work towards ensuring the safe development of artificial intelligence.
        </p>
      </section>

      <section className={styles.visionSection}>
        <h2 className={styles.secondaryTitle}>Our Vision</h2>
        <ul className={styles.unorderedLst}>
          <li>Cultivate a core group of students engaged in AI Safety work</li>
          <li>Create a large funnel of students exploring AI Safety careers</li>
          <li>Increase awareness through hosting talks and events</li>
          <li>Help hire faculty and introduce professors to the AI Alignment community</li>
          <li>
            Support XLab&#39;s goal of establishing a minor or major in existential risk studies
          </li>
        </ul>
      </section>

      <section className={styles.activitiesSection}>
        <h2 className={styles.secondaryTitle}>Our Activities</h2>
        <ul className={styles.unorderedLst}>
          <li>
            XLab AI Safety Fundamentals Program: A structured course to value-align and upskill
            undergraduates
          </li>
          <li>
            AI Policy Research: Collaborating with clients to create novel research on
            policy-relevant questions in AI Safety
          </li>
          <li>Public Talks: Hosting speakers to increase awareness of AI Safety</li>
          <li>
            Chicago Symposium on Transformative AI: An annual conference bringing together
            undergraduates interested in AI Safety
          </li>
        </ul>
      </section>

      <section className={styles.affiliationSection}>
        <h2 className={styles.secondaryTitle}>Our Affiliation</h2>
        <p className={styles.paragraph}>
          UChicago AI Safety is a X-Lab program, part of the University of Chicago&#39;s hub for
          research on existential risk. To learn more visit their{" "}
          <a href="https://xrisk.uchicago.edu/">website</a>.
        </p>
      </section>

      <section className={styles.getInvolvedSection}>
        <h2 className={styles.secondaryTitle}>Get Involved</h2>
        <p className={styles.paragraph}>
          Interested in joining our mission? We&#39;re always looking for passionate students to
          join our XLab AI Safety Fundamentals program, attend our events, or contribute to our
          projects. To get involved, you can reach out to our presidents, Avik and Jo at{" "}
          <span className={styles.email}>avikg@uchicago.edu</span> and{" "}
          <span className={styles.email}>jialingjiao@uchicago.edu</span> or the deputy director of
          x-lab at <span className={styles.email}>zrudolph@uchicago.edu</span>.
        </p>
      </section>
    </div>
  );
}
