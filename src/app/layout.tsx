import "~/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Menu from "~/components/basic/menu";
import DotPattern from "~/components/ui/dot-pattern";
import { cn } from "~/lib/utils";
import Footer from "~/components/basic/footer";

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
          cx={0.5}
          cy={0.5}
          cr={0.5}
          className={cn(
            "mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]",
          )}
        />
        <main className="min-w-screen min-h-screen text-sm text-white">
          <Menu />
          <div className="mx-auto max-w-(--breakpoint-lg) px-4 py-10 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
