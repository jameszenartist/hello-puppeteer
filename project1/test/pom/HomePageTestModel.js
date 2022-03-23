module.exports = class HomePageTestModel {
  constructor(page, config) {
    this.page = page;
    this.config = config;
  }

  //DYNAMIC VERSION
  async go() {
    await this.page.goto(this.config.baseURL);
  }

  async title() {
    return this.page.title();
  }
};
