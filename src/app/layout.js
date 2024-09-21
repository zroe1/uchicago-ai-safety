import "./globals.css";
import Header from "@/header/Header";
import Footer from "./Footer/Footer";
import { inriaSerif } from "@/app/ui/fonts";

export const metadata = {
  title: "UChicago AI Safety",
  description: "UChicago's student-led initiative studying AI safety, sponsored by the x-risk lab.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    manifest: "/site.webmanifest",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inriaSerif.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
