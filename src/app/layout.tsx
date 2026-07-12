import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Smile Dental Care | Family Dentist in Dearborn, MI",
    template: "%s | Smile Dental Care",
  },
  description:
    "Family dentistry in Dearborn, MI. Gentle, professional care from Dr. Bassam Ali and team. Call (313) 438-5158 to book your visit.",
  openGraph: {
    title: "Smile Dental Care | Family Dentist in Dearborn, MI",
    description:
      "Your family deserves a healthier, brighter smile. Kind staff, clear care, and a welcoming dental home on Dix Avenue.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
