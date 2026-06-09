import type { Page } from "@playwright/test";

export type Locale = "en-US" | "pt-BR";

export const localeSlug = (locale: Locale): "en-us" | "pt-br" =>
  locale === "en-US" ? "en-us" : "pt-br";

export const seedLocale = async (page: Page, locale: Locale): Promise<void> => {
  await page.addInitScript((l) => {
    localStorage.setItem("locale", JSON.stringify(l));
  }, locale);
};
