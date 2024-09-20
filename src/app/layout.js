import "./globals.css";
import Header from "@/header/Header";
import Footer from "./Footer/Footer";
import { inriaSerif } from "@/app/ui/fonts";

export const metadata = {
  title: "UChicago AI Safety",
  description: "UChicago's student-led initiative studying AI safety, sponsored by the x-risk lab.",
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
