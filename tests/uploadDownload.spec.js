import {test} from '@playwright/test'

test('upload file', async({page})=>{
  await page.goto("https://demoqa.com/upload-download");
  // to upload a single file
  await page.locator('//input[@id="uploadFile"]')
            .setInputFiles("C:\\Users\\HP\\Downloads\\LOKESHWARAN.pdf");
  await page.waitForTimeout(3000);

  // to upload a multiple files
  await page.locator('//input[@id="uploadFile"]')
            .setInputFiles(["C:\\Users\\HP\\Downloads\\LOKESHWARAN.pdf",
                            "C:/Users/HP/OneDrive/Documents/LOKESHWARAN N (RESUME).pdf"]
            )

  // to remove the uploaded file
  await page.locator('//input[@id="uploadFile"]').setInputFiles([]);
})

test('download', async({page}) => {
  await page.goto("https://demoqa.com/upload-download");
  const downloadPromise = page.waitForEvent('download');
  await page.locator('//a[@id="downloadButton"]').click();
  const download = await downloadPromise;
  const fileName = await download.suggestedFilename();
  console.log(fileName);
  await download.saveAs(`downloads/${await download.suggestedFilename()}`);
  const downloadCompleted = await download.failure();
  console.log(downloadCompleted);
})