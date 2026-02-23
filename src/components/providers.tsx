"use client";

import { i18n } from "@/i18n";
import { I18nProvider } from "@lingui/react";
import { ThemeProvider } from "next-themes";
import { AnimatedLoadingGate } from "./animated-loading-gate";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      storageKey="theme"
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <AnimatedLoadingGate>
        <I18nProvider i18n={i18n}>{children}</I18nProvider>
      </AnimatedLoadingGate>
    </ThemeProvider>
  );
}
