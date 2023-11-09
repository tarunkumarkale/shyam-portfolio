import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import { ColorProvider } from "@/context/colors/colorContext";
import PhoneNav from "@/components/main/PhoneNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shyam Portfolio",
  description: "This is a portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <ColorProvider>
          <StarsCanvas />
          <Navbar />
          <PhoneNav /> {children}{" "}
        </ColorProvider>
      </body>
    </html>
  );
}
