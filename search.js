const puppeteer = require('puppeteer');

(async() => {

const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();
await page.goto('https://openfigi.com/search', {waitUntil: 'networkidle'});
// Type our query into the search bar
await page.focus('input[ng-model="_.simpleSearchString"]');
await page.type('ibm');

await page.click('button[type="submit"]');

// Wait for the results to show up
await page.waitForSelector('label[ng-if="_.numResults"]');

// Extract the results from the page
const links = await page.evaluate(() => {
  const anchors = Array.from(document.querySelectorAll('div._viewport > table > tbody > tr'));
  return anchors.map(anchor => anchor.textContent);
});
console.log(links.join('\n'));
browser.close();

})();
