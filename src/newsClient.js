// We define a class named NewsClient
class NewsClient { 
  // The class has one method named getNews
  getNews(onSuccess, onError) {
    // This method uses the fetch API to send a GET request to the provided URL
    fetch('https://content.guardianapis.com/search?api-key=api_Key')
      .then((response) => {
        // After the request is sent, we get a promise that resolves to the Response object representing the response to the request
        // If the response was not ok (status code is not in the range 200-299), we throw an error
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then((data) => {
        // Once we have the JSON object, we can use it to create a new array of news items
        // Each item in the new array has a title, description, and url
        // This new array is created by calling the map method on data.response.results
        const transformedData = data.response.results.map(item => ({
          title: item.webTitle,
          description: item.fields?.trailText || '',
          url: item.webUrl
        }));
        // We call the onSuccess function (passed as a parameter to the getNews method) with the new array of news items as an argument
        onSuccess(transformedData);
      })
      // If any error occurred during the fetch operation, or while processing the response, we catch it here
      .catch((error) => {
        // We log the error message to the console
        console.error('Error fetching news:', error);
        // We call the onError function (passed as a parameter to the getNews method)
        onError();
      });
  }
}

// We export the NewsClient class as a module, which allows it to be imported and used in other files
module.exports = NewsClient;
