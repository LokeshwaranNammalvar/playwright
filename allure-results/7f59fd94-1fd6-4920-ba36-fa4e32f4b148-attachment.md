# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: popUp.spec.js >> prompt alert
- Location: tests\popUp.spec.js:36:5

# Error details

```
ReferenceError: e is not defined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]: Forms
      - generic [ref=e37]:
        - generic [ref=e38] [cursor=pointer]: Alerts, Frame & Windows
        - list [ref=e50]:
          - listitem [ref=e51] [cursor=pointer]:
            - link "Browser Windows" [ref=e52]:
              - /url: /browser-windows
          - listitem [ref=e55] [cursor=pointer]:
            - link "Alerts" [ref=e56]:
              - /url: /alerts
          - listitem [ref=e59] [cursor=pointer]:
            - link "Frames" [ref=e60]:
              - /url: /frames
          - listitem [ref=e63] [cursor=pointer]:
            - link "Nested Frames" [ref=e64]:
              - /url: /nestedframes
          - listitem [ref=e67] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e68]:
              - /url: /modal-dialogs
      - generic [ref=e71]: Widgets
      - generic [ref=e84]: Interactions
      - generic [ref=e96]: Book Store Application
    - generic [ref=e109]:
      - heading "Alerts" [level=1] [ref=e110]
      - generic [ref=e111]:
        - generic [ref=e112]: Click Button to see alert
        - button "Click me" [ref=e114] [cursor=pointer]
      - generic [ref=e115]:
        - generic [ref=e116]: On button click, alert will appear after 5 seconds
        - button "Click me" [ref=e118] [cursor=pointer]
      - generic [ref=e119]:
        - generic [ref=e120]: On button click, confirm box will appear
        - button "Click me" [ref=e122] [cursor=pointer]
      - generic [ref=e123]:
        - generic [ref=e124]: On button click, prompt box will appear
        - button "Click me" [ref=e126] [cursor=pointer]
  - contentinfo [ref=e133]:
    - generic [ref=e134]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | test('JS alert', async({page}) => {
  4  |   await page.goto("https://demoqa.com/alerts");
  5  | 
  6  |   page.on('dialog', async dialog => {
  7  |     await page.waitForTimeout(2000);
  8  |     await dialog.accept();
  9  | 
  10 |     const message = await dialog.message();
  11 |     console.log(message);
  12 | 
  13 |     const type = await dialog.type();
  14 |     console.log(type);
  15 |   })
  16 |   await page.locator('//button[@id="alertButton"]').click();
  17 | })
  18 | 
  19 | test('conform alert', async({page}) => {
  20 |   await page.goto("https://demoqa.com/alerts");
  21 | 
  22 |   page.on('dialog', async laptop => {
  23 |     await page.waitForTimeout(2000);
  24 |     await laptop.dismiss();
  25 | 
  26 |     const msg = await laptop.message();
  27 |     console.log(msg);
  28 | 
  29 |     const types = await laptop.type();
  30 |     console.log(types);
  31 |   })
  32 |   await page.locator('//button[@id="confirmButton"]').click();
  33 |     await page.waitForTimeout(3000);
  34 | })
  35 | 
  36 | test('prompt alert', async({page})=> {
  37 |   await page.goto("https://demoqa.com/alerts");
  38 | 
  39 |   page.on('dialog', async prompts => {
  40 |     await page.waitForTimeout(2000);
  41 |     await prompts.accept("Hi brooo");
  42 | 
  43 |     const messages = await prompts.message();
  44 |     console.log(messages);
  45 | 
  46 |     const typess = await prompts.type();
  47 |     console.log(typess);
  48 |   })
> 49 | e
     |  ^ ReferenceError: e is not defined
  50 |   await page.locator('//button[@id="promtButton"]').click();
  51 |   await page.waitForTimeout(3000);
  52 | })
  53 | 
  54 | test('general popup', async({page})=>{
  55 |   await page.goto("https://www.flipkart.com/");
  56 |   await page.waitForTimeout(3000);
  57 | 
  58 |   try
  59 |   {
  60 |     await page.locator('//span[@class="b3wTlE"]').click();
  61 |   }
  62 |   catch
  63 |   {
  64 |     console.log("Popup is not displayed");
  65 |   }
  66 |   
  67 |   await page.waitForTimeout(3000);
  68 | })
```