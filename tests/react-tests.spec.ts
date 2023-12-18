import { test } from '@playwright/test';

test.describe('Sending props 100 components down', () => {
  for (let i = 0; i < 100; i++) {
    test(`Sending props 100 components down #${i}`, async ({ page, browser }) => {
      const tracePath = `./results/react/sending-props-100-components-down/trace-${i}.json`;
      await browser.startTracing(page, { path: tracePath });
      await page.goto('http://192.168.56.1:3000/');

      await page.locator('button#button').click();

      await browser.stopTracing();
    });
  }
});