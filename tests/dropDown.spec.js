import {test} from '@playwright/test'

test('select drop down', async({page})=>{
  await page.goto("https://demoqa.com/select-menu");
  await page.waitForTimeout(3000);
  await page.locator('//select[@id="oldSelectMenu"]').selectOption('5');
  await page.waitForTimeout(3000);
  await page.locator('//select[@id="oldSelectMenu"]').selectOption({name : 'Blue'});
  await page.waitForTimeout(3000);
  await page.locator('//select[@id="oldSelectMenu"]').selectOption({index : 8});
  await page.waitForTimeout(3000);
})

test('general drop down', async({page})=>{
  await page.goto('https://demoqa.com/select-menu');
  await page.waitForTimeout(3000);
  await page.locator('(//div[@class="css-13cymwt-control"])[1]').click();
  await page.getByText('Group 1, option 1').click();
  await page.waitForTimeout(3000);
})