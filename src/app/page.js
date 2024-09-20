import styles from "./page.module.css";
import Image from "next/image";
import CallToActionLinks from "@/app/CallToActionLinks/CallToActionLinks";
import HomeDescription from "./HomeDescription/HomeDescription";

export const metadata = {
  title: "UChicago AI Safety",
  description: "UChicago's student-led initiative studying AI safety, sponsored by the x-risk lab.",
  keywords: "AI safety, AI alignment, University of Chicago, x-risk lab, AI research",
};

export default function Home() {
  return (
    <>
      <div className={styles.titleContainer}>
        <div>
          <h1 className={styles.titleTop}>
            UChicago&#39;s student-led initiative to <br className={styles.break}></br>
            <span className={styles.titleBottom}>shape the future of AI safety.</span>
          </h1>
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
