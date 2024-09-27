import type { Metadata } from "next";

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
      <div className="bg-[url('/signup-bg.webp')] w-screen h-screen overflow-hidden bg-center bg-no-repeat bg-cover">
        {children}
      </div>
    </main>
  );
}
