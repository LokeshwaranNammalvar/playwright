import {test} from '@playwright/test'

test('locator', async({page})=>{
  await page.goto("https://demoqa.com/text-box");
  await page.locator('#userName').fill('playwright');
  await page.locator('#userEmail').fill('playwright@gmail.com');
  await page.locator('#currentAddress').fill('Chennai');
  await page.locator('#permanentAddress').fill('porur');
  await page.locator('.btn.btn-primary').click();
  await page.waitForTimeout(3000);
})

test('xpath', async({page}) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 16');
  await page.locator('//input[@id="nav-search-submit-button"]').click();
  await page.locator("//span[text()='iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; White']").click();
  await page.waitForTimeout(3000);
  await page.locator('//a[text()="Men\'s Casual Wear"]/parent::li/following-sibling::li//a[text()="Jeans Under ₹599"]')
})

test('browser fixtures', async ({browser}) => {
  const context = await browser.newContext({
    recordVideo : {
      dir : 'video/'
    }
  });

  const myntra = await context.newPage();
  await myntra.goto("https://www.myntra.com/");
  await myntra.waitForTimeout(3000);

  const page2 = await context.newPage();
  await page2.goto("https://www.amazon.in/");
  await page2.waitForTimeout(2000);
  await page2.screenshot({path : 'amazon.png'});

  const page3 = await context.newPage();
  await page3.goto("https://www.agaram.in/");

  const context2 = await browser.newContext();

  const page4 = await context2.newPage();
  await page4.goto("https://demoqa.com/webtables");
})