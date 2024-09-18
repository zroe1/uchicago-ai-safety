import "./globals.css";
import Header from "@/header/page";
import { inriaSerif } from "@/app/ui/fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inriaSerif.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
