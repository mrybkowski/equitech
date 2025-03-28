import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          background: "conic-gradient(from 180deg, #D4E2E8, #1B3540);",
          backgroundRepeat: "no-repeat",
        }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
