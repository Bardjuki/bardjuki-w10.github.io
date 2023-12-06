import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/context/Provider";

export const metadata: Metadata = {
  title: "My APP",
  description: "Creating next JS project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
