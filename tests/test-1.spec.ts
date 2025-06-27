import { test, expect } from '@playwright/test';

test('check title text', async ({ page }) => {

  await page.goto('https://playwright.dev/docs/test-assertions');
  const targetText = page.getByRole('heading', { name: 'Non-retrying assertions' });
  await targetText.scrollIntoViewIfNeeded();
  const expectedText = 'Non-retrying assertions';
  await expect(targetText).toHaveText(expectedText);
});