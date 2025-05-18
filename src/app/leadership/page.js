import styles from "./page.module.css";
import LeadershipMember from "./LeadershipMember";

export const metadata = {
  title: "Leadership Team - UChicago AI Safety",
  description: "Meet the dedicated individuals who guide UChicago AI Safety.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

export default function LeadershipPage() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Our Leadership Team</h1>
      <p className={styles.pageDescription}>
        Meet the dedicated individuals who guide our AI Safety Student Team. We are here to help you
        through your AI safety journey. If you have any questions please do not hesitate to reach
        out!
      </p>
      <div className={styles.LeaderContainer}>
        <LeadershipMember
          imgUrl="/jo.jpeg"
          memberEmail="jialingjiao@uchicago.edu"
          memberName="Jo Jialing Jiao"
          memberRole="Technical Programming"
        />
        <LeadershipMember
          imgUrl="/zephy.png"
          memberEmail="zroe@uchicago.edu"
          memberName="Zephy Roe"
          memberRole="Technical Programming"
        />
        <LeadershipMember
          imgUrl="/henry.jpeg"
          memberEmail="henryj@uchicago.edu"
          memberName="Henry Josephson"
          memberRole="Governance Research Manager"
        />
        <LeadershipMember
          imgUrl="/michelle.jpeg"
          memberEmail="mma02@uchicago.edu"
          memberName="Michelle Ma"
          memberRole="Governance Research Manager"
        />
        <LeadershipMember
          imgUrl="/arden.jpeg"
          memberEmail="aaberg@uchicago.edu "
          memberName="Arden Berg"
          memberRole="Economics of Transformative AI Reading Group"
        />
        <LeadershipMember
          imgUrl="/avik.jpeg"
          memberEmail="avikg@uchicago.edu"
          memberName="Avik Garg"
          memberRole="Advisor"
        />

        <LeadershipMember
          imgUrl="/zach.png"
          memberEmail="zrudolph@uchicago.edu"
          memberName="Zachary Rudolph"
          memberRole="X-Lab Deputy Director"
        />
      </div>
    </div>
  );
}
