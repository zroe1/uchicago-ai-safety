import React from "react";
import FellowshipCard from "./FellowshipCard";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Fellowships - UChicago AI Safety",
  description: "UChicago AI Safety fellowship programs covering AI safety, governance, economics, strategy, and security.",
  keywords: "AI safety, fellowship, University of Chicago, AI governance, AI security",
};

const fellowships = [
  {
    name: "AI Safety Fundamentals",
    description:
      "Our flagship fellowship introduces fellows from any background to the core ideas in AI safety, with a particular focus on existential risk from advanced AI. By the program's end, fellows will have a working map of the field and the foundation to dive deeper into the subareas that interest them.",
    syllabusHref: "/ai-safety-fundamentals",
  },
  {
    name: "Policy and Governance",
    description:
      "This track covers the foundations of AI governance: policy frameworks, the differing stances of the US, China, and the EU, threats to democratic institutions, the dynamics of international competition and decoupling, economic and labor impacts, and data privacy. Fellows conclude the program by drafting and defending their own policy briefs. No prior policy experience is required– we welcome students from technical backgrounds looking to build policy literacy, as well as those in the social sciences and humanities engaging with AI-specific governance challenges.",
    syllabusHref: null,
  },
  {
    name: "Economics of Transformative AI",
    description:
      "This fellowship introduces fellows from any background to the major ideas in AI safety and their relationship to economics. Fellows examine how economic incentives shape AI safety decisions, and how those decisions (or their absence) reshape the global economy in turn. By the end of the program, fellows will have a working understanding of how market mechanisms, industrial policy, regulation, and international coordination can meaningfully reduce existential risk, along with the foundation to pursue any of these threads further.",
    syllabusHref: "https://docs.google.com/document/d/1BdtKdzSiSOyDVg4oZ0d2pGMadEh2iMe0/edit#heading=h.1k3pxpqmwrq7",
  },
  {
    name: "Strategy and Forecasting",
    description:
      "As frontier models grow more capable and the cost of frontier-level performance continues to fall, transformative AI is approaching quickly. Navigating it well requires a coherent picture of where AGI is headed, one that integrates technical progress with the political dynamics of an AGI arms race. This reading and discussion group is dedicated to building shared understanding around the crucial questions of transformative AI. Fellows engage in forecasting informed by scaling laws, threat modeling, and a tabletop wargame exercise, culminating in each fellow writing their own AGI takeoff scenario.",
    syllabusHref: "/strategy-group",
  },
  {
    name: "Technical Paper Reading Group",
    description:
      "This reading group cultivates technical literacy and research intuition by engaging directly with the AI safety literature. Each week, participants vote on a paper to read and discuss together. The goal of this group is to foster close reading, critical questioning, and collaborative debate about AI safety research. No fixed syllabus, and any intellectually curious individual is welcome to apply.",
    syllabusHref: null,
  },
  {
    name: "AI Security",
    description:
      "This fellowship introduces fellows to AI security (the study of attacks on and defenses for AI systems in adversarial settings) as a complement to the safety-focused work covered in our other programs. Fellows meet weekly to work through XLab's online AI Security course with mentorship and guidance from experienced facilitators. The curriculum builds from adversarial examples in computer vision through LLM jailbreaks, model tampering, and data poisoning and extraction attacks, with hands-on coding exercises throughout. By the end of the program, fellows will have practical familiarity with the major attack surfaces of modern AI systems and the foundation to pursue AI security research of their own.",
    syllabusHref: "https://xlabaisecurity.com/",
  },
];

export default function Fellowships() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <NodeField />
      <div className={styles.fellowshipsContainer}>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Programs</p>
          <h1 className={styles.pageTitle}>Fellowships</h1>
          <p className={styles.pageLede}>
            Quarter-long reading and discussion groups, open to students from any background. Each
            track meets weekly with experienced facilitators.
          </p>
        </header>

        <div className={styles.fellowshipGrid}>
          {fellowships.map((fellowship) => (
            <FellowshipCard key={fellowship.name} {...fellowship} />
          ))}
        </div>
      </div>
    </div>
  );
}
