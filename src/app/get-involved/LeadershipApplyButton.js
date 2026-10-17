"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function LeadershipApplyButton() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <button className={styles.actionButton} onClick={() => setShowMessage(!showMessage)}>
        Apply for Leadership
      </button>
      {showMessage && (
        <p className={styles.applyMessage}>
          Applications for leadership are currently closed. Please reach out to us directly if you
          want to get involved!
        </p>
      )}
    </>
  );
}
