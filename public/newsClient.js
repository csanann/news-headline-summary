(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/newsClient.js
  var require_newsClient = __commonJS({
    "src/newsClient.js"(exports, module) {
      var NewsClient = class {
        getNews(onSuccess, onError) {
          fetch("http://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY").then((response) => response.json()).then(onSuccess).catch((error) => {
            console.error("Error in getNews:", error);
            onError();
          });
        }
      };
      module.exports = NewsClient;
    }
  });
  require_newsClient();
})();
