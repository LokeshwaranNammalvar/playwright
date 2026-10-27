import {test} from '@playwright/test'

test('window handling', async({browser}) => {
  const amazon = await browser.newContext();
  const page1 = await amazon.newPage();
  await page1.goto("https://www.amazon.in/");
  const newPage = amazon.waitForEvent('page');

  await page1.locator('//input[@id="twotabsearchtextbox"]').type('Iphone 18 pro max');
  await page1.locator('//input[@class="nav-input nav-progressive-attribute" and @type="submit"]')
              .click();
  await page1.locator("//span[text()='iPhone 18 Pro Max (256 GB) - Black']").click();
  const page2 = await newPage;
  await page2.waitForLoadState();
  await page2.locator('//input[@aria-labelledby="configuration_0-announce" and @aria-posinset="2"]')
              .click();
  await page2.locator('//input[@aria-labelledby="size_name_1-announce"]').click();
  await page2.locator('//input[@aria-labelledby="color_name_2-announce" and @aria-posinset="5"]')
              .click();
  await page2.locator('//input[@id="buy-now-button"]').click();
})

test('myntra', async({browser}) => {
  const myntra = await browser.newContext();
  const page1 = await myntra.newPage();
  await page1.goto("https://www.myntra.com/");
  const pagePromise = myntra.waitForEvent('page');

  await page1.locator('//input[@class="desktop-searchBar"]').fill("Dresses");
  await page1.locator('[class="desktop-submit"]').click();
  await page1.locator("(//h3[text()='BAESD'])[1]").click();
})