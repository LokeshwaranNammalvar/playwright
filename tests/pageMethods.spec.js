import {test} from '@playwright/test'

test('page method', async ({page})=>{
  await page.goto("https://www.amazon.in/");
  await page.waitForTimeout(3000);
  await page.goto("https://www.makemytrip.com/");
  await page.waitForTimeout(3000);
  await page.screenshot({
    path : 'flipkart.png'
  })
  // await page.waitForTimeout(2000);
  await page.goto("https://www.redbus.in/");
  // await page.waitForTimeout(2000);
  // await page.goBack();
  // await page.goBack();
  // await page.waitForTimeout(2000);
  // await page.goForward();
  // await page.goForward();
  // await page.waitForTimeout(2000);
  // await page.reload();
  // await page.waitForTimeout(2000);
  const URL = await page.url();
  console.log(URL);
  const title = await page.title();
  console.log(title);
  await page.screenshot({
    path : 'screenshot.png'
  });
})