import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Menu from "~/components/header/Menu";
import DotPattern from "~/components/ui/dot-pattern";
import { cn } from "~/lib/utils";

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
        <DotPattern
          width={22}
          height={22}
          cx={.5}
          cy={.5}
          cr={.5}          
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
          )}
        />
        <main className="min-h-screen min-w-screen text-white text-sm ">
          <Menu />
          <div className="max-w-screen-lg mx-auto px-4 py-10 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
