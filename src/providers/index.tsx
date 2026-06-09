"use client";

import { i18n } from "@/i18n";
import { I18nProvider } from "@lingui/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      storageKey="theme"
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <I18nProvider i18n={i18n}>{children}</I18nProvider>
    </ThemeProvider>
  );
}
