import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/logo.png"
          alt="AI Safety Student Team Logo"
          width={468 * 0.55}
          height={288 * 0.55}
          className={styles.logo}
        />
        <nav aria-label="Main navigation">
          <ul className={styles.navList}>
            {["About", "Research", "Get Involved", "Resources"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className={styles.navLink}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
