import React from "react"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pixelifySans = localFont({
  src: "./fonts/PixelifySans.ttf",
  variable: "--font-pixelify-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ari's Library",
  description: "Ari's Library houses a collection of books all create by users.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${pixelifySans.variable} antialiased relative min-h-screen`}
          style={{
            backgroundImage: "url('/background.jpg')", // Replace with your background image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
      >
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional overlay for better contrast */}
      <div className="relative z-10 font-pixelify">{children}</div>
      </body>
      </html>
  );
}