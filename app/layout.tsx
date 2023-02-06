import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-col items-center w-full pb-20">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
