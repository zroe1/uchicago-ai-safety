import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Strategy Group - UChicago AI Safety",
  description:
    "Join our AI Strategy focus group to develop shared understanding on the crux questions of Transformative AI.",
  keywords:
    "AI safety, AI alignment, University of Chicago, x-risk lab, AI research, strategy group",
};

const weeklyContent = [
  {
    week: 1,
    title: "Scaling Laws and Interactive Forecasting",
    description: "Explore various epoch AI papers and engage in interactive forecasting exercises.",
    content: [
      {
        title: "From GPT-4 to AGI: Counting the OOMs",
        link: "https://situational-awareness.ai/from-gpt-4-to-agi/#Compute",
        description: "Situational awareness and scaling analysis",
      },
      {
        title: "AI Forecasting Questions Answer Key",
        description: "Review and discuss key forecasting questions",
      },
      {
        title: "AI Safety Forecasting Workshop",
        description: "Interactive workshop on AI forecasting",
      },
    ],
  },
  {
    week: 2,
    title: "Threat Modelling I: Deceptive Alignment",
    description: "Deep dive into deceptive alignment and its implications.",
    content: [
      {
        title: "How likely is deceptive alignment?",
        link: "https://www.lesswrong.com/posts/A9NxPTwbw6r6Awuwt/how-likely-is-deceptive-alignment",
        description: "Critical analysis of deceptive alignment risks",
      },
      {
        title: "Threat Models",
        link: "https://www.alignmentforum.org/w/threat-models-ai?sortedBy=topAdjusted",
        description: "Different ways that AI risk could manifest",
      },
      {
        title: "AI Risk Concrete Stories",
        link: "https://www.alignmentforum.org/w/ai-risk-concrete-stories",
        description: "Explore concrete scenarios and encourage constructive debate",
      },
    ],
  },
  {
    week: 3,
    title: "Threat Modelling II: Model Organisms",
    description: "Examine model organisms and their role in alignment research.",
    content: [
      {
        title: "Model Organisms of Misalignment",
        link: "https://www.lesswrong.com/posts/ChDH335ckdvpxXaXX/model-organisms-of-misalignment-the-case-for-a-new-pillar-of-1",
        description: "The case for a new pillar of alignment research",
      },
      {
        title: "Alignment faking in large language models",
        link: "https://www.anthropic.com/research/alignment-faking",
        description: "Analysis of how AI models may fake alignment",
      },
      {
        title: "Model Organisms Workshop",
        description: "Come up with your own ideas for model organisms & critiques",
      },
    ],
  },
  {
    week: 4,
    title: "AGI Tabletop Wargame",
    description: "Participate in an immersive AGI tabletop wargame simulation.",
    content: [],
  },
  {
    week: 5,
    title: "AGI Tabletop Wargame (Continued)",
    description: "Continue and conclude the AGI tabletop wargame simulation.",
    content: [],
  },
  {
    week: 6,
    title: "International Game Theory",
    description: "Analyze unipolar vs. bipolar takeoff scenarios and AGI realism.",
    content: [
      {
        title: "National Security is not International Security",
        link: "https://www.lesswrong.com/posts/LZv8irE3wSLYBrosg/national-security-is-not-international-security-a-critique",
        description: "A critique from an Oxford international relations scholar",
      },
      {
        title: "Superintelligence Strategy Expert",
        link: "https://drive.google.com/file/d/1JVPc3ObMP1L2a53T5LA1xxKXM6DAwEiC/view",
        description: "Analysis of strategic implications",
      },
    ],
  },
  {
    week: 7,
    title: "Writing Your Own Takeoff Scenario",
    description: "Synthesize your learning by writing your own AGI takeoff scenario.",
    content: [
      {
        title: "Dave Kasten's AGI-by-2027 vignette",
        link: "https://www.lesswrong.com/posts/dave-kasten-s-agi-by-2027-vignette",
        description: "Example scenario for inspiration",
      },
    ],
  },
];

export default function StrategyGroup() {
  return (
    <div className={styles.strategyContainer}>
      <h1 className={styles.pageTitle}>XLab AI Strategy Group</h1>
      <div className={styles.pageDivider}></div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p className={styles.pageDescription}>
          Amidst the accelerating capabilities of models like o3 and the decreasing cost-performance
          ratio of models such as Deepseek-r1, Transformative AI—technology capable of
          &quot;precipitating a transition comparable to (or more significant than) the agricultural
          or industrial revolution&quot;—is approaching swiftly. To ensure the best outcomes, it is
          crucial to develop a coherent narrative about the future of AGI, one that integrates
          technological progress with political developments in the context of an AGI arms race.
        </p>
        <p className={styles.pageDescription}>
          XLab AI Strategy is a 7-week focus group that aims to develop shared understanding on the
          crux questions of Transformative AI. Along the way, we will be doing forecasting informed
          by scaling laws, threat-modelling, a tabletop wargame (premise: we reach AGI in 2027), and
          many more. By the end, you will write your own AGI takeoff scenario.
        </p>
        <div className={styles.infoBox}>
          <h3>Format</h3>
          <p>
            The fellowship will run from week 2 to week 8 for 1.5 hours each week, schedule TBA.
          </p>

          <h3>Who we are looking for</h3>
          <p>
            We are looking for 10-12 UChicago students who have thought a lot about the future of
            AGI along all dimensions, including technology, economics, ethics, political science,
            philosophy, etc. Technical experience is not required though having some intuition for
            neural networks would be helpful. We will pay a lot of attention to your writing.
          </p>

          <h3>Application</h3>
          <p>
            Apply here by March 24, Monday of week 1. Contact Jo at{" "}
            <span className={styles.email}>jojiao@uchicago.edu</span> if you have any questions.
          </p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeFHozMw2Asi9qGCOkgWPXjxirIAI6Omp92MbLirEqAFYk-ew/viewform?usp=sharing"
          className={styles.actionButton}>
          Apply Now
        </a>
      </div>

      <div className={styles.weeklyContent}>
        {weeklyContent.map((week, index) => (
          <div key={index} className={styles.weekSection}>
            <h2 className={styles.weekTitle}>
              Week {week.week}: {week.title}
            </h2>
            <p className={styles.weekDescription}>{week.description}</p>
            {week.content.length > 0 ? (
              <ul className={styles.contentList}>
                {week.content.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.contentItem}>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contentLink}>
                        {item.title}
                      </a>
                    ) : (
                      <span className={styles.contentTitle}>{item.title}</span>
                    )}
                    <p className={styles.contentDescription}>{item.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noContent}>Content to be announced.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
