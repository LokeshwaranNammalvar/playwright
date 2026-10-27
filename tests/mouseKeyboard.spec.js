import {test} from '@playwright/test'

test('mouse', async({page})=>{
  await page.goto("https://demoqa.com/buttons");
  await page.getByRole('button', {name : 'Click Me'}).click();
  await page.locator('//button[@id="rightClickBtn"]').click({button : 'right'});
  await page.locator('//button[@id="doubleClickBtn"]').dblclick();
})

test('drag and drop', async({page})=>{
  await page.goto("https://demoqa.com/dragabble");
  await page.locator('[id="draggableExample-tab-axisRestriction"]').click();
  await page.locator('[id="restrictedX"]').dragTo(page.locator('[id="restrictedY"]'));
})

test('keyboard', async({page})=>{
  await page.goto("https://www.amazon.in/");
  await page.locator('[id="twotabsearchtextbox"]').type('Iphone 18 pro max');
  await page.locator('[id="twotabsearchtextbox"]').press('Control+A');
  await page.locator('[id="twotabsearchtextbox"]').press('Backspace');
})