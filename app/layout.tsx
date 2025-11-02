import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "King Bolola - Luxury Casino Card Game",
  description: "Experience premium card gaming with King Bolola",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
