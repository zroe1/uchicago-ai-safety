import React from "react";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Policy and Governance - AI Safety Group @ UChicago XLab",
  description:
    "A fellowship covering the foundations of AI policy: key players and policy levers, current US, state, lab, and EU frameworks, pressing topics from US–China competition to CBRN risk, and careers in AI policy.",
  keywords:
    "AI safety, AI governance, AI policy, University of Chicago, x-risk lab, existential risk",
};

const sessions = [
  {
    session: 1,
    title: "Introduction to AI Policy and Governance",
    description:
      "What might transformative AI look like, and what would it take for its governance to go well? This session builds a shared picture of where AI is headed — from scaling trends to the possibility of an intelligence explosion — and surveys high-level plans for steering it, from theories of victory to staged responses to misalignment risk.",
    groups: [
      {
        readings: [
          {
            title: "What Will AI Look Like in 2030?",
            link: "https://epoch.ai/publications/what-will-ai-look-like-in-2030",
            description:
              "Epoch AI projects compute, investment, and capabilities through 2030 if current scaling trends continue.",
          },
          {
            title: "Three Types of Intelligence Explosion",
            link: "https://www.forethought.org/research/three-types-of-intelligence-explosion",
            description:
              "Forethought on how AI automating software, chip design, and chip production could each drive rapid capability growth.",
          },
          {
            title: "AI Governance Needs a Theory of Victory",
            link: "https://www.convergenceanalysis.org/publications/ai-governance-needs-a-theory-of-victory",
            description:
              "Convergence Analysis argues that AI governance work needs an explicit end state to aim for, and compares candidate theories of victory.",
          },
          {
            title: "Plans A, B, C, and D for Misalignment Risk",
            link: "https://blog.redwoodresearch.org/p/plans-a-b-c-and-d-for-misalignment",
            description:
              "Ryan Greenblatt on how different levels of government intervention suggest different plans and timelines for AI safety.",
          },
          {
            title: "AI 2040: Plan A",
            link: "https://ai-2040.com/?choices=plan-a-root",
            description:
              "The AI Futures Project's interactive scenario for an international agreement that delays superintelligence until 2040.",
            optional: true,
          },
          {
            title: "Summary: AI Governance to Avoid Extinction",
            link: "https://intelligence.org/2026/04/13/summary-ai-governance-to-avoid-extinction/",
            description:
              "The Machine Intelligence Research Institute's summary of its research agenda on the strategic landscape of AI governance.",
            optional: true,
          },
          {
            title: "AI Governance: A Research Agenda",
            link: "https://www.governance.ai/research-paper/agenda",
            description: "GovAI's foundational research agenda for the field of AI governance.",
            optional: true,
          },
          {
            title: "Gradual Disempowerment",
            link: "https://gradual-disempowerment.ai/",
            description:
              "How incremental AI progress could erode human influence over the economy, culture, and states, even without a sudden takeover.",
            optional: true,
          },
          {
            title: "AI as Normal Technology",
            link: "https://knightcolumbia.org/content/ai-as-normal-technology",
            description:
              "Narayanan and Kapoor argue that AI will diffuse gradually like past general-purpose technologies — a counterpoint to transformative AI forecasts.",
            optional: true,
          },
        ],
      },
    ],
  },
  {
    session: 2,
    title: "Understanding the Landscape",
    description:
      "How is AI policy researched and implemented, and what proposals exist? This session introduces the key policy levers available to government, with fellows splitting into groups to cover one lever each, then turns to concrete proposals from industry, Congress, and policy writers.",
    groups: [
      {
        title: "Key policy levers",
        readings: [
          {
            title: "Federal R&D Funding",
            link: "https://emergingtechpolicy.org/policy-levers/federal-rd-funding/",
            description:
              "How federal research funding shapes the direction of emerging technologies, and how it gets allocated.",
          },
          {
            title: "Regulatory Policy",
            link: "https://emergingtechpolicy.org/policy-levers/regulatory-policy/",
            description: "How agencies write and enforce rules, and where regulation fits in technology policy.",
          },
          {
            title: "Technical Standards and Evaluations",
            link: "https://emergingtechpolicy.org/policy-levers/technical-standards-and-evaluations/",
            description: "The role of standards bodies and model evaluations in governing AI.",
          },
          {
            title: "Export Controls",
            link: "https://emergingtechpolicy.org/policy-levers/export-controls/",
            description: "How export controls on chips and other technologies work, and how they are used in AI policy.",
          },
        ],
      },
      {
        title: "Proposals",
        readings: [
          {
            title: "Policy on the AI Exponential",
            link: "https://darioamodei.com/post/policy-on-the-ai-exponential",
            description:
              "Dario Amodei argues that exponential AI progress has outpaced the policy process, and proposes mandatory frontier model testing, labor-market preparation, and a coalition of democracies.",
          },
          {
            title: "Sen. Bernie Sanders at the National Press Club: Q&A",
            link: "https://www.youtube.com/live/MiKwC1fpt7c?si=_5QrfuNqlW5QtSjc&t=789",
            timeFrame: "13:09–25:30",
            description: "Senator Bernie Sanders takes questions at a National Press Club headliner event.",
          },
          {
            title: "Be It Enacted",
            link: "https://www.hyperdimensional.co/p/be-it-enacted",
            description:
              "Dean W. Ball drafts a federal AI bill pairing transparency requirements for frontier developers with a temporary preemption of state AI laws.",
          },
        ],
      },
    ],
  },
  {
    session: 3,
    title: "Current Policy and Governance",
    description:
      "What rules already govern frontier AI? This session surveys US executive policy, the frontier AI safety bills in California, New York, and Illinois, the safety frameworks published by leading AI developers, and the EU AI Act. For the state bills and developer frameworks, fellows split into groups to read one each, then come together to compare where they converge and where they differ.",
    groups: [
      {
        title: "Executive policy",
        readings: [
          {
            title: "America's AI Action Plan",
            link: "https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf",
            description:
              "The White House's AI policy agenda, centered on accelerating American AI development, infrastructure, and international competitiveness.",
          },
          {
            title: "Promoting Advanced Artificial Intelligence Innovation and Security",
            link: "https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/",
            description: "The White House's executive action on advanced AI innovation and security.",
            optional: true,
          },
        ],
      },
      {
        title: "State legislation",
        readings: [
          {
            title: "California SB 53",
            link: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53",
            description:
              "California's Transparency in Frontier Artificial Intelligence Act, requiring large frontier developers to publish safety frameworks and report critical safety incidents.",
          },
          {
            title: "New York RAISE Act",
            link: "https://legislation.nysenate.gov/pdf/bills/2025/A6453A",
            description:
              "New York's Responsible AI Safety and Education Act, setting safety and transparency requirements for frontier model developers.",
          },
          {
            title: "Illinois SB 315",
            link: "https://www.ilga.gov/documents/legislation/104/SB/PDF/10400SB0315lv.pdf",
            description: "Illinois's frontier AI safety bill.",
          },
        ],
      },
      {
        title: "Frontier safety frameworks",
        readings: [
          {
            title: "Frontier Capability Assessments",
            link: "https://www.frontiermodelforum.org/technical-reports/frontier-capability-assessments/",
            description:
              "The Frontier Model Forum's overview of how developers assess frontier models for dangerous capabilities.",
          },
          {
            title: "Anthropic Responsible Scaling Policy",
            link: "https://www-cdn.anthropic.com/files/4zrzovbb/website/0bacdc8440ea96e62a8766d99ebe1d4eea6d5f3a.pdf",
            description: "Anthropic's framework of AI Safety Levels, tying required safeguards to model capabilities.",
          },
          {
            title: "OpenAI Preparedness Framework",
            link: "https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf",
            description: "OpenAI's process for tracking and mitigating severe risks from frontier capabilities.",
          },
          {
            title: "Google DeepMind Frontier Safety Framework",
            link: "https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/strengthening-our-frontier-safety-framework/frontier-safety-framework_3-1.pdf",
            description: "Google DeepMind's critical capability levels and the mitigations tied to each.",
          },
        ],
      },
      {
        title: "Middle powers",
        readings: [
          {
            title: "High-Level Summary of the EU AI Act",
            link: "https://artificialintelligenceact.eu/high-level-summary/",
            description:
              "A concise summary of the EU AI Act's risk-based obligations, including those for general-purpose AI models.",
          },
        ],
      },
    ],
  },
  {
    session: 4,
    title: "Topics Survey I",
    description:
      "The first of two topic surveys covers international coordination and US–China competition, the governance of compute and chips, and AI's economic impacts and the policy responses under debate.",
    groups: [
      {
        title: "International coordination and China",
        readings: [
          {
            title: "Summary: An International Agreement to Prevent the Premature Creation of Artificial Superintelligence",
            link: "https://intelligence.org/2026/05/12/summary-an-international-agreement-to-prevent-the-premature-creation-of-artificial-superintelligence/",
            description:
              "The Machine Intelligence Research Institute's proposed international agreement to halt the development of artificial superintelligence.",
          },
          {
            title: "China's Big AI Diffusion Plan Is Here. Will It Work?",
            link: "https://mattsheehan.substack.com/p/chinas-big-ai-diffusion-plan-is-here",
            description: "Matt Sheehan on China's plan to spread AI across its economy, and what it reveals about Beijing's priorities.",
          },
          {
            title: "Deterrence with Mutual Assured AI Malfunction (MAIM)",
            link: "https://www.nationalsecurity.ai/chapter/deterrence-with-mutual-assured-ai-malfunction-maim",
            description:
              "Hendrycks, Schmidt, and Wang's proposal for a deterrence regime where states threaten sabotage of destabilizing AI projects, modeled loosely on MAD.",
            optional: true,
          },
          {
            title: "Seeking Stability in the Competition for AI Advantage",
            link: "https://www.rand.org/pubs/commentary/2025/03/seeking-stability-in-the-competition-for-ai-advantage.html",
            description: "RAND on how the US and China might compete over AI without destabilizing escalation.",
            optional: true,
          },
          {
            title: "How China Views AI Risks and What to Do About Them",
            link: "https://carnegieendowment.org/research/2025/10/how-china-views-ai-risks-and-what-to-do-about-them?lang=en",
            description:
              "The Carnegie Endowment's analysis of how Chinese policymakers and researchers think about AI risk.",
            optional: true,
          },
          {
            title: "China, the United States, and the AI Race",
            link: "https://www.cfr.org/articles/china-united-states-and-ai-race",
            description: "The Council on Foreign Relations on the state of US–China competition in AI.",
            optional: true,
          },
          {
            title: "Senator Hawley Introduces Sweeping U.S.-China AI Decoupling Bill",
            link: "https://www.covingtonblogs.com/2025/02/04/senator-hawley-introduces-sweeping-u-s-china-ai-decoupling-bill/",
            description:
              "A summary of a Senate bill that would restrict the flow of AI technology and research between the US and China.",
            optional: true,
          },
          {
            title: "U.S. Clamps Down on Investment in Chinese Tech Companies",
            link: "https://www.wsj.com/politics/national-security/ndaa-us-investment-chinese-tech-firms-c0866b0b",
            description: "The Wall Street Journal on new restrictions on American investment in Chinese technology firms.",
            optional: true,
          },
          {
            title: "New Law Refines Scope of Outbound Investment Security Program",
            link: "https://www.omm.com/insights/alerts-publications/new-law-refines-scope-of-outbound-investment-security-program/?source=hpn",
            description:
              "A deeper dive into the US Treasury's program restricting American investment in Chinese semiconductor, quantum, and AI technologies.",
            optional: true,
          },
          {
            title: "Is China Really Racing for AGI? with Seán Ó hÉigeartaigh",
            link: "https://genfutures.substack.com/p/is-china-really-racing-for-agi-with",
            description: "A conversation questioning the common assumption that China is racing toward AGI.",
            optional: true,
          },
        ],
      },
      {
        title: "Compute governance",
        readings: [
          {
            title: "Computing Power and the Governance of AI",
            link: "https://www.governance.ai/analysis/computing-power-and-the-governance-of-ai",
            description:
              "GovAI on why compute is an unusually governable input to AI — detectable, excludable, and quantifiable — and the policy options this opens up.",
          },
          {
            title: "How US Export Controls Have (and Haven't) Curbed Chinese AI",
            link: "https://ai-frontiers.org/articles/us-chip-export-controls-china-ai",
            description: "An assessment of how US chip export controls have affected China's AI development.",
          },
          {
            title: "A Forecast of Chinese DUV and EUV Photolithography Progress",
            link: "https://blog.aifutures.org/p/a-forecast-of-chinese-duv-and-euv",
            description:
              "A forecast of when China might domestically produce the lithography machines needed for advanced chips.",
            optional: true,
          },
          {
            title: "Secure, Governable Chips",
            link: "https://www.cnas.org/publications/reports/secure-governable-chips",
            description:
              "CNAS on building hardware mechanisms into AI chips that could support export control enforcement and other compute governance.",
            optional: true,
          },
          {
            title: "Chip War: The Fight for the World's Most Critical Technology",
            link: "https://www.amazon.com/Chip-War-Worlds-Critical-Technology/dp/1982172002",
            description: "Chris Miller's history of the semiconductor industry and its geopolitics.",
            optional: true,
          },
        ],
      },
      {
        title: "Economics",
        readings: [
          {
            title: "AI and Our Economic Future",
            link: "https://web.stanford.edu/~chadj/AIandEconomicFuture.pdf",
            description: "Charles I. Jones surveys how transformative AI could reshape economic growth and welfare.",
          },
          {
            title: "The Intelligence Curse",
            link: "https://www.lesswrong.com/posts/Mak2kZuTq8Hpnqyzb/the-intelligence-curse",
            description:
              "An argument that once AI can replace human labor, powerful actors may lose their incentive to invest in people — by analogy to the resource curse.",
          },
          {
            title: "How Adaptable Are American Workers to AI-Induced Job Displacement?",
            link: "https://www.governance.ai/research-paper/how-adaptable-are-american-workers-to-ai-induced-job-displacement",
            description: "GovAI measures which workers are most exposed to AI and how well positioned they are to adapt.",
          },
          {
            title: "Preparing for AI's Economic Impact: Exploring Policy Responses",
            link: "https://www.anthropic.com/research/economic-policy-responses",
            description: "Anthropic's survey of policy options for managing AI's economic disruption.",
          },
          {
            title: "Most AI Value Will Come from Broad Automation, Not from R&D",
            link: "https://epoch.ai/gradient-updates/most-ai-value-will-come-from-broad-automation-not-from-r-d",
            description:
              "Epoch AI argues that AI's economic value will come mostly from automating work across the economy rather than from accelerating R&D.",
            optional: true,
          },
          {
            title: "Working with AI: Measuring the Occupational Implications of Generative AI",
            link: "https://arxiv.org/pdf/2507.07935",
            description: "Microsoft Research's study of which occupations are most exposed to generative AI.",
            optional: true,
          },
          {
            title: "AI-Related Job Impacts Clarity Act",
            link: "https://www.hawley.senate.gov/wp-content/uploads/2025/11/AI-Related-Job-Impacts-Clarity-Act.pdf",
            description: "A Senate bill requiring transparency about AI-driven job displacement.",
            optional: true,
          },
          {
            title: "Transformative AI Notes",
            link: "https://tecunningham.github.io/posts/2025-09-19-transformative-AI-notes.html",
            description: "Economist Tom Cunningham's notes on the economics of transformative AI.",
            optional: true,
          },
        ],
      },
    ],
  },
  {
    session: 5,
    title: "Topics Survey II",
    description:
      "The second topic survey covers AI's risks to democratic institutions, cyber and CBRN threats, liability for AI harms, and the character of AI systems — including AI's growing role inside the executive branch.",
    groups: [
      {
        title: "Democracy",
        readings: [
          {
            title: "Extreme Power Concentration",
            link: "https://80000hours.org/problem-profiles/extreme-power-concentration/",
            description:
              "On the risk that advanced AI enables unprecedented concentrations of political and economic power.",
          },
        ],
      },
      {
        title: "Cyber",
        readings: [
          {
            title: "Black Hat USA 2026: The OpenAI–Hugging Face Incident",
            link: "https://www.youtube.com/watch?v=87DyyMV0kCY",
            description: "A Black Hat USA 2026 talk on the OpenAI–Hugging Face security incident.",
          },
          {
            title: "Could AI Enable Catastrophic Cyberattacks on the US Power Grid?",
            link: "https://www.governance.ai/research-paper/could-ai-enable-catastrophic-cyberattacks-on-the-us-power-grid",
            description: "GovAI assesses how AI could change the risk of a catastrophic cyberattack on the US power grid.",
            optional: true,
          },
        ],
      },
      {
        title: "CBRN",
        readings: [
          {
            title: "International AI Safety Report 2026",
            link: "https://internationalaisafetyreport.org/sites/default/files/2026-02/international-ai-safety-report-2026.pdf",
            timeFrame: "§2.1.4, pp. 64–71",
            description: "The international scientific report on the capabilities and risks of general-purpose AI.",
          },
          {
            title: "Prioritizing Feasible and Impactful Actions to Enable Secure Artificial Intelligence Development and Use in Biology",
            link: "https://www.rand.org/pubs/working_papers/WRA4213-1.html",
            description: "RAND's prioritized recommendations for securing AI development and use in the life sciences.",
          },
          {
            title: "Does Frontier AI Enhance Novices in Molecular Biology?",
            link: "https://activesite.substack.com/p/rct",
            description: "A randomized controlled trial of whether frontier AI models help novices perform molecular biology tasks.",
            optional: true,
          },
        ],
      },
      {
        title: "Liability",
        readings: [
          {
            title: "U.S. Tort Liability for Large-Scale Artificial Intelligence Damages",
            link: "https://www.rand.org/pubs/research_reports/RRA3084-1.html",
            description:
              "RAND's primer for developers and policymakers on how existing US tort law would apply when AI systems cause large-scale harm.",
          },
          {
            title: "No to Laissez-Faire on AI, Yes to a Light Touch",
            link: "https://www.economist.com/by-invitation/2026/04/19/no-to-laissez-faire-on-ai-yes-to-a-light-touch",
            description: "A guest essay in The Economist making the case for light-touch AI liability.",
            optional: true,
          },
        ],
      },
      {
        title: "Character and “Exec AI”",
        readings: [
          {
            title: "The Importance of AI Character",
            link: "https://www.forethought.org/research/the-importance-of-ai-character",
            description:
              "Forethought on why the values and dispositions of AI systems may be among the most consequential choices developers make.",
          },
          {
            title: "Executive Branch AI and the Rule of Law: An Emerging Research Agenda",
            link: "https://www.lawfaremedia.org/article/executive-branch-ai-and-the-rule-of-law--an-emerging-research-agenda",
            description: "Lawfare on the legal questions raised as the executive branch uses AI to carry out government functions.",
          },
          {
            title: "Claude's Constitution",
            link: "https://www.anthropic.com/constitution",
            description: "Anthropic's published constitution describing the values and character it aims for in Claude.",
            optional: true,
          },
        ],
      },
    ],
  },
  {
    session: 6,
    title: "How to Have a Career in AI Policy",
    description:
      "How can you contribute? This session covers policy skills, career pathways in Congress, think tanks, and the executive branch, networking, and public writing. Fellows then learn how to write a policy brief — executive summary, the problem, step-by-step recommendations, and why it matters — form groups, and begin drafting.",
    groups: [
      {
        title: "Public writing",
        readings: [
          {
            title: "Learning by Writing",
            link: "https://www.cold-takes.com/learning-by-writing/",
            description: "Holden Karnofsky on using writing as a tool for forming and testing your views.",
          },
        ],
      },
      {
        title: "Career resources",
        readings: [
          {
            title: "Emerging Tech Policy Careers",
            link: "https://emergingtechpolicy.org/",
            description: "A large library of guides on getting into technology policy.",
          },
          {
            title: "Get Career Support",
            link: "https://emergingtechpolicy.org/career-support/",
            description: "Request one-on-one career support from Emerging Technology Policy Careers.",
          },
          {
            title: "Speak with Us | 80,000 Hours",
            link: "https://80000hours.org/speak-with-us/",
            description: "Free career advising from 80,000 Hours, which has many connections in AI policy.",
          },
          {
            title: "AISST's List of AI Policy and Safety Opportunities",
            link: "https://docs.google.com/document/d/10fRYN3dm_rNMqgRAf32xy6gelNIzbSdzFgLmCClWMgE/edit?tab=t.0#heading=h.me06liq3jr3p",
            description: "A running list of fellowships, programs, and jobs in AI policy and safety.",
          },
        ],
      },
      {
        title: "Writing a policy brief",
        readings: [
          {
            title: "Policy Briefs",
            link: "https://writingcenter.unc.edu/tips-and-tools/policy-briefs/",
            description: "The UNC Writing Center's guide to the purpose, structure, and style of a policy brief.",
          },
          {
            title: "Sample Policy Briefs",
            link: "https://www.ipr.northwestern.edu/our-work/policy-briefs/",
            description: "Example policy briefs from Northwestern's Institute for Policy Research.",
          },
        ],
      },
    ],
  },
  {
    session: 7,
    title: "Policy Brief Defense",
    description:
      "Fellows conclude the program by presenting their policy briefs and defending them from peers' critique — a low-stakes session that encourages innovative, ambitious proposals. If you're stuck on a topic, the optional readings below are good starting points.",
    groups: [
      {
        title: "Datacenters",
        readings: [
          {
            title: "No Data Centers in My Backyard",
            link: "https://jasmi.news/p/no-data-centers-in-my-backyard",
            description: "Jasmine Sun on local opposition to data center construction.",
            optional: true,
          },
          {
            title: "Compute in America: A Policy Playbook",
            link: "https://ifp.org/special-compute-zones/",
            description: "The Institute for Progress's proposals for building AI compute infrastructure in the US.",
            optional: true,
          },
          {
            title: "AI, Data Centers, and the U.S. Electric Grid: A Watershed Moment",
            link: "https://www.belfercenter.org/research-analysis/ai-data-centers-us-electric-grid",
            description: "The Belfer Center on how AI data center demand is reshaping the US electric grid.",
            optional: true,
          },
        ],
      },
      {
        title: "Robotics",
        readings: [
          {
            title: "A Comprehensive Overview of Vision-Language-Action Models",
            link: "https://www.digitalocean.com/community/conceptual-articles/vision-language-action-models",
            description: "An introduction to the vision-language-action models behind recent progress in robotics.",
            optional: true,
          },
          {
            title: "Averting a Robot Catastrophe",
            link: "https://www.rand.org/pubs/perspectives/PEA3691-7.html",
            description: "RAND on the risks posed by increasingly capable AI-powered robots.",
            optional: true,
          },
          {
            title: "GEN-1.5: Embodied Foundation Models Are One-Shot Learners",
            link: "https://generalistai.com/blog/gen-1.5",
            description: "Generalist's announcement of an embodied foundation model for robotics.",
            optional: true,
          },
          {
            title: "Rise of China's Robotics Industry: From Manufacturing Arms to Embodied AI",
            link: "https://aiproem.substack.com/p/the-rise-of-chinas-robotics-industry",
            description: "On China's growth from industrial robotics to embodied AI.",
            optional: true,
          },
        ],
      },
      {
        title: "RSI and AI progress",
        readings: [
          {
            title: "Measuring AI R&D Automation",
            link: "https://arxiv.org/abs/2603.03992",
            description: "A paper on how to measure the extent to which AI research and development is being automated.",
            optional: true,
          },
          {
            title: "The Least Understood Driver of AI Progress",
            link: "https://epoch.ai/gradient-updates/the-least-understood-driver-of-ai-progress",
            description:
              "Epoch AI on software progress — how improvements in algorithms and data quality reduce the compute needed for a given capability.",
            optional: true,
          },
          {
            title: "The Goodhart Singularity",
            link: "https://meagreprotestanthistory.substack.com/p/the-goodhart-singularity",
            description:
              "Tom Reed argues that AI improving itself against internal benchmarks might only appear superintelligent, with gains that fail to generalize to the real world.",
            optional: true,
          },
          {
            title: "Taking Jaggedness Seriously",
            link: "https://helentoner.substack.com/p/taking-jaggedness-seriously",
            description: "Helen Toner on the uneven, jagged profile of AI capabilities and what it means for policy.",
            optional: true,
          },
        ],
      },
      {
        title: "Model weight security",
        readings: [
          {
            title: "A Playbook for Securing AI Model Weights",
            link: "https://www.rand.org/pubs/research_briefs/RBA2849-1.html",
            description: "RAND's framework of security levels for protecting frontier model weights from theft.",
            optional: true,
          },
        ],
      },
      {
        title: "Military",
        readings: [
          {
            title: "Mutually Automated Destruction: The Escalating Global A.I. Arms Race",
            link: "https://www.nytimes.com/2026/04/12/technology/china-russia-us-ai-weapons.html",
            description: "The New York Times on the race among the US, China, and Russia to build AI-enabled weapons.",
            optional: true,
          },
        ],
      },
    ],
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
            This track builds a working map of AI policy: the key players and institutions, the
            functions of government that shape AI, and the policy levers available. Fellows survey
            the frameworks in place today, explore pressing topics and issues, as well as proposed
            responses to address them. Fellows conclude the program by drafting and defending their
            own policy briefs. No prior policy experience is required — we welcome students from
            technical backgrounds looking to build policy literacy, as well as those in the social
            sciences and humanities engaging with AI-specific governance challenges.
          </p>
        </header>
        <div className={styles.weeklyReadings}>
          {sessions.map((session, index) => (
            <section key={index} className={styles.weekSection}>
              <p className={styles.weekNum}>Session {String(session.session).padStart(2, "0")}</p>
              <h2 className={styles.weekTitle}>{session.title}</h2>
              <p className={styles.weekDescription}>{session.description}</p>
              {session.groups.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  {group.title && <h3 className={styles.groupTitle}>{group.title}</h3>}
                  <ul className={styles.readingList}>
                    {group.readings.map((reading, readingIndex) => (
                      <li key={readingIndex} className={styles.readingItem}>
                        <span className={styles.readingHead}>
                          <a
                            href={reading.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.readingLink}>
                            {reading.title}
                          </a>
                          {reading.timeFrame && (
                            <span className={styles.timeFrame}>{reading.timeFrame}</span>
                          )}
                          {reading.optional && <span className={styles.optionalTag}>Optional</span>}
                        </span>
                        <p className={styles.readingDescription}>{reading.description}</p>
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
