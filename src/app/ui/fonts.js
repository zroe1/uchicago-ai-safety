import { EB_Garamond, Public_Sans } from "next/font/google";

// Primary display serif — used for headings and editorial titles.
export const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Secondary sans — used for body copy, navigation, and UI text.
// Loaded as a variable font so the theme can tune body weight (see --text-weight).
export const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
