import { EB_Garamond, Roboto } from "next/font/google";

// Primary display serif — used for headings and editorial titles.
export const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Secondary sans — used for body copy, navigation, and UI text.
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});
