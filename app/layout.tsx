import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const Poppins = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Art Gallery",
  description: "Discover and explore beautiful artwork from talented artists",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
