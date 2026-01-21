import type { Metadata } from "next";
import { Rufina, Plus_Jakarta_Sans, Lateef, Alexandria } from "next/font/google";
import "./globals.css";

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const lateef = Lateef({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-arabic-heading",
});

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-arabic-body",
});

export const metadata: Metadata = {
  title: "Dr. Nourah Partnership",
  description: "Partnership proposal presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rufina.variable} ${jakarta.variable} ${lateef.variable} ${alexandria.variable} antialiased font-body bg-off-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
