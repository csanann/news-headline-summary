// Import the NewsClient, NewsModel, and NewsView classes
const NewsClient = require('../src/newsClient');
const NewsModel = require('../src/newsModel');
const NewsView = require('../src/newsView');

// This is a test suite for the main script
describe('Main', () => {
    // This is a single test that verifies that the modules are loaded correctly
    test('modules are loaded', () => {
        // Create new instances of the NewsClient, NewsModel, and NewsView classes
        const newsClient = new NewsClient();
        const newsModel = new NewsModel();
        const newsView = new NewsView(newsModel, newsClient);
      
        // Assert that the instances are defined
        expect(newsClient).toBeDefined();
        expect(newsModel).toBeDefined();
        expect(newsView).toBeDefined();
    });
});
