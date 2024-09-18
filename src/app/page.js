import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.titleContainer}>
      <div>
        <h1 className={styles.titleTop}>UChicago&#39;s student-led initiative to</h1>
        <h1 className={styles.titleBottom}>shape the future of AI safety.</h1>
      </div>
    </div>
  );
}
