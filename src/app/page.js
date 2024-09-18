import styles from "./page.module.css";
import Image from "next/image";
import CallToActionLinks from "@/app/CallToActionLinks/CallToActionLinks";
import HomeDescription from "./HomeDescription/HomeDescription";

export default function Home() {
  return (
    <>
      <div className={styles.titleContainer}>
        <div>
          <h1 className={styles.titleTop}>UChicago&#39;s student-led initiative to</h1>
          <h1 className={styles.titleBottom}>shape the future of AI safety.</h1>
          <div className={styles.xLabContainer}>
            <h2 className={styles.xRiskTitle}>
              Sponsored by the University of Chicago&#39;s x-risk lab
            </h2>
            <Image
              src="/x-lab-logo.png"
              alt="AI Safety Student Team Logo"
              width={853 * 0.36}
              height={293 * 0.36}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
      <CallToActionLinks />
      <HomeDescription />
    </>
  );
}
