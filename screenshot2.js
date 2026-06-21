const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://unitai.vercel.app', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2000); // give it a sec to paint
  await page.screenshot({ path: 'test_screenshot2.png' });
  await browser.close();
})();
