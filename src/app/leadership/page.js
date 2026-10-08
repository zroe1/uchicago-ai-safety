import styles from "./page.module.css";
import LeadershipMember from "./LeadershipMember";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Leadership Team - UChicago AI Safety",
  description: "Meet the dedicated individuals who guide UChicago AI Safety.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

const executiveBoard = [
  { imgUrl: "/julian.jpg", memberName: "Julian Huang", memberRole: "Executive Board Member", memberEmail: "julianhuang@uchicago.edu", bookingUrl: "https://calendly.com/julianhuang" },
  { imgUrl: "/nolan.jpg", memberName: "Nolan Johnson", memberRole: "Executive Board Member", memberEmail: "njohnson10@uchicago.edu", bookingUrl: "https://calendly.com/nolanjohnson/chat" },
  { imgUrl: "/evie.png",   memberName: "Evie Hu",       memberRole: "Executive Board Member", memberEmail: "evelynhu@uchicago.edu", objectPosition: "35% top", bookingUrl: "https://calendly.com/eviehu612" },
  { imgUrl: "/nicole.jpeg", memberName: "Nicole Tang",  memberRole: "Executive Board Member", memberEmail: "xhtang@uchicago.edu", bookingUrl: "https://cal.com/nicoletangxh/quickchat" },
  { imgUrl: "/justin.jpg", memberName: "Justin Chen",  memberRole: "Executive Board Member", memberEmail: "justinchen@uchicago.edu", bookingUrl: "https://calendly.com/emailjustinchen/30min" },
];

const autumnOrganizers = [
  { memberName: "Brody Fleishman",   memberRole: "Fundamentals Facilitator" },
  { memberName: "Adrian Fang",       memberRole: "Fundamentals Facilitator" },
  { memberName: "Sophia Wang",       memberRole: "Fundamentals Facilitator, Graphics" },
  { memberName: "Sasha Haider",      memberRole: "Fundamentals Facilitator" },
  { memberName: "Justin Chen",       memberRole: "Fundamentals Facilitator" },
  { memberName: "Kerenna Klein",     memberRole: "Fundamentals Facilitator" },
  { memberName: "Laura Nielsen",     memberRole: "Fundamentals Facilitator, Events" },
  { memberName: "Parjanya Tiwari",   memberRole: "Policy & Governance Facilitator" },
  { memberName: "Gil Rubinstein",    memberRole: "Policy & Governance Facilitator" },
  { memberName: "Tiago Flora",       memberRole: "Economics of Transformative AI Facilitator" },
  { memberName: "Lucas Chen",        memberRole: "Technical Paper Reading Group Facilitator" },
  { memberName: "Brian Yu",          memberRole: "Technical Paper Reading Group Facilitator" },
  { memberName: "Julian Huang",      memberRole: "Research Manager" },
  { memberName: "Rhea Kanuparthi",   memberRole: "Research Manager" },
  { memberName: "Kailee Kuan",       memberRole: "Events & Marketing Lead" },
  { memberName: "Madeleine Hoffman", memberRole: "Operations Lead" },
];

const organizers = [
  { memberName: "Nicole Tang",       memberRole: "Fundamentals Facilitator" },
  { memberName: "Kin Ching Ip",      memberRole: "Fundamentals Facilitator" },
  { memberName: "Charlie Kunz",      memberRole: "Fundamentals Facilitator" },
  { memberName: "Daniel Pressman",   memberRole: "Fundamentals Facilitator" },
  { memberName: "Justin Chen",       memberRole: "Economics of Transformative AI Facilitator" },
  { memberName: "Kailee Kuan",       memberRole: "Economics of Transformative AI Facilitator, Events & Marketing Lead" },
  { memberName: "Olle Lange",        memberRole: "Policy & Governance Facilitator" },
  { memberName: "Jason Lin",         memberRole: "Policy & Governance Facilitator" },
  { memberName: "Steve Zha",         memberRole: "Policy & Governance Facilitator" },
  { memberName: "Madeleine Hoffman", memberRole: "Operations Lead" },
  { memberName: "Emma Alcyone",      memberRole: "Operations Lead" },
];

const advisors = [
  { memberName: "Rhea Kanuparthi", memberEmail: "rhea.kanuparthi@gmail.com" },
  { memberName: "Jo Jiao",         memberEmail: "jialingjiao@uchicago.edu" },
  { memberName: "Zephy Roe",       memberEmail: "zroe@uchicago.edu" },
  { memberName: "Henry Josephson", memberEmail: "henryj@uchicago.edu" },
  { memberName: "Michelle Ma",     memberEmail: "mma02@uchicago.edu" },
  { memberName: "Arden Berg",      memberEmail: "aaberg@uchicago.edu" },
  { memberName: "Avik Garg",       memberEmail: "avikg@uchicago.edu" },
];

export default function LeadershipPage() {
  return (
    <div className={styles.pageWrap}>
      <GridFade />
      <NodeField clearWidth={1160} />
      <div className={styles.leadershipContainer}>
        <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Our Team</p>
        <h1 className={styles.pageTitle}>Leadership</h1>
        <p className={styles.pageLede}>
          Meet the dedicated individuals who lead our AI safety group. We are here to help you
          through your AI safety journey — if you have any questions, we&apos;d love to hear from
          you.
        </p>
        <p className={styles.pageLede}>
          We are currently recruiting for student organizers to help deliver and scale up our
          programs over the 2026–27 academic year. See open roles{" "}
          <a
            href="https://docs.google.com/document/d/1oxUyMg42swaz4c9TsFLqU9Vc58kAB1dEL1auvYl0zG8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}>
            here
          </a>
          . Apply{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScT5UnaMvGvIGZseCLhHdSDrllh8ZOIwr-1eQgv-Fg5kZejZg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}>
            here
          </a>
          .
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Executive Board</h2>
        <div className={styles.leaderGrid}>
          {executiveBoard.map((member) => (
            <LeadershipMember key={member.memberName} {...member} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Organizers &amp; Leads — Autumn &apos;26</h2>
        <div className={styles.simpleGrid}>
          {autumnOrganizers.map((member) => (
            <div key={member.memberName} className={styles.simpleCard}>
              <p className={styles.simpleName}>{member.memberName}</p>
              <p className={styles.simpleRole}>{member.memberRole}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Organizers &amp; Leads — Spring &apos;26</h2>
        <div className={styles.simpleGrid}>
          {organizers.map((member) => (
            <div key={member.memberName} className={styles.simpleCard}>
              <p className={styles.simpleName}>{member.memberName}</p>
              <p className={styles.simpleRole}>{member.memberRole}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Advisors</h2>
        <div className={styles.simpleGrid}>
          {advisors.map((member) => (
            <div key={member.memberName} className={styles.simpleCard}>
              <p className={styles.simpleName}>{member.memberName}</p>
              <p className={styles.simpleEmail}>{member.memberEmail}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
