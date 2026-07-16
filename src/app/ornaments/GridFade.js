import styles from "./GridFade.module.css";

// The homepage hero's grid-fade backdrop, reusable: a fine grid with a soft
// maroon glow that dissolves radially from the top of the page.
export default function GridFade() {
  return <div className={styles.grid} aria-hidden="true" />;
}
