const puppeteer = require("puppeteer");

const HELLO_WORLD = "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program";

const WEBSITE_LINK = `${HELLO_WORLD}`;

async function grabScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(WEBSITE_LINK);
  await page.screenshot({ path: "./screenshot.png" });
  browser.close();
}

grabScreenshot();
