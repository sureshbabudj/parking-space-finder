import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "ParkingSpaceFinder",
  description: "park with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={""} />
      </head>
      <body>{children}</body>
    </html>
  );
}
