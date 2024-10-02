import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Menu from "~/components/header/Menu";

export const metadata: Metadata = {
  title: "Francesco Barile",
  description: "My portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="custom-background">
        <main className="min-h-screen min-w-screen text-white text-sm">
          <Menu />
          <div className="max-w-screen-lg mx-auto px-4 py-10 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
