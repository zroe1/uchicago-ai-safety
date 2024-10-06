import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Fellowship - UChicago AI Safety",
  description:
    "This fellowship reading list for the UChicago AI Safety Club provides a structured exploration of key AI safety topics.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

const weeklyReadings = [
  {
    week: 1,
    title: "Scaling and Instrumental Convergence",
    description:
      "Explore the implications of increasingly intelligent systems, focusing on scaling laws, superintelligence, and instrumental convergence.",
    readings: [
      {
        title: "Transformer Language Models (Video)",
        link: "https://www.youtube.com/watch?v=5eqRuVp65eY",
        description:
          "Watch 0:00 - 11:30 for an accessible introduction to scaling laws in language models.",
        timeFrame: "0:00 - 11:30",
      },
      {
        title:
          "The Superintelligent Will: Motivation and Instrumental Rationality in Advanced Artificial Agents",
        link: "https://nickbostrom.com/superintelligentwill.pdf",
        description:
          "Nick Bostrom's influential work on power-seeking and instrumental convergence in AI systems.",
      },
    ],
  },
  {
    week: 2,
    title: "Outer Alignment",
    description: "Examine the challenges in correctly specifying training goals for AI systems.",
    readings: [
      {
        title: "Specification gaming: the flip side of AI ingenuity",
        link: "https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/",
        description:
          "A comprehensive overview of outer alignment issues from DeepMind researchers.",
      },
      {
        title: "Learning from human preferences",
        link: "https://openai.com/index/learning-from-human-preferences/",
        description:
          "Explore how alignment researchers have attempted to address issues in goal specification using human preferences.",
      },
    ],
  },
  {
    week: 3,
    title: "Deception & Mesa-optimization",
    description:
      "Investigate the concept of mesa-optimizers and the potential for deceptive behavior in AI systems.",
    readings: [
      {
        title: "Deceptive Alignment",
        link: "https://arxiv.org/pdf/1906.01820",
        description:
          "An in-depth exploration of deceptive alignment and pseudo-alignment, providing insights into inner alignment issues.",
      },
    ],
  },
  {
    week: 4,
    title: "AI Security Concerns",
    description:
      "Explore various AI security issues including jailbreaks, adversarial examples, and potential vulnerabilities.",
    readings: [
      {
        title: "Intro to Large Language Models - Andrej Karpathy",
        link: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
        description:
          "Watch 42:15 - 59:23 for an overview of LLM security concerns, analogous to OS security.",
        timeFrame: "42:15 - 59:23",
      },
      {
        title: "Ironing Out the Squiggles",
        link: "https://www.lesswrong.com/posts/H7fkGinsv8SDxgiS2/ironing-out-the-squiggles",
        description:
          "A paper review post about adversarial examples, their implications, and potential solutions.",
      },
      {
        title: "AI Sleeper Agents",
        link: "https://arxiv.org/pdf/2401.05566",
        description:
          "Read the abstract and page 6 for an introduction to the concept of AI sleeper agents.",
      },
      {
        title: "SolidGoldMagikarp - tokens that jailbreak LLMs",
        link: "https://www.lesswrong.com/posts/aPeJE8bSo6rAFoLqg/solidgoldmagikarp-plus-prompt-generation",
        description:
          "Explore a famous case of LLM jailbreaking and its implications for AI security.",
      },
    ],
  },
  {
    week: 5,
    title: "AI Governance",
    description:
      "Examine the challenges and approaches to governing AI development and deployment.",
    readings: [
      {
        title: "Computing Power and the Governance of AI",
        link: "https://www.governance.ai/post/computing-power-and-the-governance-of-ai",
        description:
          "An overview of the ongoing discussion about regulating AI hardware and its implications.",
      },
      {
        title: "AI Governance Needs Technical Work",
        link: "https://forum.effectivealtruism.org/posts/BJtekdKrAufyKhBGw/ai-governance-needs-technical-work#",
        description:
          "Explore how technical skills can contribute to AI governance through regulation, monitoring, and policy advising.",
      },
    ],
  },
  {
    week: 6,
    title: "Criticisms and Counter-Arguments",
    description:
      "Examine critiques of AI safety concerns and alternative perspectives on AI development.",
    readings: [
      {
        title: "Will AI kill all of us? | Marc Andreessen and Lex Fridman",
        link: "https://www.youtube.com/watch?v=-4u1ZBMbWT8",
        description:
          "Listen to 00:00 - 10:30 for a discussion on criticisms of AI safety concerns.",
        timeFrame: "00:00 - 10:30",
      },
      {
        title: "Terrorism, Tylenol, and dangerous information",
        link: "https://www.lesswrong.com/posts/Ek7M3xGAoXDdQkPZQ/terrorism-tylenol-and-dangerous-information",
        description: "A useful reading for understanding infohazards in AI development.",
      },
      {
        title: "Against Almost Every Theory of Impact of Interpretability",
        link: "https://www.lesswrong.com/posts/LNA8mubrByG7SFacm/against-almost-every-theory-of-impact-of-interpretability-1",
        description: "A critical examination of interpretability approaches in AI alignment.",
      },
    ],
  },
  {
    week: 7,
    title: "Further Reading and Discussion",
    description:
      "Explore various AI alignment approaches and dive deeper into specific areas of interest. Fellows will choose one of the optional readings to focus on for the week.",
    readings: [
      {
        title: "A Brief Introduction to some Approaches to AI Alignment",
        link: "https://aisafetyfundamentals.com/blog/ai-alignment-approaches/",
        description:
          "An overview of various AI alignment approaches, providing a foundation for further exploration.",
      },
      {
        title: "Why Agent Foundations? An Overly Abstract Explanation",
        link: "https://www.lesswrong.com/posts/FWvzwCDRgcjb9sigb/why-agent-foundations-an-overly-abstract-explanation",
        description: "A deeper dive into the concept of agent foundations in AI alignment.",
        optional: true,
      },
      {
        title: "Goal Misgeneralisation: Why Correct Specifications Aren't Enough For Correct Goals",
        link: "https://deepmindsafetyresearch.medium.com/goal-misgeneralisation-why-correct-specifications-arent-enough-for-correct-goals-cf96ebc60924",
        description:
          "An in-depth exploration of inner alignment issues and goal misgeneralization.",
        optional: true,
      },
      {
        title: "Toy Models of Superposition",
        link: "https://transformer-circuits.pub/2022/toy_model/index.html",
        description: "A technical exploration of interpretability in neural networks.",
        optional: true,
      },
      {
        title: "Steering Llama-2 with contrastive activation additions",
        link: "https://www.lesswrong.com/posts/v7f8ayBxLhmMFRzpa/steering-llama-2-with-contrastive-activation-additions",
        description: "An examination of techniques for controlling large language models.",
        optional: true,
      },
    ],
  },
];

