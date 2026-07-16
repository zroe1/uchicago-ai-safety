"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About Us", href: "/about-us" },
  { label: "Research", href: "/research" },
  {
    label: "Fellowships",
    href: "/fellowships",
    children: [
      { label: "AI Safety Fundamentals", href: "/ai-safety-fundamentals" },
      { label: "Strategy & Forecasting", href: "/strategy-group" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Leadership", href: "/leadership" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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

  const isActive = (item) =>
    pathname === item.href ||
    (item.children && item.children.some((child) => pathname === child.href));

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/x-tech_2CBM.png"
            alt="UChicago AI Safety logo"
            width={80}
            height={80}
            className={`${styles.logo} dark-invert-hue`}
          />
          <span className={styles.logoText}>
            <span>UChicago</span>
            <span>AI Safety</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`${styles.navItem} ${item.children ? styles.dropdownParent : ""}`}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive(item) ? styles.navLinkActive : ""}`}>
                  {item.label}
                  {item.children && <span className={styles.caret}>▾</span>}
                </Link>
                {item.children && (
                  <ul className={styles.dropdown}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link href={child.href} className={styles.dropdownLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className={styles.navItem}>
              <Link href="/get-involved" className={styles.ctaLink}>
                Get Involved <span aria-hidden="true">→</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <button
          className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.open : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.mobileNavLink}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className={styles.mobileSubList}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link href={child.href} className={styles.mobileSubLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link href="/get-involved" className={styles.mobileCtaLink}>
                Get Involved <span aria-hidden="true">→</span>
              </Link>
            </li>
            <li className={styles.mobileToggleRow}>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
