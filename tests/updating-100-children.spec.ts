import { Browser, Page, test } from '@playwright/test';
import { getExecutionTimeInMicroSecondsNClicks } from './extract-from-trace';
import { promises as fsPromises } from 'fs';

test.describe('Updating 100 children', () => {
  test(`angular`, async ({ page, browser }) => {
    await testLogic(page, browser, 'angular', 'http://localhost:4200');
  });

  test(`blazor`, async ({ page, browser }) => {
    await testLogic(page, browser, 'blazor', 'http://localhost:5206');
  });

  test(`react`, async ({ page, browser }) => {
    await testLogic(page, browser, 'react', 'http://localhost:3000');
  });

  test(`vue`, async ({ page, browser }) => {
    await testLogic(page, browser, 'vue', 'http://192.168.56.1:3000');
  });

  test(`wal`, async ({ page, browser }) => {
    await testLogic(page, browser, 'wal', 'http://127.0.0.1:3000');
  });

  test(`yew`, async ({ page, browser }) => {
    await testLogic(page, browser, 'yew', 'http://127.0.0.1:3000');
  });

  async function testLogic(page: Page, browser: Browser, tool: string, url: string) {
    const basePath = `./results/updating-100-children/${tool}-${browser.browserType().name()}-${browser.version()}`;
    const tracePath = `${basePath}.json`;
    const resultPath = `${basePath}.txt`;
    let results: number[] = [];

    while (results.length != 1000) {
      await page.goto(url);

      await browser.startTracing(page, { path: tracePath });

      await page.locator('button#button').click();

      await browser.stopTracing();

      try {
        let time = await getExecutionTimeInMicroSecondsNClicks(tracePath, 1);
        results.push(time);
      } catch (_) {}
    }

    await fsPromises.unlink(tracePath);

    await fsPromises.writeFile(resultPath, results.join('\n'));
  }
});