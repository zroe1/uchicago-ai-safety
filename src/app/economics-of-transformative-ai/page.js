import React from "react";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Economics of Transformative AI - UChicago AI Safety",
  description:
    "A fellowship examining how economic forces shape AI safety decisions, and how economic tools can meaningfully reduce existential risk from AI.",
  keywords:
    "AI safety, economics, transformative AI, University of Chicago, x-risk lab, AI governance",
};

const weeklyReadings = [
  {
    week: 1,
    title: "Why Does the Economics of AI Matter for Existential Risk?",
    description:
      "Non-aligned AI could be dangerous, potentially resulting in existential risks — and many such risks would transmit, at least in part, through economic channels. Conversely, economics offers toolkits and frameworks that can help society navigate AI. This week provides a primer on the links between AI safety and economics, drawing on the latest scenarios, forecasts, and threat models.",
    readings: [
      {
        title: "AI 2027",
        link: "https://ai-2027.com/",
        description:
          "The AI Futures Project's narrative forecast, providing concrete scenarios and reference points for AI development and how things could go right or wrong.",
      },
      {
        title: "Scenario Planning for an A(G)I Future",
        link: "https://www.elibrary.imf.org/view/journals/022/0060/004/article-A008-en.xml",
        description:
          "Anton Korinek explains how economic policymaking needs to adapt to different AI scenarios.",
      },
    ],
  },
  {
    week: 2,
    title: "How Might AI Impact Economic Growth?",
    description:
      "Experts disagree on how AI might impact economic growth. Under some scenarios, superintelligence combined with advanced robotics boosts growth so much that current institutions struggle to keep up and the share of AI-related activities in GDP approaches 100%. Under others, AI boosts productivity but long-term growth rates change little from the baseline, due to bottlenecks such as physical infrastructure, raw materials, or an AI capabilities slowdown. This week explores these disagreements and what different scenarios mean for AI safety.",
    readings: [
      {
        title: "What If We Could Automate Invention?",
        link: "https://www.newthingsunderthesun.com/pub/2ek4d4s3",
        description:
          "Matt Clancy's brief explanation of the intuition behind automated R&D.",
      },
      {
        title: "Economics and Transformative AI",
        link: "https://tecunningham.github.io/posts/2025-09-19-transformative-AI-notes.html",
        description:
          "Tom Cunningham's key arguments against explosive growth, with an overview of the disagreements between economists and AI researchers.",
      },
    ],
  },
  {
    week: 3,
    title: "How Might AI Impact Jobs and Power?",
    description:
      "AI is already changing the nature of jobs — what could AGI or ASI do to the labour market? Some argue that a system at least as good as the best human at any computer-based task could wipe out white-collar employment, and that AI-developed robotics would leave an ever-diminishing niche for human labour. Others argue that comparative advantage will always leave a role for humans. Economies that rely more on AI and less on human labour could also concentrate power in the hands of the few who control AI and capital. This week unpacks these dynamics and explores how society might function in an AI-driven economy.",
    readings: [
      {
        title: "Scenarios for the Transition to AGI",
        link: "https://www.nber.org/papers/w32255",
        description:
          "Korinek and Suh consider how wages might change under different AGI scenarios, including potential wage collapses.",
      },
      {
        title: "The Intelligence Curse",
        link: "https://intelligence-curse.ai/",
        description:
          "Drago and Laine explain how economies that no longer need human labour may stop valuing human welfare.",
      },
    ],
  },
  {
    week: 4,
    title: "What Are the Strategic Dynamics Between AI Actors?",
    description:
      "Existing strategic incentives are among the greatest drivers of unsafe AI development. Economic tools such as game theory help explain why dangerous racing dynamics persist between frontier labs and between countries, while microeconomic concepts such as externalities and asymmetric information shed light on how governments and markets can shape the incentives of AI labs. This week explores these dynamics primarily through an interactive table-top exercise simulating an intelligence takeoff.",
    readings: [
      {
        title: "Strategic Insights from Simulation Gaming of AI Race Dynamics",
        link: "https://arxiv.org/abs/2410.03092",
        description:
          "Gruetzemacher, Avin, Fox, and Saeri explain common patterns and potential pitfalls in the AI race that are leading society on a path to high existential risk.",
      },
      {
        title: "Understanding the AI Diffusion Framework",
        link: "https://www.rand.org/pubs/perspectives/PEA3776-1.html",
        description:
          "RAND's analysis of how compute governance and export controls can shape global AI development.",
      },
    ],
  },
  {
    week: 5,
    title: "How Can Economics Inform Society's Approach to AI?",
    description:
      "As a field, economics offers many ways to shape the safe development of AI. Economic analysis shapes how public policy is developed and adopted, economic theory informs parts of technical alignment, and economic thinking helps us understand the dynamics of AGI alongside tools from computer science, political science, and philosophy. This week wraps up the fellowship by looking at practical steps fellows can take to make AI safer through economics.",
    readings: [
      {
        title: "Economic Policy Challenges for the Age of AI",
        link: "https://www.nber.org/papers/w32980",
        description:
          "Anton Korinek's overview and framing of the key economic policy challenges posed by transformative AI.",
      },
      {
        title: "AI Governance through Markets",
        link: "https://arxiv.org/abs/2501.17755",
        description:
          "Tomei, Jain, and Franklin propose short-term actionable levers that use existing market-based tools to promote AI safety.",
      },
      {
        title: "Examining AI Safety as a Global Public Good",
        link: "https://aigi.ox.ac.uk/publications/examining-ai-safety-as-a-global-public-good-implications-challenges-and-research-priorities/",
        description:
          "An overview of issues in international AI governance, comparing AI to climate change as a coordination problem.",
      },
    ],
  },
];

export default function EconomicsOfTransformativeAI() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <NodeField />
      <div className={styles.fellowshipContainer}>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Fellowship Syllabus</p>
          <h1 className={styles.pageTitle}>Economics of Transformative AI</h1>
          <p className={styles.pageLede}>
            As artificial intelligence advances, companies and countries face economic pressures to
            prioritize capability development over safety, increasing catastrophic and existential
            risks from AGI. This fellowship examines how economics shapes AI safety decisions, and
            vice versa — using economic reasoning to explore future trajectories of AI and to
            understand how tools such as markets, industrial policy, regulation, and international
            coordination can meaningfully reduce existential risk. For a comprehensive overview of
            the academic literature, we recommend Agrawal, Brynjolfsson, and Korinek&apos;s{" "}
            <a
              href="https://www.nber.org/books-and-chapters/economics-transformative-ai"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readingLink}>
              The Economics of Transformative AI
            </a>
            .
          </p>
        </header>
        <div className={styles.weeklyReadings}>
          {weeklyReadings.map((week, index) => (
            <section key={index} className={styles.weekSection}>
              <p className={styles.weekNum}>Week {String(week.week).padStart(2, "0")}</p>
              <h2 className={styles.weekTitle}>{week.title}</h2>
              <p className={styles.weekDescription}>{week.description}</p>
              {week.readings.length > 0 ? (
                <ul className={styles.readingList}>
                  {week.readings.map((reading, readingIndex) => (
                    <li key={readingIndex} className={styles.readingItem}>
                      <span className={styles.readingHead}>
                        <a
                          href={reading.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.readingLink}>
                          {reading.title}
                        </a>
                        {reading.optional && <span className={styles.optionalTag}>Optional</span>}
                      </span>
                      <p className={styles.readingDescription}>{reading.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.noReadings}>Readings to be announced.</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
