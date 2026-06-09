import { type Locale, localeSlug, seedLocale } from "@/tests/e2e";
import { expect, test, type Page } from "@playwright/test";

test.describe("HeroSection", () => {
  test("clicking avatar opens dialog with picture", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("hero-trigger").click();
    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("dialog closes on Escape", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("hero-trigger").click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).not.toBeVisible();
  });

  test("reduced-motion: avatar click still opens dialog", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.getByTestId("hero-trigger").click();
    await expect(page.getByRole("dialog")).toBeVisible();
  });

  const snapshotDialogOpen = async (page: Page, locale: Locale) => {
    // Seed deterministic Math.random so useStableRandom in aerostats is stable across runs
    await page.addInitScript(() => {
      let seed = 42;
      Math.random = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      };
    });
    if (locale === "pt-BR") await seedLocale(page, locale);
    await page.clock.install({ time: 0 });
    await page.goto("/");
    await page.clock.runFor(1000); // gate + screen entry
    await page.getByTestId("hero-trigger").click();
    const dialog = page.getByRole("dialog");
    await dialog.waitFor();
    await page.clock.runFor(1500); // aerostats settle (~1350ms full stagger)
    await expect(dialog).toHaveScreenshot(
      `hero-section-dialog-open-${localeSlug(locale)}.png`,
      { maxDiffPixelRatio: 0.05 },
    );
  };

  test("dialog open: matches visual snapshot in en-US", async ({ page }) => {
    await snapshotDialogOpen(page, "en-US");
  });

  test("dialog open: matches visual snapshot in pt-BR", async ({ page }) => {
    await snapshotDialogOpen(page, "pt-BR");
  });
});
