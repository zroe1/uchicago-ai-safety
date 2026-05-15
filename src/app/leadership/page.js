import styles from "./page.module.css";
import LeadershipMember from "./LeadershipMember";

export const metadata = {
  title: "Leadership Team - UChicago AI Safety",
  description: "Meet the dedicated individuals who guide UChicago AI Safety.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

const executiveBoard = [
  { imgUrl: "/julian.jpg", memberName: "Julian Huang", memberRole: "Executive Board Member", memberEmail: "julianhuang@uchicago.edu" },
  { imgUrl: "/nolan.jpg", memberName: "Nolan Johnson", memberRole: "Executive Board Member", memberEmail: "njohnson10@uchicago.edu" },
  { imgUrl: "/evie.png",   memberName: "Evie Hu",       memberRole: "Executive Board Member", memberEmail: "evelynhu@uchicago.edu", objectPosition: "35% top" },
  { imgUrl: "/jo.jpeg",    memberName: "Jo Jiao",        memberRole: "Executive Board Member", memberEmail: "jialingjiao@uchicago.edu" },
  { imgUrl: "/zephy.png",  memberName: "Zephy Roe",      memberRole: "Executive Board Member", memberEmail: "zroe@uchicago.edu" },
  { imgUrl: "/zach.png",   memberName: "Zachary Rudolph", memberRole: "X-Lab Deputy Director", memberEmail: "zrudolph@uchicago.edu" },
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
  { memberName: "Henry Josephson", memberEmail: "henryj@uchicago.edu" },
  { memberName: "Michelle Ma",     memberEmail: "mma02@uchicago.edu" },
  { memberName: "Arden Berg",      memberEmail: "aaberg@uchicago.edu" },
  { memberName: "Avik Garg",       memberEmail: "avikg@uchicago.edu" },
];

export default function LeadershipPage() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Our Leadership Team</h1>
      <p className={styles.pageDescription}>
        Meet the dedicated individuals who lead our AI safety group. We are here to help you
        through your AI safety journey. If you have any questions, we&apos;d love to hear from you!
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Executive Board</h2>
        <div className={styles.LeaderContainer}>
          {executiveBoard.map((member) => (
            <LeadershipMember key={member.memberName} {...member} />
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
  );
}
