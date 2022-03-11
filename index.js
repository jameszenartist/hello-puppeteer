const puppeteer = require("puppeteer");

const HELLO_WORLD = "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program";

(async function () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(HELLO_WORLD);
  await page.screenshot({ path: "./screenshot.png" });
  browser.close();
})();
