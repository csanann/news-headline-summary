//file: NewsClient.js

class NewsClient {
    getNews(onSuccess, onError) {    
      fetch('https://content.guardianapis.com/search?api-key=00') // replace with your API
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => {
          console.error('Error in getNews:', error);
          onError();
        });   
    }
  }
  
  module.exports = NewsClient;
  