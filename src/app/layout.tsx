import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import ContactNav from "@/components/ContactNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Majestic Punch",
  description: "unlocking innovation through digital evolution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <ContactNav />
          <Navbar />
          <MobileNav />
        </header>
        {children}
        <Footer />

      </body>
    </html>
  );
}
