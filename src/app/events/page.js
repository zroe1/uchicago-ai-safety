import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Events - UChicago AI Safety",
  description: "Upcoming and past events from UChicago AI Safety.",
  keywords: "AI safety, events, University of Chicago, symposium",
};

export default function Events() {
  return (
    <div className={styles.eventsContainer}>
      <h1 className={styles.pageTitle}>Events</h1>
      <div className={styles.pageDivider}></div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Upcoming Events</h2>

        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Uncommon Hacks AI Safety Track</h3>
          <p className={styles.eventDate}>May 16–17, 2026</p>
          <p className={styles.eventDescription}>
            XLab is proud to sponsor the AI Safety Track of Uncommon Hacks 2026. We hope this will
            provide an opportunity for people to learn about AI Safety and get hands-on experience
            building a project that contributes to the field. Because of the relative novelty of the
            field, every individual contributor, even those who are less experienced, can have an
            outsized impact on the trajectory of AI development.
          </p>
          <a
            href="https://docs.google.com/document/d/10v01apW04bVNBBWYw37yvalaSIaLOR26su-SVHcsI0Q/edit?tab=t.x4mzga1jdrrb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.learnMoreLink}>
            Learn More
          </a>
        </div>

        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Lightning Talks — Spring Quarter &apos;26</h3>
          <p className={styles.eventDate}>Friday, May 22, 2026</p>
          <p className={styles.eventDescription}>
            Hear quick talks on AI Safety from members of our community.
          </p>
        </div>

        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Midwest AIS Retreat</h3>
          <p className={styles.eventDate}>October 2026</p>
          <p className={styles.eventDescription}>Details coming soon.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Past Events</h2>

        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Speaker Event with Aryan Bhatt</h3>
          <p className={styles.eventDate}>May 14, 2026 · 7–8pm</p>
          <p className={styles.eventDescription}>
            XLab is thrilled to welcome Aryan Bhatt, Member of the Technical Staff at Redwood
            Research, for a virtual panel. We also hosted an in-person gathering on UChicago&apos;s
            campus with dinner provided.
          </p>
          <a
            href="https://luma.com/8bybv38w"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.learnMoreLink}>
            Learn More
          </a>
        </div>

        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Chicago Symposium on Transformative AI</h3>
          <p className={styles.eventDescription}>
            An intensive two-day symposium bringing together undergraduates to think rigorously
            about the future of AI and its implications. The symposium featured talks from speakers
            in technical AI alignment and AI governance, and peer collaboration to challenge
            assumptions and develop new ideas.
          </p>
          <a
            href="https://chicagoalignment.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.learnMoreLink}>
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
}
