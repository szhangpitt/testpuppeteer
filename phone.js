

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async() => {

const browser = await puppeteer.launch();
let page = await browser.newPage();
await page.emulate(devices['iPhone 6']);
await page.goto('https://lei.bloomberg.com');
await page.screenshot({path: 'full.png', fullPage: true});
browser.close();

})();