export default function Fellowship() {
  return (
    <div className={styles.fellowshipContainer}>
      <h1 className={styles.pageTitle}>Fellowship</h1>
      <div className={styles.pageDivider}></div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p className={styles.pageDescription}>
          This fellowship reading list for the UChicago AI Safety Club provides a structured
          exploration of key AI safety topics across seven weeks. It covers a range of crucial
          subjects from scaling laws and instrumental convergence to AI governance and critical
          perspectives on AI safety.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf4O9WXV85jQKCTS046IDnHUqMbAu85p8vDUFSyncGzoQrJ9g/viewform?usp=sf_link"
          className={styles.actionButton}>
          Learn More & Apply
        </a>
      </div>
      <div className={styles.weeklyReadings}>
        {weeklyReadings.map((week, index) => (
          <div key={index} className={styles.weekSection}>
            <h2 className={styles.weekTitle}>
              Week {week.week}: {week.title}
            </h2>
            <p className={styles.weekDescription}>{week.description}</p>
            {week.readings.length > 0 ? (
              <ul className={styles.readingList}>
                {week.readings.map((reading, readingIndex) => (
                  <li key={readingIndex} className={styles.readingItem}>
                    <a
                      href={reading.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.readingLink}>
                      {reading.title}
                    </a>
                    {reading.optional && <span className={styles.optionalTag}> (Optional)</span>}
                    {reading.timeFrame && (
                      <span className={styles.timeFrame}> ({reading.timeFrame})</span>
                    )}
                    <p className={styles.readingDescription}>{reading.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noReadings}>No readings available for this week yet.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
