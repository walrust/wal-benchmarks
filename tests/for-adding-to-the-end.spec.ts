import { Browser, Page, test } from '@playwright/test';
import { getExecutionTimeInMicroSecondsNClicks } from './extract-from-trace';
import { promises as fsPromises } from 'fs';

test.describe('For adding to the end', () => {
  test(`angular`, async ({ page, browser }) => {
    await testLogic(page, browser, 'angular', 'http://localhost:3000');
  });

  test(`blazor`, async ({ page, browser }) => {
    await testLogic(page, browser, 'blazor', 'http://localhost:5206');
  });

  test(`react`, async ({ page, browser }) => {
    await testLogic(page, browser, 'react', 'http://localhost:3000');
  });

  test(`vue`, async ({ page, browser }) => {
    await testLogic(page, browser, 'vue', 'http://localhost:3000');
  });

  test(`wal`, async ({ page, browser }) => {
    await testLogic(page, browser, 'wal', 'http://127.0.0.1:3000');
  });

  test(`yew`, async ({ page, browser }) => {
    await testLogic(page, browser, 'yew', 'http://127.0.0.1:3000');
  });

  async function testLogic(page: Page, browser: Browser, tool: string, url: string) {
    const basePath = `./results/for-adding-to-the-end/${tool}`;
    const tracePath = `${basePath}.json`;
    const resultPath = `${basePath}.txt`;
    let results: number[] = [];

    while (results.length != 1000) {
      await page.goto(url);

      for (let i = 1; i < 100; i++) {
        await page.locator('button#button').click();
      }

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