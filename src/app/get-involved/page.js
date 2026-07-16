import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Get Involved - UChicago AI Safety",
  description:
    "Get Involved with UChicago AI Safety. Apply for our fellowships, join our Slack and mailing list, or reach out to us directly.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

export default function GetInvolved() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <NodeField />
      <div className={styles.getInvolvedContainer}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Join Us</p>
        <h1 className={styles.pageTitle}>Get Involved</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Apply for Fellowships</h2>
        <p className={styles.sectionText}>
          Our fellowships are quarter-long reading and discussion groups spanning alignment
          fundamentals, policy and governance, economics, strategy and forecasting, and AI
          security — open to students from any background. Applications open at the start of each
          quarter; join the mailing list below to hear when they do.
        </p>
        <Link href="/fellowships" className={styles.actionButton}>
          Explore Our Fellowships
        </Link>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Join Our Slack</h2>
        <p className={styles.sectionText}>
          Meet the community and follow the conversation between meetings. Our Slack is where we
          share opportunities, discuss the latest in AI safety, and coordinate our programming.
        </p>
        <a
          href="https://join.slack.com/t/xlab-uchicago/shared_invite/zt-3y40eokbn-U3Pc5k7UosBic0eljNg5Bg"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionButton}>
          Join Our Slack
        </a>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Join Our Mailing List</h2>
        <p className={styles.sectionText}>
          Stay updated on our events, opportunities, and the latest in AI Safety. Our mailing list
          is the best way to keep in touch and never miss an important announcement.
        </p>
        <a
          href="https://lists.uchicago.edu/web/info/aisafety"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionButton}>
          Join Our Mailing List
        </a>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.sectionText}>
          Have questions or want to learn more? Don&#39;t hesitate to reach out to us directly. You
          can find our contact information on the{" "}
          <Link href="/leadership" className={styles.inlineLink}>
            leadership page
          </Link>{" "}
          of this website.
        </p>
      </section>
      </div>
    </div>
  );
}
