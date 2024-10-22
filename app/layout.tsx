import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import "cal-sans";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/lib/redux/provider";

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["500"],
  // display: "swap",
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
      <html lang="en" className={inter.className}>
        <body>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
