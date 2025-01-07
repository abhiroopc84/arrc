import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/mode-toggle";
import "@fontsource/open-sauce-one";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhiroop Reddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            vaul-drawer-wrapper=""
            className="relative min-h-dvh h-full xl:h-dvh flex flex-col font-[family-name:var(--font-geist-sans)]"
          >
            {children}
            <Analytics />
            <SpeedInsights />
            <div className="absolute bottom-8 right-8 hidden md:flex">
              <ModeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
