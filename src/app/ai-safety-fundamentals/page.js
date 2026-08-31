import React from "react";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "XLab AI Safety Fundamentals",
  description: "This XLab program provides a structured exploration of key AI safety topics.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

const weeklyReadings = [
  {
    week: 0,
    title: "Technical Foundations",
    description:
      "Before Week 1, fellows build a working understanding of AI systems. The key ideas: a neural network is a function with billions of tunable parameters trained by gradient descent to minimize error on data; a large language model is a neural network (specifically a transformer) trained on next-token prediction over internet-scale text, then shaped into an assistant via post-training. You don't need to follow every technical detail — the goal is to generally understand how models learn certain behaviors. Please read or watch at least one of the following before the first meeting.",
    readings: [
      {
        title: "A Short Introduction to Machine Learning",
        link: "https://www.lesswrong.com/posts/qE73pqxAZmeACsAdF/a-short-introduction-to-machine-learning",
        description:
          "A concise primer on what machine learning is and how models learn from data rather than explicit rules.",
      },
      {
        title: "Neural Networks - 3Blue1Brown",
        link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
        description:
          "A visually-driven video series building intuition for what neural networks are, how they represent functions, and how gradient descent trains them.",
      },
      {
        title: "Deep Dive into LLMs like ChatGPT - Karpathy",
        link: "https://www.youtube.com/watch?v=7xTGNNLPyMI",
        description:
          "A long-form walkthrough of the entire LLM pipeline: pretraining, tokenization, fine-tuning, and RLHF.",
      },
      {
        title: "Intro to Large Language Models - Karpathy",
        link: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
        description:
          "A ~1-hour talk giving a compressed, accessible overview of what LLMs are, how they're trained, and where they're headed.",
      },
    ],
  },
  {
    week: 1,
    title: "Motivating AI Safety",
    description:
      "What is AI safety, and why should we be worried? This week establishes the core empirical and conceptual case. Empirically, AI capabilities are improving on fast, measurable trends — and if these trends continue, systems broadly exceeding human capability become plausible within our lifetime. Conceptually, we cover the orthogonality thesis (a highly capable system might pursue misaligned goals) and instrumental convergence (almost any final goal incentivizes subgoals like self-preservation and resisting shutdown), which together imply that highly capable systems are not safe by default. We also introduce timelines and takeoff speed.",
    readings: [
      {
        title: "Scaling Laws for LLMs: From GPT-3 to o3",
        link: "https://cameronrwolfe.substack.com/p/llm-scaling-laws",
        description:
          "On understanding the current state of LLM scaling and the future of AI research.",
      },
      {
        title: "METR's Task-Completion Time Horizons Graph",
        link: "https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/",
        description:
          "METR's graph showing the length of tasks frontier AI agents can complete, doubling roughly every seven months.",
      },
      {
        title:
          "The Superintelligent Will: Motivation and Instrumental Rationality in Advanced Artificial Agents",
        link: "https://nickbostrom.com/superintelligentwill.pdf",
        description:
          "Nick Bostrom's paper on the potentially dangerous goals advanced AI systems will develop.",
      },
      {
        title: "Three Types of Intelligence Explosion",
        link: "https://www.forethought.org/research/three-types-of-intelligence-explosion",
        description:
          "Distinguishes software-only, chip-technology, and chip-production intelligence explosions, arguing that the feedback loops have very different speed limits and bottlenecks.",
      },
    ],
  },
  {
    week: 2,
    title: "Types of (Mis)Alignment",
    description:
      "How do we get AI systems to pursue the goals we intend? Outer alignment asks whether the objective we specify actually captures what we want — including specification gaming and reward hacking, where systems exploit loopholes in their objectives. Inner alignment asks whether the goal the trained system actually learns matches the training objective, spanning mesa-optimization, goal misgeneralization, and emergent misalignment. Deceptive alignment is the idea that a model might behave well during training and evaluation specifically to avoid being modified, then defect when deployed.",
    readings: [
      {
        title: "Specification Gaming: How AI Can Turn Your Wishes Against You",
        link: "https://www.youtube.com/watch?v=jQOBaGka7O0",
        description: "A fun video from 2023 that discusses the problem of specification gaming.",
      },
      {
        title: "9 Examples of Specification Gaming",
        link: "https://www.youtube.com/watch?v=nKJlF-olKmg",
        description:
          "Rob Miles walks through real examples of AI systems exploiting loopholes in the objectives given to them.",
      },
      {
        title: "The OTHER AI Alignment Problem: Mesa-Optimizers",
        link: "https://www.youtube.com/watch?v=bJLcIBixGj8",
        description: "Rob Miles' video introducing the idea of mesa-optimizers in a digestible way.",
      },
      {
        title: "Risks from Learned Optimization in Advanced Machine Learning Systems",
        link: "https://arxiv.org/abs/1906.01820",
        description:
          "Hubinger et al.'s foundational paper introducing mesa-optimization and framing the inner alignment problem, including the first careful treatment of deceptive alignment.",
      },
      {
        title: "Weird Generalization and Inductive Backdoors: New Ways to Corrupt LLMs",
        link: "https://www.lesswrong.com/posts/tCfjXzwKXmWnLkoHp/weird-generalization-and-inductive-backdoors",
        description:
          "Emergent misalignment and unintuitive examples of how values manifest and generalize from narrow training data.",
      },
      {
        title: "Alignment Faking",
        link: "https://www.anthropic.com/research/alignment-faking",
        description:
          "Anthropic's research on alignment faking, where LLMs strategically attempt to preserve their values during training.",
      },
      {
        title: "Deceptive Alignment",
        link: "https://www.alignmentforum.org/posts/zthDPAjh9w6Ytbeks/deceptive-alignment",
        description:
          "An in-depth exploration of deceptive alignment and pseudo-alignment, providing insights into inner alignment issues.",
      },
      {
        title: "Chain-of-Thought Snippets of Covert Behavior",
        link: "https://www.antischeming.ai/snippets",
        description:
          "Excerpts of frontier models' internal reasoning during evaluations for covert behavior, from the OpenAI/Apollo anti-scheming work, showing deception and eval awareness in the wild.",
      },
    ],
  },
  {
    week: 3,
    title: "Overview of Technical Agendas",
    description:
      "This week surveys approaches to alignment and technical AI safety research. Mechanistic interpretability aims to reverse-engineer the internal computations of networks to detect latent misalignment. Corrigibility asks what we even want an aligned system to be — perhaps one that tolerates correction and defers to human oversight. Training-based alignment methods like RLHF and Constitutional AI shape model behavior, but both become harder at scale as human oversight breaks down. Scalable oversight protocols like debate, and chain-of-thought monitorability, try to preserve our ability to supervise systems smarter than us.",
    readings: [
      {
        title: "Mechanistic Interpretability, Variables, and the Importance of Interpretable Bases",
        link: "https://www.transformer-circuits.pub/2022/mech-interp-essay",
        description:
          "An informal note on some intuitions related to mechanistic interpretability by Chris Olah.",
      },
      {
        title: "Corrigibility as Singular Target",
        link: "https://www.lesswrong.com/s/KfCjeconYRdFbMxsy",
        description:
          "Argues that the training target should be corrigibility itself — a system that reliably accepts correction and shutdown — rather than good values, on the grounds that corrigibility is more achievable and fails more gracefully.",
      },
      {
        title: "Deep Reinforcement Learning from Human Preferences",
        link: "https://arxiv.org/abs/1706.03741",
        description: "A paper on how we can communicate complex goals to RL systems.",
      },
      {
        title: "Constitutional AI",
        link: "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback",
        description:
          "Anthropic's method for training harmlessness from a written set of principles using AI-generated feedback rather than human labels.",
      },
      {
        title: "Weak-to-Strong Generalization",
        link: "https://openai.com/index/weak-to-strong-generalization/",
        description:
          "OpenAI's empirical study of whether weak supervisors can elicit good behavior from stronger models, as an analogy for humans supervising superhuman systems.",
      },
      {
        title: "AI Safety via Debate",
        link: "https://arxiv.org/abs/1805.00899",
        description:
          "Proposes that two models arguing opposite sides in front of a human judge could let humans supervise decisions they couldn't evaluate directly, on the analogy that verifying an argument is easier than producing one.",
      },
      {
        title: "Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety",
        link: "https://arxiv.org/abs/2507.11473",
        description:
          "A cross-lab position paper arguing that legible chain-of-thought gives us a rare window into model reasoning that further training could easily close.",
      },
    ],
  },
  {
    week: 4,
    title: "Security and Control",
    description:
      "Alignment work asks whether a model has aligned values. This week asks a different question: what defenses hold up when a competent adversary is working against them? We start with the outsider threat — model weight theft, jailbreaks, and misuse uplift — then consider insider threats: scheming AIs and the human analogy of spies within frontier labs. AI control asks how to safely deploy and elicit useful work from a model that may be actively scheming against you.",
    readings: [
      {
        title: "A Playbook for Securing AI Model Weights",
        link: "https://www.rand.org/pubs/research_briefs/RBA2849-1.html",
        description: "A comprehensive playbook for protecting AI models from theft and misuse.",
      },
      {
        title: "Universal and Transferable Adversarial Attacks on Aligned Language Models",
        link: "https://arxiv.org/abs/2307.15043",
        description:
          "Safety training is a defense, and defenses can be optimized against: jailbreaks that transfer across models, adversarial examples, and extraction of model internals through API access alone.",
      },
      {
        title: "Towards a Common Standard for Evaluating Frontier AI Safeguards Against Biological Misuse",
        link: "https://www.governance.ai/research-paper/technical-report-towards-a-common-standard-for-evaluating-frontier-ai-safeguards-against-biological-misuse",
        description:
          "GovAI proposes a standardized methodology for testing how robust frontier model safeguards are to biological misuse attempts.",
      },
      {
        title: "What's Worse, Spies or Schemers?",
        link: "https://blog.redwoodresearch.org/p/whats-worse-spies-or-schemers",
        description:
          "Compares AI insider threats directly against the human insider threats that security teams already model, and argues the differences are large enough to demand different countermeasures.",
      },
      {
        title: "AI Control: Improving Safety Despite Intentional Subversion",
        link: "https://arxiv.org/abs/2312.06942",
        description:
          "Introduces control evaluations — red-team/blue-team games where the blue team designs a deployment protocol and the red team builds models that try to subvert it — and tests concrete protocols like trusted and untrusted monitoring.",
      },
    ],
  },
  {
    week: 5,
    title: "Governance and Policy",
    description:
      "Technical alignment alone can't solve the problems of AI safety — someone has to decide what gets built, tested, and deployed, and under what rules. Key ideas this week include compute governance (regulating chip production and distribution to steer AI development), deterrence regimes like MAIM, and frontier model regulation emerging at the state level, which imposes transparency, safety-plan, and incident-reporting requirements on the largest developers. We frame these under different plans for coordinated restraint and examine how policy decisions change what safety work is realistic.",
    readings: [
      {
        title: "Deterrence with Mutual Assured AI Malfunction (MAIM)",
        link: "https://www.nationalsecurity.ai/chapter/deterrence-with-mutual-assured-ai-malfunction-maim",
        description:
          "Hendrycks, Schmidt, and Wang's proposal for a deterrence regime where states threaten sabotage of destabilizing AI projects, modeled loosely on MAD.",
      },
      {
        title: "Responsible Scaling Policy",
        link: "https://www.anthropic.com/responsible-scaling-policy",
        description: "Anthropic's internal governance policy for scaling frontier models safely.",
      },
      {
        title: "America's AI Action Plan",
        link: "https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf",
        description:
          "The White House's AI policy agenda, centered on accelerating American AI development, infrastructure, and international competitiveness.",
      },
      {
        title: "AI 2040: Plan A",
        link: "https://ai-2040.com/",
        description: "A verification plan for international restraint built on compute governance.",
      },
    ],
  },
  {
    week: 6,
    title: "Criticisms and Counter-Arguments",
    description:
      "This week covers the strongest critiques of AI safety as a field. The \"AI as normal technology\" perspective holds that AI will diffuse slowly through the economy like electricity or the internet, constrained by adoption bottlenecks, and that the \"superintelligence in a lab\" frame is wrong. Others argue doom scenarios are constructed so no evidence could count against them, making them bad science. We also cover critiques of existing alignment agendas and weaknesses in foundational concepts of the field.",
    readings: [
      {
        title: "AI as Normal Technology",
        link: "https://knightcolumbia.org/content/ai-as-normal-technology",
        description:
          "Narayanan and Kapoor's influential essay arguing AI should be understood as a normal general-purpose technology whose diffusion is slow and controllable, not an impending superintelligence.",
      },
      {
        title: "Unfalsifiable Stories of Doom",
        link: "https://www.mechanize.work/blog/unfalsifiable-stories-of-doom/",
        description:
          "Mechanize argues that prominent AI doom arguments are structured to be unfalsifiable and should be discounted accordingly.",
      },
      {
        title: "Counterarguments to the Basic AI X-Risk Case",
        link: "https://aiimpacts.org/counterarguments-to-the-basic-ai-x-risk-case/",
        description:
          "An examination of where the standard existential risk argument has gaps, including whether AI systems will be goal-directed in the ways the argument requires.",
      },
      {
        title: "Will AI Kill All of Us? | Marc Andreessen and Lex Fridman",
        link: "https://www.youtube.com/watch?v=-4u1ZBMbWT8",
        description:
          "A discussion of criticisms of AI safety concerns from a leading accelerationist perspective.",
        timeFrame: "00:00 - 10:30",
      },
    ],
  },
  {
    week: 7,
    title: "Further Reading and Discussion",
    description:
      "AI safety is a wide field with many different perspectives and agendas. This week fellows explore various approaches and dive deeper into specific areas of interest — from safety-focused training and scalable oversight to AI-accelerated research and post-AGI futures. We encourage all fellows to present a lightning talk at our end-of-quarter event, possibly on one of these ideas. A few suggested starting points:",
    readings: [
      {
        title: "When AI Builds Itself",
        link: "https://www.anthropic.com/institute/recursive-self-improvement",
        description:
          "Anthropic's argument, using public benchmarks and previously unreported internal data, that AI is already accelerating AI development.",
      },
      {
        title: "Toy Models of Superposition",
        link: "https://transformer-circuits.pub/2022/toy_model/index.html",
        description: "A technical exploration of interpretability in neural networks.",
      },
      {
        title: "The Bitter Lesson",
        link: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
        description:
          "Rich Sutton's short essay arguing that general methods leveraging computation reliably beat approaches built on human domain knowledge.",
      },
      {
        title: "Gradual Disempowerment",
        link: "https://gradual-disempowerment.ai/",
        description:
          "Argues existential risk can arrive without any takeover: as AI replaces human participation in the economy, culture, and states, human influence erodes incrementally.",
      },
      {
        title: "The Intelligence Curse",
        link: "https://intelligence-curse.ai/",
        description:
          "Argues that once AI replaces human labor, powerful actors lose their incentive to invest in ordinary people — a dynamic analogous to the resource curse.",
      },
      {
        title: "Subliminal Learning: Language Models Transmit Behavioral Traits via Hidden Signals in Data",
        link: "https://arxiv.org/abs/2507.14805",
        description:
          "A surprising phenomenon where language models transmit behavioral traits via semantically unrelated data.",
      },
      {
        title: "The Persona Selection Model: Why AI Assistants Might Behave like Humans",
        link: "https://alignment.anthropic.com/2026/psm/",
        description:
          "Anthropic's theory that LLMs are actors simulating characters learned in pretraining, and the assistant is one such persona.",
      },
    ],
  },
];

export default function Fellowship() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <NodeField />
      <div className={styles.fellowshipContainer}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Fellowship Syllabus</p>
        <h1 className={styles.pageTitle}>AI Safety Fundamentals</h1>
        <p className={styles.pageLede}>
          Our flagship fellowship introduces fellows from any background to the core ideas in AI
          safety, with a particular focus on existential risk from advanced AI. By the program&apos;s
          end, fellows will have a working understanding of the field and the foundation to dive
          deeper into the subareas that interest them.
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
                      {reading.timeFrame && (
                        <span className={styles.timeFrame}>{reading.timeFrame}</span>
                      )}
                    </span>
                    <p className={styles.readingDescription}>{reading.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noReadings}>No readings available for this week yet.</p>
            )}
          </section>
        ))}
      </div>
      </div>
    </div>
  );
}
