import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Events - AI Safety Group @ UChicago XLab",
  description: "Upcoming and past events from the AI Safety Group @ UChicago XLab.",
  keywords: "AI safety, events, University of Chicago, symposium",
};

const upcomingEvents = [
  {
    name: "What is Going On in AI?",
    date: "Thursday, October 15, 2026 · 5–7pm",
    location: "Rubenstein Forum, Friedman Hall Auditorium",
    registerHref: "https://luma.com/vqxdyli7",
    description:
      "A discussion with Stephen Casper, computer scientist and assistant professor at the Harvard Kennedy School of Government, and Daniel Holz, physicist at the University of Chicago and director of the Existential Risk Laboratory, to make sense of recent events in AI. What happened in the HuggingFace and OpenAI attacks and the other rogue agent breakouts? Why are people calling for a slowdown?",
    image: {
      src: "/whatsgoingoninAIposter.jpg",
      alt: "Poster for What is Going On in AI? with Stephen Casper and Daniel Holz",
      width: 1529,
      height: 2299,
    },
  },
  {
    name: "Midwest AIS Retreat",
    date: "November 2026",
    description: "Details coming soon.",
  },
];

const pastEvents = [
  {
    name: "Autumn Quarter Info Session",
    date: "October 5, 2026 · 6–7pm",
    description: "Details coming soon.",
  },
  {
    name: "Lightning Talks — Spring Quarter '26",
    date: "May 22, 2026",
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
        {event.location && <p className={styles.eventLocation}>{event.location}</p>}
        <p className={styles.eventDescription}>{event.description}</p>
        {event.image && (
          <a
            href={event.image.src}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.eventImageLink}>
            <Image
              src={event.image.src}
              alt={event.image.alt}
              width={event.image.width}
              height={event.image.height}
              className={styles.eventImage}
            />
          </a>
        )}
        {event.registerHref && (
          <a
            href={event.registerHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerLink}>
            Register <span aria-hidden="true">→</span>
          </a>
        )}
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
