import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/components/ui/font";

export const metadata: Metadata = {
  title: "Fitness",
  description: "Fitness is The Best Solution For You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white `}>{children}</body>
    </html>
  );
}
