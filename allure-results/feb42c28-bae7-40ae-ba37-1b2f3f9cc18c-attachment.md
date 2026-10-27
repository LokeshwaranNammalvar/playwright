# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mouseKeyboard.spec.js >> mouse
- Location: tests\mouseKeyboard.spec.js:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Click Me' }) resolved to 3 elements:
    1) <button type="button" id="doubleClickBtn" class="btn btn-primary">Double Click Me</button> aka getByRole('button', { name: 'Double Click Me' })
    2) <button type="button" id="rightClickBtn" class="btn btn-primary">Right Click Me</button> aka getByRole('button', { name: 'Right Click Me' })
    3) <button id="QIfz9" type="button" class="btn btn-primary">Click Me</button> aka getByRole('button', { name: 'Click Me', exact: true })

Call log:
  - waiting for getByRole('button', { name: 'Click Me' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13] [cursor=pointer]: Elements
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
      - generic [ref=e62]: Forms
      - generic [ref=e75]: Alerts, Frame & Windows
      - generic [ref=e87]: Widgets
      - generic [ref=e100]: Interactions
      - generic [ref=e112]: Book Store Application
    - generic [ref=e125]:
      - heading "Buttons" [level=1] [ref=e126]
      - button "Double Click Me" [ref=e128] [cursor=pointer]
      - button "Right Click Me" [ref=e130] [cursor=pointer]
      - button "Click Me" [ref=e132] [cursor=pointer]
  - contentinfo [ref=e139]:
    - generic [ref=e140]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | test('mouse', async({page})=>{
  4  |   await page.goto("https://demoqa.com/buttons");
> 5  |   await page.getByRole('button', {name : 'Click Me'}).click();
     |                                                       ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Click Me' }) resolved to 3 elements:
  6  |   await page.locator('//button[@id="rightClickBtn"]').click({button : 'right'});
  7  |   await page.locator('//button[@id="doubleClickBtn"]').dblclick();
  8  | })
  9  | 
  10 | test('drag and drop', async({page})=>{
  11 |   await page.goto("https://demoqa.com/dragabble");
  12 |   await page.locator('[id="draggableExample-tab-axisRestriction"]').click();
  13 |   await page.locator('[id="restrictedX"]').dragTo(page.locator('[id="restrictedY"]'));
  14 | })
  15 | 
  16 | test('keyboard', async({page})=>{
  17 |   await page.goto("https://www.amazon.in/");
  18 |   await page.locator('[id="twotabsearchtextbox"]').type('Iphone 18 pro max');
  19 |   await page.locator('[id="twotabsearchtextbox"]').press('Control+A');
  20 |   await page.locator('[id="twotabsearchtextbox"]').press('Backspace');
  21 | })
```