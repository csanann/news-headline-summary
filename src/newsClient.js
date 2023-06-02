//file: NewsClient.js

class NewsClient {
    getNews(onSuccess, onError) {    
      fetch('https://content.guardianapis.com/search?api-key=66857629-03f8-415a-9074-994d909d3a9c') // replace with your API
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => {
          console.error('Error in getNews:', error);
          onError();
        });   
    }
  }
  
  module.exports = NewsClient;
  