import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Medical app",
  description: "A complete full stack medical application",
  authors:{
  name:"Ronit adhikari",
  url:"www.github.com/ronitey35"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className=" max-w-screen-xl mx-auto ">
      <body className={inter.className}>{children}</body>
      </div>
    </html>
  );
}
