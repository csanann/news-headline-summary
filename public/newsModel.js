(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/newsModel.js
  var require_newsModel = __commonJS({
    "src/newsModel.js"(exports, module) {
      var NewsModel = class {
        constructor() {
          this.news = [];
        }
        setNews(news) {
          this.news = news;
        }
        getNews() {
          return this.news;
        }
      };
      module.exports = NewsModel;
    }
  });
  require_newsModel();
})();
