# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertion.spec.js >> assertion
- Location: tests\assertion.spec.js:3:5

# Error details

```
Error: expect(locator).toHaveAttribute() failed

Locator:  locator('//button[@id="addNewRecordButton"]')
Expected: have attribute
Received: attribute not present
Timeout:  5000ms

Call log:
  - Expect "soft toHaveAttribute" locator('//button[@id="addNewRecordButton"]') with timeout 5000ms
  - waiting for locator('//button[@id="addNewRecordButton"]')
    14 × locator resolved to <button type="button" id="addNewRecordButton" class="btn btn-primary">Add</button>
       - unexpected value "attribute not present"

```

```yaml
- button "Add"
```

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('//button[@class="btn btn-primary"]')
Expected: 3
Received: 2
Timeout:  5000ms

Call log:
  - Expect "soft toHaveCount" locator('//button[@class="btn btn-primary"]') with timeout 5000ms
  - waiting for locator('//button[@class="btn btn-primary"]')
    14 × locator resolved to 2 elements
       - unexpected value "2"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('assertion', async({page})=>{
  4  |   await page.goto("https://demoqa.com/webtables");
  5  |   await expect(page.locator("//h1[text()='Web Tables']")).toBeVisible();
  6  |   await page.locator('[id="addNewRecordButton"]').click();
  7  |   await expect(page.locator('[id="addNewRecordButton"]')).toBeEnabled();
  8  |   await expect(page.locator("//h1[text()='Web Tables']")).toHaveText('Web Tables');
  9  |   await expect(page.locator("//h1[text()='Web Tables']")).toContainText('T');
  10 |   await page.locator('[id="searchBox"]').fill("playwright");
  11 |   await expect(page.locator('[id="searchBox"]')).toHaveValue('playwright');
  12 |   await expect.soft(page.locator('//button[@id="addNewRecordButton"]')).toHaveAttribute('//button[@id="addNewRecordButton"]');
> 13 |   await expect.soft(page.locator('//button[@class="btn btn-primary"]')).toHaveCount(3);
     |                                                                         ^ Error: expect(locator).toHaveCount(expected) failed
  14 |   await expect(page).toHaveTitle('demosite');
  15 |   await expect(page).toHaveURL('https://demoqa.com/webtables');
  16 | })
```