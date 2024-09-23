import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECOFARM - Login",
  description: "Se connecter à ECOFARM",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
