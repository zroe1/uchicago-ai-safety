import styles from "./HomeDescription.module.css";

export default function HomeDescription() {
  return (
    <div className={styles.homeDescriptionContainer}>
      <h2 className={styles.descriptionSubTitle}>AI Alignment at UChicago</h2>
      <div className={styles.homePageDivider}></div>
      <p className={styles.homePageDescriptionText}>
        Welcome to the UChicago AI Safety, a group of undergraduate students dedicated to addressing
        AI alignment - the crucial challenge of ensuring artificial intelligence behaves in ways
        that benefit humanity and align with our values.
      </p>
      <p className={styles.homePageDescriptionText}>
        As AI becomes more powerful, the importance of alignment grows. Misaligned AI could pose
        significant risks, from unintended consequences to potentially existential risks. Our club
        aims to contribute to this vital field by:
      </p>
      <ol className={styles.homePageDescriptionList}>
        <li>Connecting motivated students to build a strong, supportive community</li>
        <li>Encouraging critical thinking and independent thought</li>
        <li>Exposing members to diverse perspectives in AI safety research</li>
      </ol>
      <p className={styles.homePageDescriptionText}>
        By fostering the next generation of AI researchers and ethicists, we strive to make a
        lasting impact on the future of AI alignment, working towards a future where advanced AI
        systems benefit all of humanity.
      </p>
    </div>
  );
}
