import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Providers } from "./providers";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark flex flex-col h-dvh">
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
