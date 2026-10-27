import {test} from '@playwright/test'

test('iFrame', async({page})=>{
  await page.goto("https://vinothqaacademy.com/iframe/");

  const frames = page.frameLocator('//iframe[@name="employeetable"]')
  
  await frames.locator('//input[@id="nameInput"]').fill("Playwright");
  await frames.locator('//input[@id="roleInput"]').fill("Testing");
  await frames.locator('//input[@id="emailInput"]').fill("example@gmail.com")
  await frames.locator('//input[@id="locationInput"]').fill("Chennai");
})

test('popup', async({page})=>{
  await page.goto("https://vinothqaacademy.com/iframe/");

  // alerts
  page.on('dialog', async alerts => {
    await page.waitForTimeout(3000);
    await alerts.accept();
  })

  // frame locator
  await page.frameLocator('//iframe[@name="popuppage"]')
            .locator('//button[@name="alertbox"]')
            .click();
  await page.waitForTimeout(3000);
})


test('frame', async({page})=>{
  await page.goto('https://practice-automation.com/iframes/');
  await page.waitForTimeout(3000);
  await page.frameLocator('//iframe[@id="iframe-1"]')
            .locator('//a[@class="getStarted_Sjon"]')
            .click();
  await page.waitForTimeout(3000);
})