const { test, expect } = require('@playwright/test')
test('Recorded  Video', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')
  await page.screenshot({ path: 'tests/screenshot/' + Date.now() + '_homepage.png' })
});

test('Full page screen shot', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')
  await page.screenshot({ path: 'tests/screenshot/' + Date.now() + '_Fullpage.png', fullPage:true})
});

test('Element screen shot', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')
  await page.screenshot({ path: 'tests/screenshot/' + Date.now() + '_Fullpage.png', fullPage:true})
  await page.locator("(//img[@class='card-img-top img-fluid'])[7]").screenshot({path:'tests/screenshot/' + Date.now() + '_webelement.png'})
});