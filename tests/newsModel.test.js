// tests/newsModel.test.js

// Import the NewsModel class from newsModel.js
const NewsModel = require('../src/newsModel');

// This is a test suite for the NewsModel class
describe('NewsModel', () => {
  // This is a single test that verifies that the setNews and getNews methods work correctly
  it('stores and retrieves news', () => {
    // Create a new instance of the NewsModel class
    const model = new NewsModel();
    // Define some mock news data
    const news = [{ title: 'Title', description: 'Description' }];

    // Call the setNews method with the mock data
    model.setNews(news);

    // Assert that the getNews method returns the correct data
    expect(model.getNews()).toEqual(news);
  });
});
