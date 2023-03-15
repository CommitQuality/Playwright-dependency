import { expect, Browser, Page, chromium } from "@playwright/test";

async function globalSetup() {
  const browser: Browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto("https://commitquality.com/login");
  await page.locator('[data-testid="username-textbox"]').fill("test");
  await page.locator('[data-testid="password-textbox"]').fill("test");
  await page.locator('[data-testid="login-button"]').click();

  await expect(page.locator('[data-testid="navbar-logout"]')).toBeVisible();
  // Save the state of the webpage - meaning we are logged in
  await page.context().storageState({ path: "./LoginAuthCQ.json" });
  // Dont forget your clean up :)
  await browser.close();
}

export default globalSetup;
