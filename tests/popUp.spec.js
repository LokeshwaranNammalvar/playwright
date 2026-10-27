import {test} from '@playwright/test'

test('JS alert', async({page}) => {
  await page.goto("https://demoqa.com/alerts");

  page.on('dialog', async dialog => {
    await page.waitForTimeout(2000);
    await dialog.accept();

    const message = await dialog.message();
    console.log(message);

    const type = await dialog.type();
    console.log(type);
  })
  await page.locator('//button[@id="alertButton"]').click();
})

test('conform alert', async({page}) => {
  await page.goto("https://demoqa.com/alerts");

  page.on('dialog', async laptop => {
    await page.waitForTimeout(2000);
    await laptop.dismiss();

    const msg = await laptop.message();
    console.log(msg);

    const types = await laptop.type();
    console.log(types);
  })
  await page.locator('//button[@id="confirmButton"]').click();
    await page.waitForTimeout(3000);
})

test('prompt alert', async({page})=> {
  await page.goto("https://demoqa.com/alerts");

  page.on('dialog', async prompts => {
    await page.waitForTimeout(2000);
    await prompts.accept("Hi brooo");

    const messages = await prompts.message();
    console.log(messages);

    const typess = await prompts.type();
    console.log(typess);
  })
e
  await page.locator('//button[@id="promtButton"]').click();
  await page.waitForTimeout(3000);
})

test('general popup', async({page})=>{
  await page.goto("https://www.flipkart.com/");
  await page.waitForTimeout(3000);

  try
  {
    await page.locator('//span[@class="b3wTlE"]').click();
  }
  catch
  {
    console.log("Popup is not displayed");
  }
  
  await page.waitForTimeout(3000);
})