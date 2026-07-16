import "./globals.css";
import Header from "@/header/Header";
import Footer from "./Footer/Footer";
import { serif, roboto } from "@/app/ui/fonts";

export const metadata = {
  title: "UChicago AI Safety",
  description: "UChicago's student-led initiative studying AI safety.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    manifest: "/site.webmanifest",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("uais-theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
