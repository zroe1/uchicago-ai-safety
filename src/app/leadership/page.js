import styles from "./page.module.css";
import LeadershipMember from "./LeadershipMember";
import NodeField from "@/app/ornaments/NodeField";
import GridFade from "@/app/ornaments/GridFade";

export const metadata = {
  title: "Leadership Team - AI Safety Group @ UChicago XLab",
  description: "Meet the dedicated individuals who guide the AI Safety Group @ UChicago XLab.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

const executiveBoard = [
  { imgUrl: "/julian.jpg", memberName: "Julian Huang", memberRole: "Executive Board Member", memberEmail: "julianhuang@uchicago.edu", bookingUrl: "https://calendly.com/julianhuang" },
  { imgUrl: "/nolan.jpg", memberName: "Nolan Johnson", memberRole: "Executive Board Member", memberEmail: "njohnson10@uchicago.edu", bookingUrl: "https://calendly.com/nolanjohnson/chat" },
  { imgUrl: "/evie.png",   memberName: "Evie Hu",       memberRole: "Executive Board Member", memberEmail: "evelynhu@uchicago.edu", objectPosition: "35% top", bookingUrl: "https://calendly.com/eviehu612" },
  { imgUrl: "/nicole.jpeg", memberName: "Nicole Tang",  memberRole: "Executive Board Member", memberEmail: "xhtang@uchicago.edu", bookingUrl: "https://cal.com/nicoletangxh/quickchat" },
  { imgUrl: "/justin.jpg", memberName: "Justin Chen",  memberRole: "Executive Board Member", memberEmail: "justinchen@uchicago.edu", bookingUrl: "https://calendly.com/emailjustinchen/30min" },
];

const autumnTeams = [
  {
    team: "Fellowships",
    groups: [
      { role: "AI Safety Fundamentals Facilitators", members: ["Justin Chen", "Elias England", "Adrian Fang", "Brody Fleishman", "Sasha Haider", "Kerenna Klein", "Laura Nielsen", "Sophia Wang"] },
      { role: "Policy & Governance Facilitators", members: ["Gil Rubinstein", "Parjanya Tiwari"] },
      { role: "Economics of Transformative AI Facilitators", members: ["Tiago Flora"] },
    ],
  },
  {
    team: "Research",
    groups: [
      { role: "Research Managers", members: ["Julian Huang", "Rhea Kanuparthi"] },
      { role: "Technical Paper Reading Group Facilitators", members: ["Lucas Chen", "Brian Yu"] },
      { role: "Blog Posts Writing Group", members: ["Aarav Leekha"] },
    ],
  },
  {
    team: "Events",
    groups: [
      { role: "Operations Lead", members: ["Madeleine Hoffman"] },
      { role: "General", members: ["Laura Nielsen"] },
    ],
  },
  {
    team: "Marketing",
    groups: [
      { role: "Marketing Lead", members: ["Kailee Kuan"] },
      { role: "Graphics", members: ["Sophia Wang"] },
      { role: "General", members: ["Jacqueline Huang", "Victoria Kurakata", "Laura Nielsen"] },
    ],
  },
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
  { memberName: "Jo Jiao",         memberEmail: "jojiao@uchicago.edu" },
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
          Applications for leadership roles are currently closed. Please look out for future
          opportunities through our{" "}
          <a
            href="https://lists.uchicago.edu/web/info/aisafety"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}>
            mailing list
          </a>
          !
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
        <div className={styles.teamGrid}>
          {autumnTeams.map(({ team, groups }) => (
            <div key={team} className={styles.teamCard}>
              <h3 className={styles.teamName}>{team}</h3>
              {groups.map(({ role, members }) => (
                <div key={role} className={styles.teamGroup}>
                  <p className={styles.simpleRole}>{role}</p>
                  <ul className={styles.teamMembers}>
                    {members.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
