import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import CallToActionLinks from "@/app/CallToActionLinks/CallToActionLinks";
import NodeField from "@/app/ornaments/NodeField";

export const metadata = {
  title: "UChicago AI Safety",
  description: "UChicago's student-led initiative studying AI safety, sponsored by the x-risk lab.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

const pillars = [
  {
    title: "Fellowships",
    description:
      "Six fellowship tracks spanning alignment fundamentals, policy and governance, economics, strategy, and AI security — open to students from any background.",
    href: "/fellowships",
    linkText: "Explore fellowships",
  },
  {
    title: "Research",
    description:
      "Publications and working papers across technical safety, strategy, and governance — building the foundation for high-impact careers in the field.",
    href: "/research",
    linkText: "Read our research",
  },
  {
    title: "Community",
    description:
      "Speaker events, symposia, and retreats that connect motivated students to each other and to researchers working on AI safety today.",
    href: "/events",
    linkText: "See upcoming events",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <NodeField clearWidth={960} />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>AI Safety Group @ UChicago XLab</p>
          <h1 className={styles.heroTitle}>
            UChicago&#39;s student-led initiative to{" "}
            <em className={styles.heroAccent}>shape the future of AI safety.</em>
          </h1>
          <p className={styles.heroLede}>
            We are a community of undergraduate and graduate students working to reduce risks from
            advanced AI and steer its development toward better outcomes.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/about-us" className={styles.ctaPrimary}>
              Learn more about us <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className={styles.heroAffiliation}>
            <span>A program created by</span>
            <a
              href="https://xrisk.uchicago.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.xlabLink}
              aria-label="The University of Chicago's Existential Risk Laboratory">
              <Image
                src="/x-lab-logo.png"
                alt="The University of Chicago's Existential Risk Laboratory"
                width={853 * 0.28}
                height={293 * 0.28}
                className={`${styles.xlabLogo} dark-invert-hue`}
              />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.pillars}>
        {pillars.map((pillar) => (
          <div key={pillar.title} className={styles.pillar}>
            <h2 className={styles.pillarTitle}>{pillar.title}</h2>
            <p className={styles.pillarDescription}>{pillar.description}</p>
            <Link href={pillar.href} className={styles.pillarLink}>
              {pillar.linkText} <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </section>

      <CallToActionLinks />
    </>
  );
}
