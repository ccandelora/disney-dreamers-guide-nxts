import React, { ReactNode } from "react";
import "./globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

export const metadata = {
  title: "Disney Dreamer's Guide",
  description: "Get all the info you need to plan you next Disney World trip!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-J1ZE0F4796"
      />
      <Script id="ga">
        {`
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-J1ZE0F4796');
        `}
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2603238801904684"
        crossOrigin="anonymous"
      />

      <body className={inter.className}>
        <div className="bg-page-pattern">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Script
          type="text/javascript"
          src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"
        ></Script>
      </body>
    </html>
  );
};
