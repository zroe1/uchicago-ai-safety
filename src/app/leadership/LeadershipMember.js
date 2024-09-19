import Image from "next/image";
import styles from "./LeadershipMember.module.css";

export default function LeadershipMember({ imgUrl, memberName, memberRole, memberEmail }) {
  return (
    <div className={styles.leaderContainer}>
      <Image
        src={imgUrl}
        alt={`${memberName} profile`}
        width={300}
        height={300}
        className={styles.profileImg}
      />
      <h2>{memberName}</h2>
      <p className={styles.memberRole}>{memberRole}</p>
      <p className={styles.noMarginParagraph}>{memberEmail}</p>
    </div>
  );
}
