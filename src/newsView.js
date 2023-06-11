//files: src/newsView.js

// This class provides a view for the news data
class NewsView {
  // The constructor takes a model and a client as arguments and stores them
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.bindSubmit(); 
  }

  // The bindSubmit method adds an event listener to a form for submitting a search query
  bindSubmit = () => {
    // Get the form element by its ID
    const form = document.getElementById('search-form');
    // If the form exists, add an event listener to it
    if (form) {
      // The event listener prevents the default form submission and gets the value of the search input
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const searchQuery = document.getElementById('search-input').value; 
        // Now use the searchQuery to fetch relevant news
        this.client.searchNews(searchQuery,
          (data) => {
            this.model.setNews(data);
            this.displayNews();
          },
          (error) => {
            console.error("Error fetching news", error);
            this.displayError();
          }
        );
      });
    } else {
      // If the form doesn't exist, log an error
      console.log("Search form not found!");
    }
  }

  // The displayHeadlines method creates DOM elements for a list of headlines
  // This method is not being used in this code and can be removed.

  // The displayNews method creates DOM elements for a list of news items
  displayNews() {
    // Get the news list element by its ID and clear its contents
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = '';
    
    // The forEach loop goes through each news item returned by the model's getNews method
    this.model.getNews().forEach((newsItem) => { 
      // If a news item is missing a title or description, log an error and skip to the next item
      if (!newsItem.title || !newsItem.description ) { 
          console.log('News item is missing title, description or url!', newsItem);
          return; 
      }

      // Create a new 'div' element for the news item and give it a class
      const newsElement = document.createElement('div');
      newsElement.classList.add('news-item');

      // Create a new 'a' element for the news title, set its text and href attributes, and append it to the news item 'div'
      const newsTitle = document.createElement('a');
      newsTitle.textContent = newsItem.title;
      newsTitle.href = newsItem.url;
      newsTitle.target = '_blank';
      newsElement.appendChild(newsTitle);

      // Create a new 'p' element for the news description, set its text, and append it to the news item 'div'
      const newsDescription = document.createElement('p');
      newsDescription.textContent = newsItem.description;
      newsElement.appendChild(newsDescription);
      
      // Append the news item 'div' to the news list
      newsList.appendChild(newsElement);
    });
  }
  // The displayNewsFromApi method fetches news from the API, updates the model, and displays the news
  displayNewsFromApi() {
    this.client.getNews((news) => {
        this.model.setNews(news);
        this.displayNews();
    },
    () => {
        this.displayError();
    });
  }
    // The displayError method creates a 'div'
    // The displayError method creates a 'div' element, sets its text, and appends it to the body of the document
  displayError() {
    console.log('displayError has been called');
    const errorDiv = document.createElement('div');
    errorDiv.textContent = "Oops, something went wrong!";
    document.body.appendChild(errorDiv);
  }
}

// The NewsView class is exported so it can be imported in other files
module.exports = NewsView;
