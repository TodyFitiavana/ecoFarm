import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "ECOFARM - Création de compte",
  description: "Se connecter à ECOFARM",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex justify-center items-center overflow-y-auto bg-[url('/signup-bg.webp')] w-full min-h-screen overflow-x-hidden bg-center bg-no-repeat bg-cover">
        {children}
        <Toaster />
      </div>
    </main>
  );
}
