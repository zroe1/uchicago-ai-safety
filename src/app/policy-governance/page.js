import React from "react";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Policy and Governance - UChicago AI Safety",
  description:
    "A fellowship covering the foundations of AI governance: policy frameworks, international stances, democracy, competition, and economic policy.",
  keywords:
    "AI safety, AI governance, AI policy, University of Chicago, x-risk lab, existential risk",
};

const sessions = [
  {
    session: 1,
    title: "Introduction to AI Policy and Governance",
    description:
      "What is AI governance, and who shapes it? This session maps the policy landscape: the major frameworks for governing AI, the ethical guidelines proliferating worldwide, and the plans for reducing misalignment risk that different policy choices enable or foreclose.",
    readings: [
      {
        title: "AI Benefit-Sharing Framework: Balancing Access and Safety",
        link: "https://aigi.ox.ac.uk/publications/ai-benefit-sharing-framework-balancing-access-and-safety/",
        description:
          "A framework for distributing the benefits of advanced AI while managing safety risks.",
      },
      {
        title: "Promoting Advanced Artificial Intelligence Innovation and Security",
        link: "https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/",
        description:
          "The White House's executive action on advanced AI innovation and security.",
      },
      {
        title: "A Framework for U.S. AI Governance",
        link: "https://computing.mit.edu/wp-content/uploads/2023/11/AIPolicyBrief.pdf",
        description:
          "MIT's policy brief on creating a safe and thriving AI sector in the United States.",
      },
      {
        title: "Worldwide AI Ethics: A Review of 200 Guidelines and Recommendations for AI Governance",
        link: "https://www.sciencedirect.com/science/article/pii/S2666389923002416",
        description:
          "Corrêa et al.'s systematic review of the global landscape of AI ethics guidelines.",
      },
      {
        title: "Plans A, B, C, and D for Misalignment Risk",
        link: "https://www.lesswrong.com/posts/E8n93nnEaFeXTbHn5/plans-a-b-c-and-d-for-misalignment-risk",
        description:
          "Different levels of government intervention suggest different plans and timelines for AI safety.",
      },
      {
        title: "Welcome to the AI Policy Map",
        link: "https://mapping-ai.org/map",
        description:
          "An interactive map of the institutions and stakeholders shaping US AI policy.",
      },
    ],
  },
  {
    session: 2,
    title: "International Policy Stances",
    description:
      "How do the world's major powers approach AI? This session compares the policy stances of the United States, China, and the European Union — from the White House's acceleration-focused action plan to China's evolving safety posture and the EU's comprehensive regulation — and asks what each approach means for reducing risk.",
    readings: [
      {
        title: "America's AI Action Plan",
        link: "https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf",
        description:
          "The White House's AI policy agenda, centered on accelerating American AI development, infrastructure, and international competitiveness.",
      },
      {
        title: "Policy on the AI Exponential",
        link: "https://darioamodei.com/post/policy-on-the-ai-exponential",
        description:
          "Dario Amodei argues that exponential AI progress has outpaced the policy process, and proposes mandatory frontier model testing, labor-market preparation, and a coalition of democracies.",
      },
      {
        title: "China's New AI Strategy Explained",
        link: "https://www.forbes.com/sites/wesleyhill/2025/10/21/chinas-new-ai-strategy-explained/",
        description: "An overview of China's latest national AI strategy and its priorities.",
      },
      {
        title: "How China Views AI Risks and What to Do About Them",
        link: "https://carnegieendowment.org/research/2025/10/how-china-views-ai-risks-and-what-to-do-about-them",
        description:
          "The Carnegie Endowment's analysis of how Chinese policymakers and researchers think about AI risk.",
      },
      {
        title: "The EU Artificial Intelligence Act",
        link: "https://artificialintelligenceact.eu/",
        description:
          "An explainer of the EU AI Act, the world's most comprehensive binding AI regulation.",
      },
    ],
  },
  {
    session: 3,
    title: "AI and Democracy",
    description:
      "How will advanced AI reshape democratic institutions? This session examines AI's effects on elections, public discourse, and state capacity, and the risk that AI-driven economies concentrate power in the hands of the few who control AI and capital.",
    readings: [
      {
        title: "How Will Advanced AI Systems Impact Democracy?",
        link: "https://arxiv.org/abs/2409.06729",
        description:
          "Summerfield et al. survey AI's potential effects on democratic processes, from epistemic disruption to institutional destabilization.",
      },
      {
        title: "Extreme Power Concentration",
        link: "https://80000hours.org/problem-profiles/extreme-power-concentration/",
        description:
          "On the risk that advanced AI enables unprecedented concentrations of political and economic power.",
      },
    ],
  },
  {
    session: 4,
    title: "International Competition",
    description:
      "This session covers the geopolitics of AI: racing dynamics between the United States and China, deterrence proposals modeled on nuclear strategy, export controls, and the push to decouple AI supply chains.",
    readings: [
      {
        title: "Deterrence with Mutual Assured AI Malfunction (MAIM)",
        link: "https://www.nationalsecurity.ai/chapter/deterrence-with-mutual-assured-ai-malfunction-maim",
        description:
          "Hendrycks, Schmidt, and Wang's proposal for a deterrence regime where states threaten sabotage of destabilizing AI projects, modeled loosely on MAD.",
      },
      {
        title: "China, the United States, and the AI Race",
        link: "https://www.cfr.org/articles/china-united-states-and-ai-race",
        description:
          "The Council on Foreign Relations on the state of US–China competition in AI.",
      },
      {
        title: "Decoupling America's Artificial Intelligence Capabilities from China Act of 2025",
        link: "https://www.congress.gov/bill/119th-congress/senate-bill/321",
        description:
          "A Senate bill that would restrict the flow of AI technology and research between the US and China.",
      },
      {
        title: "The Outbound Investment Security Program",
        link: "https://home.treasury.gov/policy-issues/international/outbound-investment-program",
        description:
          "The US Treasury's program restricting American investment in Chinese semiconductor, quantum, and AI technologies.",
      },
    ],
  },
  {
    session: 5,
    title: "Economic Policy",
    description:
      "How will AI transform work and the economy, and what should policymakers do about it? This session covers AI's labor-market impacts and the policy responses under debate. Fellows then form groups and begin drafting their own policy briefs.",
    readings: [
      {
        title: "AI and Our Economic Future",
        link: "https://www.aeaweb.org/articles?id=10.1257/jep.20261505",
        description:
          "Charles I. Jones surveys how transformative AI could reshape economic growth and welfare.",
      },
      {
        title: "Working with AI: Measuring the Occupational Implications of Generative AI",
        link: "https://www.microsoft.com/en-us/research/publication/working-with-ai-measuring-the-occupational-implications-of-generative-ai/",
        description:
          "Microsoft Research's study of which occupations are most exposed to generative AI.",
      },
      {
        title: "AI-Related Job Impacts Clarity Act",
        link: "https://www.congress.gov/bill/119th-congress/senate-bill/3108",
        description:
          "A Senate bill requiring transparency about AI-driven job displacement.",
      },
      {
        title: "Preparing for AI's Economic Impact: Exploring Policy Responses",
        link: "https://www.anthropic.com/research/economic-policy-responses",
        description:
          "Anthropic's survey of policy options for managing AI's economic disruption.",
      },
    ],
  },
  {
    session: 6,
    title: "Policy Brief Defense",
    description:
      "Fellows conclude the program by presenting their policy briefs and defending them from peers' critique — a low-stakes session that encourages innovative, ambitious proposals.",
    readings: [],
  },
];

export default function PolicyGovernance() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <NodeField />
      <div className={styles.fellowshipContainer}>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Fellowship Syllabus</p>
          <h1 className={styles.pageTitle}>Policy and Governance</h1>
          <p className={styles.pageLede}>
            This track covers the foundations of AI governance: policy frameworks, the differing
            stances of the US, China, and the EU, threats to democratic institutions, the dynamics
            of international competition and decoupling, and economic and labor impacts. Fellows
            conclude the program by drafting and defending their own policy briefs. No prior policy
            experience is required — we welcome students from technical backgrounds looking to
            build policy literacy, as well as those in the social sciences and humanities engaging
            with AI-specific governance challenges.
          </p>
        </header>
        <div className={styles.weeklyReadings}>
          {sessions.map((session, index) => (
            <section key={index} className={styles.weekSection}>
              <p className={styles.weekNum}>Session {String(session.session).padStart(2, "0")}</p>
              <h2 className={styles.weekTitle}>{session.title}</h2>
              <p className={styles.weekDescription}>{session.description}</p>
              {session.readings.length > 0 ? (
                <ul className={styles.readingList}>
                  {session.readings.map((reading, readingIndex) => (
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
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
