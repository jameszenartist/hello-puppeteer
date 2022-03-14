const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const should = require("chai").should();

let browser;
let page;

before(async () => {
  browser = await puppeteer.launch();
});

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://www.packtpub.com/");
});

afterEach(async () => {
  await page.close();
});

after(async () => {
  await browser.close();
});

it("Title should have Packt name", async () => {
  const title = await page.title();
  title.should.contain("Packt");
});

it("Title should mention Books", async () => {
  expect(await page.title()).to.contain("Books");
});
