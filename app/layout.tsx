import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La puce à l’oreille — maquette indépendante",
  description: "Une expérience ludique de découverte de balados jeunesse.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
