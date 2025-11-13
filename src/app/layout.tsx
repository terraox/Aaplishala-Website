import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AapliShala",
  description: "Smart School Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased scroll-smooth">
        {children}
      </body>
    </html>
  );
}
