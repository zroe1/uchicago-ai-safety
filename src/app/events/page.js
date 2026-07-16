import React from "react";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Events - UChicago AI Safety",
  description: "Upcoming and past events from UChicago AI Safety.",
  keywords: "AI safety, events, University of Chicago, symposium",
};

const upcomingEvents = [
  {
    name: "Autumn Quarter Welcome Event",
    date: "October 2026",
    description: "Details coming soon.",
  },
  {
    name: "Midwest AIS Retreat",
    date: "October 2026",
    description: "Details coming soon.",
  },
];

const pastEvents = [
  {
    name: "Lightning Talks — Spring Quarter '26",
    date: "Friday, May 22, 2026",
    description: "Hear quick talks on AI Safety from members of our community.",
  },
  {
    name: "Uncommon Hacks AI Safety Track",
    date: "May 16–17, 2026",
    description:
      "XLab is proud to sponsor the AI Safety Track of Uncommon Hacks 2026. We hope this will provide an opportunity for people to learn about AI Safety and get hands-on experience building a project that contributes to the field. Because of the relative novelty of the field, every individual contributor, even those who are less experienced, can have an outsized impact on the trajectory of AI development.",
    href: "https://docs.google.com/document/d/10v01apW04bVNBBWYw37yvalaSIaLOR26su-SVHcsI0Q/edit?tab=t.x4mzga1jdrrb",
  },
  {
    name: "Speaker Event with Aryan Bhatt",
    date: "May 14, 2026 · 7–8pm",
    description:
      "XLab is thrilled to welcome Aryan Bhatt, Member of the Technical Staff at Redwood Research, for a virtual panel. We also hosted an in-person gathering on UChicago's campus with dinner provided.",
    href: "https://luma.com/8bybv38w",
  },
  {
    name: "Chicago Symposium on Transformative AI",
    description:
      "An intensive two-day symposium bringing together undergraduates to think rigorously about the future of AI and its implications. The symposium featured talks from speakers in technical AI alignment and AI governance, and peer collaboration to challenge assumptions and develop new ideas.",
    href: "https://chicagoalignment.com/",
  },
];

function EventRow({ event }) {
  return (
    <div className={styles.eventRow}>
      <p className={styles.eventDate}>{event.date}</p>
      <div className={styles.eventBody}>
        <h3 className={styles.eventName}>{event.name}</h3>
        <p className={styles.eventDescription}>{event.description}</p>
        {event.href && (
          <a
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.learnMoreLink}>
            Learn more <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <NodeField />
      <div className={styles.eventsContainer}>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>What&apos;s Happening</p>
          <h1 className={styles.pageTitle}>Events</h1>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Upcoming</h2>
          {upcomingEvents.map((event) => (
            <EventRow key={event.name} event={event} />
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Past</h2>
          {pastEvents.map((event) => (
            <EventRow key={event.name} event={event} />
          ))}
        </section>
      </div>
    </div>
  );
}
