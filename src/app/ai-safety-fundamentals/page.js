import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "XLab AI Safety Fundamentals",
  description: "This XLab program provides a structured exploration of key AI safety topics.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

const weeklyReadings = [
  {
    week: 1,
    title: "Philoposhical and Political Foundations of AI Safety",
    description: "Explore the philosophical and political foundations of AI safety.",
    readings: [
      {
        title: "Machines of Loving Grace",
        link: "https://www.darioamodei.com/essay/machines-of-loving-grace",
        description: "Dario Amodei's essay on the potential future of advanced AI systems.",
      },
      {
        title:
          "The Superintelligent Will: Motivation and Instrumental Rationality in Advanced Artificial Agents",
        link: "https://nickbostrom.com/superintelligentwill.pdf",
        description:
          "Nick Bostrom's paper on the potentially dangerous goals advanced AI systems will develop.",
      },
      {
        title: "AI 2027",
        link: "https://ai-2027.com/",
        description: "A narrative-form forecast of when and how AGI may be developed.",
      },
    ],
    // week: 1,
    // title: "Scaling and Instrumental Convergence",
    // description:
    //   "Explore the implications of increasingly intelligent systems, focusing on scaling laws, superintelligence, and instrumental convergence.",
    // // https://www.vox.com/future-perfect/2018/12/21/18126576/ai-artificial-intelligence-machine-learning-safety-alignment
    // readings: [
    //   {
    //     title: "The case for taking AI seriously as a threat to humanity",
    //     link: "https://www.vox.com/future-perfect/2018/12/21/18126576/ai-artificial-intelligence-machine-learning-safety-alignment",
    //     description:
    //       "We read only through section 5. This Vox article from 2020 ages remarkably well, laying out the key arguments for why we should consider AI a threat to humanity.",
    //   },
    //   {
    //     title: "Transformer Language Models (Video)",
    //     link: "https://www.youtube.com/watch?v=5eqRuVp65eY",
    //     description:
    //       "Watch 0:00 - 11:30 for an accessible introduction to scaling laws in language models.",
    //     timeFrame: "0:00 - 11:30",
    //   },
    //   {
    //     title:
    //       "The Superintelligent Will: Motivation and Instrumental Rationality in Advanced Artificial Agents",
    //     optional: true,
    //     link: "https://nickbostrom.com/superintelligentwill.pdf",
    //     description:
    //       "Nick Bostrom's influential work on power-seeking and instrumental convergence in AI systems.",
    //   },
    // ],
  },
  {
    week: 2,
    title: "Outer Alignment",
    description: "Examine the challenges in correctly specifying training goals for AI systems.",
    readings: [
      {
        title: "Specification Gaming: How AI Can Turn Your Wishes Against You",
        link: "https://www.youtube.com/watch?v=jQOBaGka7O0",
        description: "A fun video from 2023 that discusses the problem of specification gaming.",
      },
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
    title: "Deception, Inner Alignment & Mechanistic Interpretability",
    description:
      "Investigate the concept of mesa-optimizers and the potential for deceptive behavior in AI systems.",
    readings: [
      {
        title: "Alignment Faking",
        link: "https://www.anthropic.com/research/alignment-faking",
        description:
          "Anthropic's research on alignment faking, where LLMs strategically attempt to preserve their values during training.",
      },
      {
        title: "Mechanistic Interpretability, Variables, and the Importance of Interpretable Bases",
        link: "https://www.transformer-circuits.pub/2022/mech-interp-essay",
        description:
          "An informal note on some intuitions related to Mechanistic Interpretability by Chris Olah.",
      },
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
    title: "AI Security",
    description:
      "Explore various AI security issues including jailbreaks, adversarial examples, and potential vulnerabilities.",
    readings: [
      {
        title: "A Playbook for Securing AI Model Weights",
        link: "https://www.rand.org/pubs/research_briefs/RBA2849-1.html",
        description: "A comprehensive playbook for protecting AI models from theft and misuse.",
      },
      {
        title: "Four Fallacies of AI Cybersecurity",
        link: "https://www.rand.org/pubs/commentary/2024/08/four-fallacies-of-ai-cybersecurity.html",
        description:
          "Aguement that AI cybersecurity must learn from past security lessons, not reinvent them.",
      },
      // {
      //   title: "AI Sleeper Agents",
      //   link: "https://arxiv.org/pdf/2401.05566",
      //   description:
      //     "Read the abstract and page 6 for an introduction to the concept of AI sleeper agents.",
      // },
      {
        title: "Stealing Part of a Production Language Model",
        link: "https://arxiv.org/abs/2403.06634",
        description:
          "How Researchers extract embedding layers from language models through inexpensive API attacks.",
        // optional: true,
        timeFrame: "only abstract",
      },
      {
        title: "Sleight of hand: How China weaponizes software vulnerabilities",
        link: "https://www.atlanticcouncil.org/in-depth-research-reports/report/sleight-of-hand-how-china-weaponizes-software-vulnerability/",
        description:
          "China's new regulations force companies to report software vulnerabilities to government agencies.",
        optional: true,
        // timeFrame: "only abstract",
      },
      {
        title: "Ironing Out the Squiggles",
        link: "https://www.lesswrong.com/posts/H7fkGinsv8SDxgiS2/ironing-out-the-squiggles",
        description:
          "A paper review post about adversarial examples, their implications, and potential solutions.",
        optional: true,
      },
      {
        title: "SolidGoldMagikarp - tokens that jailbreak LLMs",
        link: "https://www.lesswrong.com/posts/aPeJE8bSo6rAFoLqg/solidgoldmagikarp-plus-prompt-generation",
        description:
          "Explore a famous case of LLM jailbreaking and its implications for AI security.",
        optional: true,
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
        title: "Open Problems in Technical AI Governance",
        link: "https://arxiv.org/abs/2407.14981",
        description:
          "An overview of technical AI governance and its methods for evaluating and enforcing AI control mechanisms.",
      },
      {
        title: "Certified Safe: A Schematic for Approval Regulation of Frontier AI",
        link: "https://arxiv.org/abs/2408.06210",
        description: "A proposal for FDA-style approval regulation for frontier AI systems.",
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
        optional: true,
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
      <h1 className={styles.pageTitle}>XLab AI Safety Fundamentals</h1>
      <div className={styles.pageDivider}></div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p className={styles.pageDescription}>
          This reading list provides a structured exploration of key AI safety topics across seven
          weeks. It covers a range of crucial subjects from scaling laws and instrumental
          convergence to AI governance and critical perspectives on AI safety.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfoweBGdDlvbWUoikeaR_K8V8T4A_b8sY_GYgCS-Qg-R6dfjQ/viewform?usp=header"
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
                    {reading.optional && <span className={styles.optionalTag}>Optional: </span>}
                    <a
                      href={reading.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.readingLink}>
                      {reading.title}
                    </a>

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
