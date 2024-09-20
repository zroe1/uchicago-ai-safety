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
          <li>Influence faculty hiring and introduce professors to the AI Alignment community</li>
          <li>
            Support XLab&#39;s goal of establishing a minor or major in existential risk studies
          </li>
        </ul>
      </section>

      <section className={styles.activitiesSection}>
        <h2 className={styles.secondaryTitle}>Our Activities</h2>
        <ul className={styles.unorderedLst}>
          <li>Fellowship Program: A structured course to value-align and upskill undergraduates</li>
          <li>Advanced Reading Groups: Led by PhD students to dive deep into AI Safety topics</li>
          <li>
            Policy Writing Workshops: Collaborating with government officials on policy-relevant
            questions
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
          UChicago AI Safety is proudly affiliated with XLab, the University of Chicago&#39;s hub
          for research on existential risk. This partnership allows us to leverage XLab&#39;s
          resources and expertise to maximize our impact in the field of AI Safety.
        </p>
      </section>

      <section className={styles.getInvolvedSection}>
        <h2 className={styles.secondaryTitle}>Get Involved</h2>
        <p className={styles.paragraph}>
          Interested in joining our mission? We&#39;re always looking for passionate students to
          join our fellowship program, attend our events, or contribute to our projects. Check out
          our upcoming events or reach out to us directly to learn how you can make a difference in
          AI Safety.
        </p>
      </section>
    </div>
  );
}
