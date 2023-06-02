(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // src/newsView.js
  var require_newsView = __commonJS({
    "src/newsView.js"(exports, module) {
      var NewsView = class {
        constructor(model, client) {
          __publicField(this, "bindSubmit", () => {
            const form = document.getElementById("search-form");
            if (form) {
              form.addEventListener("submit", async (event) => {
                event.preventDefault();
                const searchQuery = document.getElementById("search-input").value;
              });
            } else {
              console.log("Search form not found!");
            }
          });
          this.model = model;
          this.client = client;
        }
        displayNews() {
          const newsList = document.getElementById("news-list");
          newsList.innerHTML = "";
          this.model.getNews().forEach((newsItem) => {
            if (!newsItem.title || !newsItem.description) {
              console.log("News item is missing title or description!", newsItem);
              return;
            }
            const newsElement = document.createElement("div");
            newsElement.classList.add("news-item");
            const newsTitle = document.createElement("h2");
            newsTitle.textContent = newsItem.title;
            newsElement.appendChild(newsTitle);
            const newsDescription = document.createElement("p");
            newsDescription.textContent = newsItem.description;
            newsElement.appendChild(newsDescription);
            newsList.appendChild(newsElement);
          });
        }
        displayNewsFromApi() {
          this.client.getNews(
            (news) => {
              this.model.setNews(news);
              this.displayNews();
            },
            () => {
              this.displayError();
            }
          );
        }
        displayError() {
          console.log("displayError has been called");
          const errorDiv = document.createElement("div");
          errorDiv.textContent = "Oops, something went wrong!";
          document.body.appendChild(errorDiv);
        }
      };
      module.exports = NewsView;
    }
  });
  require_newsView();
})();
