import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxim Portfolio",
  description:
    "Maxim's Portfolio website, contains information about him and his projects examples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scroll-smooth">{children}</body>
    </html>
  );
}
