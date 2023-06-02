//files: newsView.js

class NewsView {
    constructor(model, client) {
      this.model = model;
      this.client = client;
    }
  
    bindSubmit = () => {
      const form = document.getElementById('search-form');
      if (form) {
        form.addEventListener('submit', async (event) => {
          event.preventDefault();
          const searchQuery = document.getElementById('search-input').value; 
          // You can use the searchQuery to filter news articles
          // This will depend on the API you're using
        });
      } else {
        console.log("Search form not found!");
      }
    }
  
    displayHeadlines(headlines) {
      const headlinesList = document.getElementById('headlines');
      headlinesList.innerHTML = '';

      headlinesList.forEach((headline) => {
        const headlineItem = document.createElement('li');
        const headlineLink = document.createElement('a');

        headlineLink.textContent = headline.title;
        headlineLink.href = headline.url;
        headlineLink.target = '_blank';

        headlineItem.appendChild(headlineLink);
        headlinesList.appendChild(headlineItem);
      });
    }
    displayNews() {
      const newsList = document.getElementById('news-list');
      newsList.innerHTML = '';
      this.model.getNews().forEach(newsItem => { 
        if (!newsItem.title || !newsItem.description) { 
          console.log('News item is missing title or description!', newsItem);
          return; 
        }
  
        const newsElement = document.createElement('div');
        newsElement.classList.add('news-item');
  
        const newsTitle = document.createElement('h2');
        newsTitle.textContent = newsItem.title;
        newsElement.appendChild(newsTitle);
  
        const newsDescription = document.createElement('p');
        newsDescription.textContent = newsItem.description;
        newsElement.appendChild(newsDescription);
  
        newsList.appendChild(newsElement);
      });
    }
  
    displayNewsFromApi() {
      this.client.getNews((news) => {
        this.model.setNews(news);
        this.displayNews();
      },
      () => {
        this.displayError();
      });
    }
  
    displayError() {
      console.log('displayError has been called');
      const errorDiv = document.createElement('div');
      errorDiv.textContent = "Oops, something went wrong!";
      document.body.appendChild(errorDiv);
    }
  }
  
  module.exports = NewsView;
  