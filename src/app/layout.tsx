import { Header } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-800 text-gray-50 relative px-4 md:px-6  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
