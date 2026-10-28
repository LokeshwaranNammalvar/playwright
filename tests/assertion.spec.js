import {test, expect} from '@playwright/test'

test('assertion', async({page})=>{
  await page.goto("https://demoqa.com/webtables");
  await expect(page.locator("//h1[text()='Web Tables']")).toBeVisible();
  await page.locator('[id="addNewRecordButton"]').click();
  await expect(page.locator('[id="addNewRecordButton"]')).toBeEnabled();
  await expect(page.locator("//h1[text()='Web Tables']")).toHaveText('Web Tables');
  await expect(page.locator("//h1[text()='Web Tables']")).toContainText('T');
  await page.locator('[id="searchBox"]').fill("playwright");
  await expect(page.locator('[id="searchBox"]')).toHaveValue('playwright');
  await expect.soft(page.locator('//button[@id="addNewRecordButton"]')).toHaveAttribute('//button[@id="addNewRecordButton"]');
  await expect.soft(page.locator('//button[@class="btn btn-primary"]')).toHaveCount(3);
  await expect(page).toHaveTitle('demosite');
  await expect(page).toHaveURL('https://demoqa.com/webtables');
})