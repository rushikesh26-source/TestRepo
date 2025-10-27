import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./travel.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Wanderlust Travel - Explore the World",
  description: "Discover amazing destinations and create unforgettable memories with Wanderlust Travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased`}
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
