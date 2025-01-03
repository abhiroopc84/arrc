import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/mode-toggle";
import "@fontsource/open-sauce-one";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Abhiroop Reddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontFamily: "Open Sauce One" }}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            vaul-drawer-wrapper=""
            className="relative min-h-dvh h-full xl:h-dvh flex flex-col"
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
