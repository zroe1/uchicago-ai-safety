import styles from "./page.module.css";
import LeadershipMember from "./LeadershipMember";

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
          memberEmail="jo@uchicago.edu"
          memberName="Jo Something"
          memberRole="Co-President"
        />
        <LeadershipMember
          imgUrl="/avik.jpeg"
          memberEmail="avik@uchicago.edu"
          memberName="Avik Garg"
          memberRole="Co-President"
        />
        <LeadershipMember
          imgUrl="/zephy-roe.png"
          memberEmail="zroe@uchicago.edu"
          memberName="Zephy Roe"
          memberRole="Board Member"
        />
      </div>
    </div>
  );
}
