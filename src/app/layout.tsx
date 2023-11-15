import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../styles/globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DayCare - Pilot",
  description: "Supporting Daycare Providers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
