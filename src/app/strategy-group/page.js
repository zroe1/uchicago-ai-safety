import React from "react";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Strategy and Forecasting - UChicago AI Safety",
  description:
    "A reading and discussion group building shared understanding around the crucial questions of transformative AI, culminating in each fellow writing their own AGI takeoff scenario.",
  keywords:
    "AI safety, AI alignment, University of Chicago, x-risk lab, AI research, strategy group, forecasting",
};

const weeklyContent = [
  {
    week: 1,
    title: "Benchmarking Progress and Forecasting",
    description:
      "How do we track AI capability progress, and how good are we at predicting it? Why is forecasting AI valuable? Fellows open the quarter with calibration exercises on concrete AI milestones and are introduced to the scenario-writing framework that threads through the program.",
    content: [
      {
        title: "Measuring AI Ability to Complete Long Tasks",
        link: "https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/",
        description:
          "METR's benchmark tracking the length of tasks frontier AI agents can complete — how we're measuring capabilities.",
      },
      {
        title: "What Will AI Look Like in 2030?",
        link: "https://epoch.ai/blog/what-will-ai-look-like-in-2030",
        description:
          "Epoch AI on the limitations of scaling and what continued progress looks like.",
      },
      {
        title: "How Well Does RL Scale?",
        link: "https://www.tobyord.com/writing/how-well-does-rl-scale",
        description:
          "Toby Ord examines the scaling behavior of reinforcement learning and what it implies for capability forecasts.",
      },
      {
        title: "Forecasting the Economic Effects of AI",
        link: "https://forecastingresearch.org/research/economic-effects-of-ai",
        description:
          "The Forecasting Research Institute's survey of expert and superforecaster views on AI's economic impacts.",
      },
    ],
  },
  {
    week: 2,
    title: "Narrative Forecasts and Timelines",
    description:
      "How do we reason about discontinuous or high-stakes futures? What makes a scenario analytically useful rather than merely aesthetically compelling? Fellows dissect existing narrative forecasts, rate specific claims on internal consistency and empirical grounding, and identify the assumptions that seed their own scenario drafts.",
    content: [
      {
        title: "AI 2040",
        link: "https://ai-2040.com/",
        description:
          "The AI Futures Project's narrative forecast of AI development through 2040, built around a verification plan involving compute governance.",
      },
      {
        title: "Broad Timelines",
        link: "https://www.tobyord.com/writing/broad-timelines",
        description: "Toby Ord's thoughts on how to reason about AGI timelines.",
      },
    ],
  },
  {
    week: 3,
    title: "Recursive Self-Improvement and Takeoff",
    description:
      "What mechanisms could produce fast takeoff? What are the cruxes between a slow, detectable transition and a fast, catastrophic one? Fellows map their top empirical cruxes about takeoff speed and draft the opening world-state of their own scenarios.",
    content: [
      {
        title: "When AI Builds Itself",
        link: "https://www.anthropic.com/institute/recursive-self-improvement",
        description:
          "Anthropic's argument, using public benchmarks and previously unreported internal data, that AI is already accelerating AI development.",
      },
      {
        title: "Where I Agree and Disagree with Eliezer",
        link: "https://www.lesswrong.com/posts/CoZhXrhpQxpy9xw9y/where-i-agree-and-disagree-with-eliezer",
        description:
          "Paul Christiano's point-by-point response to Eliezer Yudkowsky, mapping the key disagreements about takeoff and doom.",
      },
    ],
  },
  {
    week: 4,
    title: "Planning For Safety",
    description:
      "What's the threat model? What solution classes exist, and what are their failure modes? Fellows map specific failure modes, such as deceptive alignment, onto candidate plans and examine how hard misalignment is to measure in the first place.",
    content: [
      {
        title: "Plans A, B, C, and D for Misalignment Risk",
        link: "https://www.lesswrong.com/posts/E8n93nnEaFeXTbHn5/plans-a-b-c-and-d-for-misalignment-risk",
        description:
          "Different levels of government intervention suggest different plans and timelines for AI safety.",
      },
      {
        title: "Corrigibility",
        link: "https://intelligence.org/files/Corrigibility.pdf",
        description:
          "The foundational MIRI paper on building agents that tolerate correction and shutdown rather than resisting them.",
      },
      {
        title: "Responsible Scaling Policy",
        link: "https://www.anthropic.com/responsible-scaling-policy",
        description:
          "Anthropic's internal governance policy for scaling frontier models safely.",
      },
      {
        title: "A Pragmatic Vision for Interpretability",
        link: "https://www.alignmentforum.org/posts/StENzDcD3kpfGJssR/a-pragmatic-vision-for-interpretability",
        description:
          "Neel Nanda on what mechanistic interpretability can realistically contribute to safety.",
      },
      {
        title: "Autonomy Evaluation Resources",
        link: "https://metr.org/blog/2024-03-13-autonomy-evaluation-resources/",
        description:
          "METR on the hardness of measuring misalignment: safety evals, benchmark saturation, and eval-awareness.",
      },
    ],
  },
  {
    week: 5,
    title: "Governing Frontier Development",
    description:
      "What are the realistic levers for reducing risk at the policy level, and where do they conflict? Fellows stress-test policy recommendations by arguing against them from the perspectives of specific actors, and add the inciting decision point to their scenarios.",
    content: [
      {
        title: "Superintelligence Strategy (MAIM)",
        link: "https://www.nationalsecurity.ai/",
        description:
          "Hendrycks, Schmidt, and Wang's proposal for a deterrence regime — Mutual Assured AI Malfunction — modeled loosely on nuclear deterrence.",
      },
      {
        title: "Policy on the AI Exponential",
        link: "https://darioamodei.com/post/policy-on-the-ai-exponential",
        description:
          "Dario Amodei argues that exponential AI progress has outpaced the policy process, and proposes concrete responses.",
      },
      {
        title: "AI Scenarios 2030",
        link: "https://www.gov.uk/government/publications/ai-scenarios-2030-helping-policymakers-plan-for-the-future-of-ai/ai-scenarios-2030-helping-policymakers-plan-for-the-future-of-ai",
        description:
          "The UK government's scenario-planning exercise helping policymakers prepare for the future of AI.",
      },
      {
        title: "Computing Power and the Governance of Artificial Intelligence",
        link: "https://www.governance.ai/research-paper/computing-power-and-the-governance-of-artificial-intelligence",
        description:
          "GovAI argues compute is uniquely governable among AI inputs and surveys how governments can use it to monitor and steer AI development.",
      },
    ],
  },
  {
    week: 6,
    title: "Envisioning Positive Worlds",
    description:
      "What are we working toward, not just against? Fellows present their own scenarios — or structured critiques of existing ones — with feedback on the key claim, the best objection, and what evidence would change their view.",
    content: [
      {
        title: "Introducing Better Futures",
        link: "https://www.forethought.org/research/introducing-better-futures",
        description:
          "Forethought's essay series on making the future go well, not merely avoiding catastrophe.",
      },
      {
        title: "How to Make the Future Better",
        link: "https://www.forethought.org/research/how-to-make-the-future-better",
        description:
          "Concrete actions to improve the long-run future conditional on surviving the transition to advanced AI.",
      },
    ],
  },
  {
    week: 7,
    title: "Tabletop Exercise",
    description:
      "A longer capstone session. The tabletop exercise simulates the development and geopolitical implications of advanced AI from late 2027 through 2028, and participants assume roles such as the President of the United States, foreign nations, or employees at a frontier AI lab.",
    content: [
      {
        title: "AI 2027",
        link: "https://ai-2027.com/",
        description: "The narrative scenario the exercise is based on.",
      },
    ],
  },
];

export default function StrategyGroup() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <NodeField />
      <div className={styles.strategyContainer}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Fellowship Syllabus</p>
        <h1 className={styles.pageTitle}>Strategy and Forecasting</h1>
        <p className={styles.pageLede}>
          As frontier models grow more capable and the cost of frontier-level performance continues
          to fall, transformative AI is approaching quickly. Navigating it well requires a coherent
          picture of where AGI is headed, one that integrates technical progress with the political
          dynamics of an AGI arms race. This reading and discussion group is dedicated to building
          shared understanding around the crucial questions of transformative AI. Fellows engage in
          forecasting informed by scaling laws, threat modeling, and a tabletop wargame exercise,
          culminating in each fellow writing their own AGI takeoff scenario.
        </p>
      </header>

      <div className={styles.weeklyContent}>
        {weeklyContent.map((week, index) => (
          <section key={index} className={styles.weekSection}>
            <p className={styles.weekNum}>Week {String(week.week).padStart(2, "0")}</p>
            <h2 className={styles.weekTitle}>{week.title}</h2>
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
          </section>
        ))}
      </div>
      </div>
    </div>
  );
}
