import { test } from '@playwright/test';

test.describe('Sending props 100 components down', () => {
  for (let i = 0; i < 100; i++) {
    test(`Sending props 100 components down #${i}`, async ({ page, browser }) => {
      const tracePath = `./results/wal/sending-props-100-components-down/trace-${i}.json`;
      await browser.startTracing(page, { path: tracePath });
      await page.goto('http://127.0.0.1:3000');

      await page.locator('button#button').click();

      await browser.stopTracing();
    });
  }
});

test.describe('Sending props 100 times 100 components down', () => {
  for (let i = 0; i < 100; i++) {
    test(`Sending props 100 times 100 components down #${i}`, async ({ page, browser }) => {
      const tracePath = `./results/wal/sending-props-100-times-100-components-down/trace-${i}.json`;
      await browser.startTracing(page, { path: tracePath });
      await page.goto('http://127.0.0.1:3000');

      for (let j = 0; j < 100; j++) {
        await page.locator('button#button').click();
      }

      await browser.stopTracing();
    });
  }
});