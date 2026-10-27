# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: uploadDownload.spec.js >> upload file
- Location: tests\uploadDownload.spec.js:3:5

# Error details

```
Error: locator.setInputFiles: Error: Non-multiple file input can only accept single file
Call log:
  - waiting for locator('//input[@id="uploadFile"]')
    - locator resolved to <input lang="en" type="file" id="uploadFile" class="form-control" label="Select a File"/>

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
      - heading "Upload and Download" [level=1] [ref=e126]
      - button "Download" [ref=e128] [cursor=pointer]
      - button "Choose File" [ref=e131] [cursor=pointer]
      - paragraph [ref=e132]: C:\fakepath\LOKESHWARAN.pdf
  - contentinfo [ref=e139]:
    - generic [ref=e140]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | test('upload file', async({page})=>{
  4  |   await page.goto("https://demoqa.com/upload-download");
  5  |   // to upload a single file
  6  |   await page.locator('//input[@id="uploadFile"]')
  7  |             .setInputFiles("C:\\Users\\HP\\Downloads\\LOKESHWARAN.pdf");
  8  |   await page.waitForTimeout(3000);
  9  | 
  10 |   // to upload a multiple files
> 11 |   await page.locator('//input[@id="uploadFile"]')
     |   ^ Error: locator.setInputFiles: Error: Non-multiple file input can only accept single file
  12 |             .setInputFiles(["C:\\Users\\HP\\Downloads\\LOKESHWARAN.pdf",
  13 |                             "C:/Users/HP/OneDrive/Documents/LOKESHWARAN N (RESUME).pdf"]
  14 |             )
  15 | 
  16 |   // to remove the uploaded file
  17 |   await page.locator('//input[@id="uploadFile"]').setInputFiles([]);
  18 | })
  19 | 
  20 | test('download', async({page}) => {
  21 |   await page.goto("https://demoqa.com/upload-download");
  22 |   const downloadPromise = page.waitForEvent('download');
  23 |   await page.locator('//a[@id="downloadButton"]').click();
  24 |   const download = await downloadPromise;
  25 |   const fileName = await download.suggestedFilename();
  26 |   console.log(fileName);
  27 |   await download.saveAs(`downloads/${await download.suggestedFilename()}`);
  28 |   const downloadCompleted = await download.failure();
  29 |   console.log(downloadCompleted);
  30 | })
```