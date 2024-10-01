import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agno",
  description: "Reseautez facilement avec une carte de visite numerique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Provider> {children}</Provider>        
        </body>
    </html>
  );
}
