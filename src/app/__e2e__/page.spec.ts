import { type Locale, localeSlug, seedLocale } from "@/tests/e2e";
import { expect, test, type Page } from "@playwright/test";

const snapshotPage = async (page: Page, locale: Locale) => {
  if (locale === "pt-BR") await seedLocale(page, locale);
  await page.goto("/");
  await expect(page.locator("main > div")).toHaveCSS("opacity", "1", {
    timeout: 1000,
  });
  await expect(page.locator("main")).toHaveScreenshot(
    `page-${localeSlug(locale)}.png`,
  );
};

test.describe("Home page", () => {
  test("matches visual snapshot in en-US", async ({ page }) => {
    await snapshotPage(page, "en-US");
  });

  test("matches visual snapshot in pt-BR", async ({ page }) => {
    await snapshotPage(page, "pt-BR");
  });
});
