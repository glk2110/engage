import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulse | Modern Employee Engagement",
  description: "Next-generation employee engagement platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
