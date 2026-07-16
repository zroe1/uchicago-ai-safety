import Image from "next/image";
import styles from "./LeadershipMember.module.css";

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function LeadershipMember({ imgUrl, memberName, memberRole, memberEmail, objectPosition = "center top" }) {
  return (
    <div className={styles.leaderContainer}>
      {imgUrl ? (
        <div className={styles.imgCircle}>
          <Image
            src={imgUrl}
            alt={`${memberName} profile`}
            fill
            className={styles.profileImg}
            style={{ objectPosition }}
          />
        </div>
      ) : (
        <div className={styles.initialsPlaceholder}>{getInitials(memberName)}</div>
      )}
      <h3 className={styles.memberName}>{memberName}</h3>
      <p className={styles.memberRole}>{memberRole}</p>
      {memberEmail && <p className={styles.memberEmail}>{memberEmail}</p>}
    </div>
  );
}
