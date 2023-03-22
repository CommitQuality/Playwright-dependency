import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://commitquality.com/login");
  await page.locator('[data-testid="username-textbox"]').fill("test");
  await page.locator('[data-testid="password-textbox"]').fill("test");
  await page.locator('[data-testid="login-button"]').click();

  await expect(page.locator('[data-testid="navbar-logout"]')).toBeVisible();
  // Save the state of the webpage - meaning we are logged in
  await page.context().storageState({ path: "./LoginAuthCQ.json" });
});
