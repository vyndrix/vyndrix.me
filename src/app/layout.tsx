"use client";

// import type { Metadata } from "next";
import "@/app/globals.css";
import { AnimatedLoadingGate } from "@/components/animated-loading-gate";
import { Header } from "@/components/header";
import { useInitializeI18n } from "@/i18n/use-initialize-i18n";
import { I18nProvider } from "@lingui/react";
import { ThemeProvider } from "next-themes";
import { Inter, Inter_Tight } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-sans",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  const { loading, i18n } = useInitializeI18n();

  return (
    <html
      data-ready={!loading}
      suppressHydrationWarning
      className={`data-ready:transition-colors 
          data-ready:duration-750 
          data-ready:ease-in-out 
          motion-reduce:duration-0`}
    >
      <body
        data-ready={!loading}
        className={`${inter.variable} 
          ${interTight.variable} 
          data-ready:transition-colors 
          data-ready:duration-750 
          data-ready:ease-in-out 
          motion-reduce:duration-0 
          antialiased`}
      >
        <ThemeProvider
          storageKey="theme"
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <AnimatedLoadingGate loading={loading}>
            <I18nProvider i18n={i18n}>
              <Header />
              {children}
            </I18nProvider>
          </AnimatedLoadingGate>
        </ThemeProvider>
      </body>
    </html>
  );
}
