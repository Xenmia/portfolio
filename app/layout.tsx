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
      <body className="**:transition-all **:duration-200 **:ease-in-out bg-primary-light dark:bg-primary-dark">
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
