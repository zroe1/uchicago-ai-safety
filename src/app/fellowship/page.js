import React from "react";
import styles from "./page.module.css";

const weeklyReadings = [
  {
    week: 1,
    title: "Superintelligence and Control",
    description:
      "Explore the implications of increasingly intelligent systems, focusing on instrumental convergence and orthogonality.",
    readings: [
      {
        title: "Scaling Laws for Neural Language Models",
        link: "https://arxiv.org/pdf/2001.08361",
        description:
          "A brief look at the original scaling laws paper, foundational for understanding AI progress.",
      },
      {
        title:
          "The Superintelligent Will: Motivation and Instrumental Rationality in Advanced Artificial Agents",
        link: "https://nickbostrom.com/superintelligentwill.pdf",
        description:
          "Nick Bostrom's influential work on power-seeking and instrumental convergence in AI systems.",
      },
      {
        title: "From GPT-4 to AGI: A Situational Awareness Perspective",
        link: "https://situational-awareness.ai/from-gpt-4-to-agi/",
        description:
          "Optional reading on AI scaling and its implications for artificial general intelligence.",
        optional: true,
      },
      {
        title: "Transformer Language Models (Video)",
        link: "https://www.youtube.com/watch?v=5eqRuVp65eY",
        description:
          "Watch 0:00 - 11:30 for an accessible introduction to scaling laws in language models.",
        timeFrame: "0:00 - 11:30",
      },
    ],
  },
  {
    week: 2,
    title: "TBA",
    description: "Oops! We are still working on finding readings for this week!",
    readings: [],
  },
  {
    week: 3,
    title: "Outer Alignment & Goal Misspecification",
    description: "Examine the challenges in correctly specifying training goals for AI systems.",
    readings: [
      {
        title: "Specification gaming: the flip side of AI ingenuity",
        link: "https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/",
        description:
          "A comprehensive overview of outer alignment issues from DeepMind researchers.",
      },
    ],
  },
  {
    week: 4,
    title: "Inner Alignment & Goal Misgeneralization",
    description:
      "Investigate whether models pursue correct goals on out-of-distribution data and learn intended behaviors.",
    readings: [
      {
        title: "Goal misgeneralisation: why correct specifications aren't enough for correct goals",
        link: "https://deepmindsafetyresearch.medium.com/goal-misgeneralisation-why-correct-specifications-arent-enough-for-correct-goals-cf96ebc60924",
        description: "An in-depth exploration of inner alignment concerns and their implications.",
      },
    ],
  },
  {
    week: 5,
    title: "AI Security Concerns",
    description:
      "Explore various AI security issues including jailbreaks, finetuning, and prompt injection.",
    readings: [
      {
        title: "Andrei's video on AI security",
        link: "#",
        description:
          "A comprehensive overview of AI security concerns and their potential impacts.",
      },
    ],
  },
  {
    week: 6,
    title: "Criticisms and Counter-Arguments",
    description:
      "Examine critiques of AI safety concerns, including discussions on groupthink and cult-like behaviors.",
    readings: [
      {
        title: "Podcast Episode on AI Safety Criticisms",
        link: "https://www.youtube.com/watch?v=-4u1ZBMbWT8",
        description:
          "Listen to 00:00 - 10:30 for a balanced discussion on common criticisms of AI safety concerns.",
        timeFrame: "00:00 - 10:30",
      },
    ],
  },
  {
    week: 7,
    title: "Alignment Agendas, Hope, and Action",
    description: "Oops! We are still working on finding readings for this week!",
    readings: [],
  },
];

export default function Fellowship() {
  return (
    <div className={styles.fellowshipContainer}>
      <h1 className={styles.pageTitle}>Fellowship</h1>
      <div className={styles.pageDivider}></div>
      <p className={styles.pageDescription}>
        This fellowship reading list for the UChicago AI Safety Club provides a structured
        exploration of key AI safety topics across seven weeks. It covers a range of crucial
        subjects from superintelligence and control to alignment challenges and critical
        perspectives on AI safety.
      </p>
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
