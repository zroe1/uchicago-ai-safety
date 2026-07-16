import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

// `invert` marks dark-on-transparent logos that flip to light silhouettes in
// dark mode; logos with their own dark backgrounds stay as they are.
const alumniOrgs = [
  { name: "Anthropic", src: "/Anthropic-Logo.wine.svg", invert: true },
  { name: "MATS", src: "/mats.svg", invert: true },
  { name: "Google DeepMind", src: "/DeepMind_new_logo.svg.png", invert: true },
  { name: "OpenAI", src: "/openai.png", invert: true },
  { name: "Redwood Research", src: "/redwood.png", invert: true },
  { name: "AI Futures Project", src: "/ai_futures_project_logo.jpg" },
  { name: "Gray Swan", src: "/gray-swan-og-image.png" },
  { name: "Epoch AI", src: "/epoch.png", invert: true },
];

export const metadata = {
  title: "About Us - UChicago AI Safety",
  description: "Learn about UChicago AI Safety, a student-led initiative studying AI safety at the University of Chicago.",
  keywords: "AI safety, University of Chicago, about, student organization",
};

export default function AboutUs() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <NodeField />
      <div className={styles.aboutContainer}>
        <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Who We Are</p>
        <h1 className={styles.pageTitle}>About Us</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Existential Risk Laboratory</h2>
        <p className={styles.bodyText}>
          Founded in 2022 at the University of Chicago, the Existential Risk Laboratory (XLab) is
          an interdisciplinary research organization dedicated to the analysis and mitigation of
          risks that threaten human civilization&apos;s long-term survival. We focus on critically
          under-addressed areas: AI safety, biorisk, nuclear security, and extreme climate change,
          recognizing the urgent need for more expertise and innovative thinking in these fields.
          Since these issues don&apos;t fit neatly into pre-existing academic silos, XLab was
          created to serve as a coordinating locus for work on existential and global catastrophic
          risk on the UChicago campus, bringing together scholars from across the academy. We
          support direct research and provide a venue for students to build expertise in our focus
          areas.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>AI Safety Group @ UChicago XLab</h2>
        <p className={styles.bodyText}>
          The AI Safety Group @ UChicago XLab is a student group affiliated with the Existential
          Risk Laboratory, dedicated to education and research in AI alignment — the crucial
          challenge of ensuring artificial intelligence behaves in ways that benefit humanity and
          align with our values. As AI becomes more powerful, the importance of alignment grows.
          Misaligned AI could pose significant risks, from unintended consequences to potentially
          existential risks. Our group aims to contribute to this vital field by:
        </p>
        <ul className={styles.bodyList}>
          <li>
            Providing rigorous education and fostering critical thought by exposing members to
            diverse perspectives on this transformative technology.
          </li>
          <li>
            Producing high-quality research and analysis to build the foundation for high-impact
            careers in AI safety.
          </li>
          <li>
            Cultivating a strong, supportive community that connects motivated students to the vital
            field of AI alignment.
          </li>
        </ul>
        <p className={styles.bodyText}>
          By fostering the next generation of AI researchers and ethicists, we strive to make a
          lasting impact on the future of AI safety, working towards a future where advanced AI
          systems benefit all of humanity.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our members have gone on to</h2>
        <div className={styles.logoGrid}>
          {alumniOrgs.map((org) => (
            <div key={org.name} className={styles.logoItem} title={org.name}>
              <Image
                src={org.src}
                alt={org.name}
                fill
                className={org.invert ? "dark-invert" : undefined}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
