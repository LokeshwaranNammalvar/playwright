import {test} from '@playwright/test'

test('web table', async({page})=> {
  await page.goto("https://demoqa.com/webtables");
  const table = page.locator('table.table-striped tbody tr td:nth-child(4)');

  // all Inner Text
  const lastName = await table.allInnerTexts();
  console.log(lastName);

  // inner text
  const tab = await page.locator('table.table-striped tbody tr td:nth-child(1)');
  const name = await tab.last().innerText();
  console.log(name);

  //text content
  const texts = await page.locator('table.table-striped tbody tr td:nth-child(1)');
  const text = await texts.first().textContent();
  console.log(text);

  // all text content
  const tables = await page.locator('table.table-striped tbody');
  const allText =await tables.allTextContents();
  console.log(allText);

  const counts = await page.locator('table.table-striped tbody tr');
  const totalCount = await counts.count();
  console.log(totalCount);

  // to print all the data present in the table
  for(let j=0; j<totalCount; j++)
  {
    const row = counts.nth(j);
    const rowText = await row.innerText();
    console.log(rowText);
  }
  for(let i=0; i<totalCount; i++)
  {
    const row = counts.nth(i);
    const rowText = await row.allInnerTexts();
    console.log(rowText);
  }
  for(let i=0; i<totalCount; i++)
  {
    const row = counts.nth(i);
    const rowText = await row.allTextContents();
    console.log(rowText);
  }
  for(let i=0; i<totalCount; i++)
  {
    const row = counts.nth(i);
    const rowText = await row.textContent();
    console.log(rowText);
  }
})