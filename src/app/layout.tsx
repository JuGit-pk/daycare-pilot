import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/layout/footer";

const font = Nunito({ subsets: ["latin"] });

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
      <body className={`${font.className} `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
