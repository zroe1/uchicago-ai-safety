import styles from "./EventsCalendar.module.css";
import { EMBED_URL } from "./calendarConfig";

export default function EventsCalendar() {
  return (
    <div className={styles.embedWrap}>
      <iframe src={EMBED_URL} title="AI Safety Group events calendar" className={styles.embed} loading="lazy" />
    </div>
  );
}
