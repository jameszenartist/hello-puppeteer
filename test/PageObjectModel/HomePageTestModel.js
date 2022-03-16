module.exports = class HomePageTestModel {
  constructor(page, config) {
    this.page = page;
    this.config = config;
  }

  async go() {
    await this.page.goto(this.config.baseURL);
  }

  async title() {
    return this.page.title();
  }
};

// module.exports = class HomePageTestModel {
//   go() {}
//   title() {}
//   search(searchValue) {}
//   signIn() {}
//   viewCart() {}
//   goToCheckout() {}
//   subscribe() {}
// };
