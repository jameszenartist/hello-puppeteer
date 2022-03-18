const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const should = require("chai").should();
const HomePageTestModel = require("./PageObjectModel/HomePageTestModel.js");

describe("Home page header", () => {
  let browser;
  let page;
  let homePageTestModel;

  before(async () => {
    browser = await puppeteer.launch();
  });

  // beforeEach(async () => {
  //   page = await browser.newPage();
  //   await page.goto("https://www.packtpub.com/");
  // });

  //CREATED INSTANCE:
  beforeEach(async () => {
    page = await browser.newPage();
    homePageTestModel = new HomePageTestModel(page);
    await homePageTestModel.go();
  });

  afterEach(async () => {
    await page.close();
  });

  after(async () => {
    await browser.close();
  });

  //FIRST TEST:
  it("Title should have Packt name", async () => {
    // const title = await page.title();

    // Replaced page w/ HomePageTestModel class instance:

    const title = await homePageTestModel.title();
    title.should.contain("Packt");
  });

  //SECOND TEST:
  it("Title should mention Books", async () => {
    expect(await page.title()).to.contain("Books");
  });
});
