import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

// `invert` marks dark-on-transparent logos that flip to light silhouettes in
// dark mode; logos with their own dark backgrounds stay as they are.
const alumniOrgs = [
  { name: "Anthropic", src: "/Anthropic-Logo.wine.svg", href: "https://www.anthropic.com", invert: true },
  { name: "MATS", src: "/mats.svg", href: "https://www.matsprogram.org", invert: true },
  { name: "Google DeepMind", src: "/DeepMind_new_logo.svg.png", href: "https://deepmind.google", invert: true },
  { name: "OpenAI", src: "/openai.png", href: "https://openai.com", invert: true },
  { name: "Redwood Research", src: "/redwood.png", href: "https://www.redwoodresearch.org", invert: true },
  { name: "AI Futures Project", src: "/ai_futures_project_logo.jpg", href: "https://www.aifutures.org" },
  { name: "Gray Swan", src: "/gray-swan-og-image.png", href: "https://www.grayswan.ai" },
  { name: "Epoch AI", src: "/epoch.png", href: "https://epoch.ai", invert: true },
  { name: "New York State Assembly", src: "/nys-assembly-seal.png", href: "https://assembly.state.ny.us/mem/Alex-Bores" },
];

export const metadata = {
  title: "About Us - AI Safety Group @ UChicago XLab",
  description: "Learn about the AI Safety Group @ UChicago XLab, a student-led initiative studying AI safety at the University of Chicago.",
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
        <h2 className={styles.sectionTitle}>AI Safety Group @ UChicago XLab</h2>
        <p className={styles.bodyText}>
          The AI Safety Group @ UChicago XLab is a student group affiliated with the{" "}
          <a
            href="https://xrisk.uchicago.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}>
            Existential Risk Laboratory
          </a>
          , dedicated to education and research in AI safety — the crucial challenge of mitigating
          risks that arise from advanced AI and ensuring that it is developed in a way that benefits
          humanity. As AI becomes more capable, it becomes increasingly important to ensure that AI
          systems are aligned with human values, that bad actors cannot misuse AI for harmful ends,
          and that power does not become concentrated in the hands of a few. As AI systems are integrated into a growing number of
          critical domains and societal functions, misaligned AI could pose significant risks,
          ranging from unintended effects to potentially existential consequences. Our group aims to
          contribute to this vital field by:
        </p>
        <ul className={styles.bodyList}>
          <li>
            Providing rigorous education and fostering critical thought by exposing members to
            diverse perspectives on this transformative technology.
          </li>
          <li>
            Producing high-quality research and analysis that moves the needle on AI safety and
            builds the foundation for high-impact careers in the field.
          </li>
          <li>
            Cultivating a vibrant, supportive community that connects motivated students to the vital
            field of AI safety.
          </li>
        </ul>
        <p className={styles.bodyText}>
          By fostering the next generation of AI researchers and ethicists, we strive to make a
          lasting impact on the future, working towards a world where advanced AI systems benefit
          all of humanity.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Existential Risk Laboratory (XLab)</h2>
        <p className={styles.bodyText}>
          Founded in 2022 at the University of Chicago, the Existential Risk Laboratory (XLab) is an
          interdisciplinary research organization dedicated to the analysis and mitigation of risks
          that threaten human civilization&apos;s long-term survival. XLab focuses on critically
          under-addressed areas: AI safety, biorisk, nuclear security, and extreme climate change,
          recognizing the urgent need for more expertise and innovative thinking in these fields.
          Since these issues don&apos;t fit neatly into pre-existing academic silos, XLab was
          created to serve as a coordinating locus for work on existential and global catastrophic
          risk on the UChicago campus, bringing together scholars from across the academy. It
          supports direct research and provides a venue for students to build expertise in its focus
          areas.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our members have worked with</h2>
        <div className={styles.logoGrid}>
          {alumniOrgs.map((org) => (
            <a
              key={org.name}
              href={org.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoItem}
              title={org.name}>
              <Image
                src={org.src}
                alt={org.name}
                fill
                className={org.invert ? "dark-invert" : undefined}
                style={{ objectFit: "contain" }}
              />
            </a>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
