import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./ClientLayout"; 
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "TOYLAND TOY SHOP",
  description: "An E-commerce website created by Shahmeer Ali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

 
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
