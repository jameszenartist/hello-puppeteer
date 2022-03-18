const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const should = require("chai").should();
const HomePageTestModel = require("./PageObjectModel/HomePageTestModel.js");
const config = require("./config");

describe("Home page header", () => {
  let browser;
  let page;
  let homePageTestModel;

  before(async () => {
    browser = await puppeteer.launch();
  });

  //CREATED INSTANCE:
  beforeEach(async () => {
    page = await browser.newPage();
    homePageTestModel = new HomePageTestModel(page, config);
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
    const title = await homePageTestModel.title();
    title.should.contain(config.brandName);
  });

  //SECOND TEST:
  it("Title should mention Books", async () => {
    expect(await page.title()).to.contain(config.mainProductName);
  });
});
