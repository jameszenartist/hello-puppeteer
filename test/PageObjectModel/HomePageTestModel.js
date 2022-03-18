module.exports = class HomePageTestModel {
  constructor(page, config) {
    this.page = page;
    this.config = config;
  }

  async go() {
    await this.page.goto("https://www.packtpub.com/");
  }

  //DYNAMIC VERSION
  // async go() {
  //   await this.page.goto(this.config.baseURL);
  // }

  async title() {
    return this.page.title();
  }
};
