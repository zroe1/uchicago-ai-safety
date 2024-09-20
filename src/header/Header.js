"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200); // 150ms delay
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/">
          <Image
            src="/logo.png"
            alt="AI Safety Student Team Logo"
            width={468 * 0.5}
            height={288 * 0.5}
            className={styles.logo}
          />
        </a>
        {isMobile ? (
          <div className={styles.mobileMenuContainer}>
            <button
              className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.open : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            {isMenuOpen && (
              <nav className={styles.mobileNav} aria-label="Mobile navigation">
                <ul className={styles.mobileNavList}>
                  {["About", "Leadership", "Get Involved", "Fellowship"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className={styles.mobileNavLink}
                        onClick={closeMenu}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        ) : (
          <nav aria-label="Main navigation">
            <ul className={styles.navList}>
              {["About", "Leadership", "Get Involved", "Fellowship"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={styles.navLink}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
