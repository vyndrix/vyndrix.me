import { expect, test } from "@playwright/test";

test.describe("WorkingWaysSection", () => {
  test("matches visual snapshot after entry animation completes", async ({
    page,
  }) => {
    await page.goto("/");
    const section = page.getByTestId("working-ways-section");
    await section.waitFor();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot("working-ways-section.png");
  });
});
