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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200); // 150ms delay
  };

  // Function to create URL-friendly slugs
  const createSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logoContainer}>
          <Image
            src="/x-tech_2CBM.png"
            alt="AI Safety Student Team Logo"
            width={100}
            height={100}
            className={styles.logo}
          />
          <span className={styles.logoText}>
            <span>UChicago</span>
            <span>AI Safety</span>
          </span>
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
                  {["About Us", "Research", "Fellowships", "Events", "Leadership"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`/${createSlug(item)}`}
                          className={styles.mobileNavLink}
                          onClick={closeMenu}>
                          {item}
                        </Link>
                        {item === "Fellowships" && (
                          <ul className={styles.mobileSubList}>
                            <li>
                              <Link href="/ai-safety-fundamentals" className={styles.mobileSubLink} onClick={closeMenu}>
                                AI Safety Fundamentals
                              </Link>
                            </li>
                            <li>
                              <Link href="/strategy-group" className={styles.mobileSubLink} onClick={closeMenu}>
                                Strategy &amp; Forecasting
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </nav>
            )}
          </div>
        ) : (
          <nav aria-label="Main navigation">
            <ul className={styles.navList}>
              {["About Us", "Research", "Fellowships", "Events", "Leadership"].map(
                (item) => (
                  <li key={item} className={item === "Fellowships" ? styles.dropdownParent : ""}>
                    <Link href={`/${createSlug(item)}`} className={styles.navLink}>
                      {item}{item === "Fellowships" && " ▾"}
                    </Link>
                    {item === "Fellowships" && (
                      <ul className={styles.dropdown}>
                        <li>
                          <Link href="/ai-safety-fundamentals" className={styles.dropdownLink}>
                            AI Safety Fundamentals
                          </Link>
                        </li>
                        <li>
                          <Link href="/strategy-group" className={styles.dropdownLink}>
                            Strategy &amp; Forecasting
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                )
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
