import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./pages/header/page";
import Footer from "./pages/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Generated by Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />  {/* 🔹 Static Header */}
        <main>{children}</main>  {/* 🔹 Page Content */}
        <Footer />  {/* 🔹 Static Footer */}
      </body>
    </html>
  );
}
