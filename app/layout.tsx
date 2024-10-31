import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabrizio Mourglia",
  description: "Fabrizio Mourglia portfolio web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        inter.className,
        'bg-bg dark:bg-dark-bg text-text-1 dark:text-dark-text-1 transition-colors scroll-smooth'
      )}>
        <Header />
        {children}
      </body>
    </html>
  );
}
