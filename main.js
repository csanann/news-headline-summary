// Define the API endpoint and your API key

const NewsClient = require('./src/newsClient');
const NewsModel = require('./src/newsModel');
const NewsView = require('./src/newsView');

//create instances
const newsClient = new NewsClient();
const newsModel = new NewsModel();
const newsView = new NewsView(newsModel, newsClient);

window.addEventListener('load', () => {
  // Fetching data from the API
  newsClient.getNews(
    // onSuccess
    (data) => {
        newsModel.setNews(data);
        newsView.displayNews();
        // newsView.render(newsModel.getNews());
    },
    // onError
    (error) => {
        console.error('Error fetching news', error);
    }
  );
});
