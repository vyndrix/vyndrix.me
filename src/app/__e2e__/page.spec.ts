import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test("matches visual snapshot after entry animation completes", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator("main > div")).toHaveCSS("opacity", "1", {
      timeout: 1000,
    });
    await expect(page.locator("main")).toHaveScreenshot("page.png");
  });
});
