// Define the API endpoint and your API key
//https://content.guardianapis.com/search?api-key=apikey
// const apiUrl = 'https://content.guardianapis.com/search?api-key=66857629-03f8-415a-9074-994d909d3a9c';
// const apiKey = '66857629-03f8-415a-9074-994d909d3a9c';

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
        newsView.render(newsModel.getNews());
    },
    // onError
    (error) => {
        console.error('Error fetching news', error);
    }
  );
});
