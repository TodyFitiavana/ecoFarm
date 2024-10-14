import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import "cal-sans";
import { Providers } from "@/lib/redux/provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display:"swap"
});

export const metadata: Metadata = {
  title: "ECOFARM",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" className={montserrat.className}>
        <body>
          <main>{children}</main>
        </body>
      </html>
    </Providers>
  );
}
