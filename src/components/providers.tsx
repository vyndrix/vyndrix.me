"use client";

import { useInitializeI18n } from "@/i18n/use-initialize-i18n";
import { I18nProvider } from "@lingui/react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { AnimatedLoadingGate } from "./animated-loading-gate";

export function Providers({ children }: { children: React.ReactNode }) {
  const { loading, i18n } = useInitializeI18n();

  useEffect(() => {
    if (loading) {
      document.documentElement.dataset.ready = "true";
      document.body.dataset.ready = "true";
    }
  }, [loading]);

  return (
    <ThemeProvider
      storageKey="theme"
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <AnimatedLoadingGate loading={loading}>
        <I18nProvider i18n={i18n}>{children}</I18nProvider>
      </AnimatedLoadingGate>
    </ThemeProvider>
  );
}
