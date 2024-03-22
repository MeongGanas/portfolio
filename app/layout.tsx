import type { Metadata } from "next";
import "./globals.css";
import { firacode } from "./ui/fonts";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Farrel Jaohari's portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firacode.className} bg-background text-text`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
