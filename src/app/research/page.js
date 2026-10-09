import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Research - AI Safety Group @ UChicago XLab",
  description: "Research initiatives at the AI Safety Group @ UChicago XLab.",
  keywords: "AI safety, research, University of Chicago",
};

const papers = [
  {
    title: "Iterative Finetuning is Mostly Idempotent",
    href: "https://arxiv.org/abs/2605.01130",
    image: "/iterative-finetuning.png",
  },
  {
    title: "Narrow RL Induces Broad Behavior Changes in LLMs",
    href: "https://openreview.net/forum?id=dPE0mEjUzp",
    image: "/narrow-rl.png",
  },
  {
    title: "Measuring Free-Form Decision-Making Inconsistency of Language Models in Military Crisis Simulations",
    href: "https://arxiv.org/abs/2410.13204",
    image: "/measuring-free-form.png",
  },
  {
    title: "Certified Safe: A Schematic for Approval Regulation of Frontier AI",
    href: "https://arxiv.org/abs/2408.06210",
    image: "/certified-safe.png",
    keepColors: true,
  },
  {
    title: "A California Effect For Artificial Intelligence",
    href: "https://bpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/9/3887/files/2024/02/JosephsonXLabSRF22-CaliforniaEffectAI-fa2b6d382dfdd902.pdf",
    image: "/california-effect.png",
  },
  {
    title: "Rethinking Priorities for Frontier AI Security",
    href: "http://bpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/9/3887/files/2026/03/Rethinking-Priorities-for-Frontier-AI-Security.pdf",
    image: "/rethinking priorities.png",
  },
  {
    title: "Position: Why AI R&D Benchmarks Need to Measure Research Judgment Separately",
    href: "https://bpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/9/3887/files/2026/03/Position-Why-AI-RD-Benchmarks-Need-to-Measure-Research-Judgment-Separately.pdf",
    image: "/position-why.png",
  },
  {
    title: "Open-source Language Models: Identifying Contributing Factors and Future Trends",
    href: "https://bpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/9/3887/files/2024/02/FINALHuangXLabSRF23-OpenSourceLLMsTrends-e3518fe16ccd86b8.pdf",
    image: "/open-source.png",
  },
  {
    title: "Forbidden Facts: An Investigation of Competing Objectives in Llama-2",
    href: "https://arxiv.org/abs/2312.08793",
    image: "/forbidden-facts.png",
  },
  {
    title: "Global Governance of High-Risk Artificial Intelligence",
    href: "https://bpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/9/3887/files/2024/02/FINALLlerenaXLabSRF23-GlobalGovernanceOfHighRiskAI-0334e1dd25e37cae.pdf",
    image: "/global-governance.png",
  },
];

const otherAreas = [
  "Agent foundations and decision theory",
  "Control protocols and runtime monitoring of AI systems",
  "Mechanistic and concept-level interpretability",
  "Capability evaluations and benchmarking",
  "Adversarial robustness and deployment safeguards",
  "Game-theoretic modeling and threat assessment",
  "Hardware interventions and compute proliferation dynamics",
  "Model organisms, red-teaming, and deceptive alignment",
];

export default function Research() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <NodeField />
      <div className={styles.researchContainer}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>What We Study</p>
        <h1 className={styles.pageTitle}>Research</h1>
      </header>

      <p className={styles.intro}>
        Want to do research with us? We are accepting applications for this quarter&#39;s working
        groups! See the full list of groups and logistics{" "}
        <a
          href="https://docs.google.com/document/d/1IQzu9DFuPhOlDSAsksqDNyqULyAXCw57wL9LfqqEJGo/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}>
          here
        </a>
        , and apply{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJQt0o2dUzonWsJyWe6Wu54s_SXcp6fsltzO5JHpRR2P50Lg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}>
          here
        </a>
        . Applications close at 11:59 PM CDT on Friday, October 9.
      </p>

      <p className={styles.intro}>
        Our work spans the technical, strategic, and governance dimensions of AI safety. Active
        research concentrates in four areas:
      </p>

      <div className={styles.areaCard}>
        <h2 className={styles.areaTitle}>Technical AI Safety</h2>
        <p className={styles.areaDescription}>
          Understanding the empirical properties of current frontier AI systems (namely, LLMs) and
          developing theory about the properties we can expect from future systems — how they are
          shaped by different forms of training, the mechanisms behind their behavior, and how human
          oversight can scale to increasingly advanced AI.
        </p>
      </div>

      <div className={styles.areaCard}>
        <h2 className={styles.areaTitle}>Security</h2>
        <p className={styles.areaDescription}>
          Studying the attack surface of advanced AI systems — including model weights, training
          pipelines, deployment infrastructure, and the information-security posture of frontier
          labs. Check out our{" "}
          <a
            href="https://xlabaisecurity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}>
            Security Guide
          </a>
          .
        </p>
      </div>

      <div className={styles.areaCard}>
        <h2 className={styles.areaTitle}>Strategy &amp; Forecasting</h2>
        <p className={styles.areaDescription}>
          Mapping AI development trajectories, identifying high-leverage interventions, and
          analyzing how transformative AI will reshape institutions, economies, and global risk.
        </p>
      </div>

      <div className={styles.areaCard}>
        <h2 className={styles.areaTitle}>Policy &amp; Governance</h2>
        <p className={styles.areaDescription}>
          Examining regulatory frameworks, compliance and verification mechanisms, compute
          governance, and the international coordination challenges posed by frontier AI development.
        </p>
      </div>

      <section className={styles.papersSection}>
        <h2 className={styles.otherTitle}>Publications &amp; Working Papers</h2>
        <div className={styles.papersGrid}>
          {papers.map((paper) => (
            <a
              key={paper.title}
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.paperCard}>
              {paper.image && (
                <div className={styles.paperImageWrapper}>
                  <Image
                    src={paper.image}
                    alt={paper.title}
                    fill
                    className={paper.keepColors ? undefined : styles.paperImage}
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
              )}
              <span className={styles.paperTitle}>{paper.title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.otherSection}>
        <h2 className={styles.otherTitle}>Other areas we actively engage with include:</h2>
        <ul className={styles.otherList}>
          {otherAreas.map((area) => (
            <li key={area} className={styles.otherItem}>
              {area}
            </li>
          ))}
        </ul>
      </section>
      </div>
    </div>
  );
}
