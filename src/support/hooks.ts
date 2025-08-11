import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import randomstring from "randomstring";

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;
setDefaultTimeout(120 * 1000 * 6);

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized", "--no-sandbox"],
  });
  context = await browser.newContext({
    viewport: { width: 1000, height: 800 },
  });
  page = await context.newPage();
});
After(async ({ error, result, pickle }) => {
  if (error || result.status === "FAILED") {
    console.log(error);
    await page.screenshot({
      path: `report-results/screenshots/${
        pickle.name
      }_${randomstring.generate()}.png`,
    });
  }
});

AfterAll(async function () {
  await browser.close();
});
