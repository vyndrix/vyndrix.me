import { expect, test } from "@playwright/test";

test.describe("SkillsSection", () => {
  test("matches visual snapshot after entry animation completes", async ({
    page,
  }) => {
    await page.goto("/");
    const section = page.getByTestId("skills-section");
    await section.waitFor();
    // Wait for screen entry animation (375ms in Screen wrapper) before snapshot
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot("skills-section.png");
  });
});
