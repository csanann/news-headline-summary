// Import the NewsClient class from newsClient.js
const NewsClient = require('../src/newsClient');

// This is a test suite for the NewsClient class
describe('NewsClient', () => {
  // Declare variables that will be used in the tests
  let client;
  let onSuccess;
  let onError;

  // The beforeEach function runs before each test in the suite
  beforeEach(() => {
    // Create a new instance of the NewsClient class
    client = new NewsClient();
    // Create mock functions for the onSuccess and onError callbacks
    onSuccess = jest.fn();
    onError = jest.fn();

    // Mock the fetch function globally to return a successful response
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            response: {
              results: [
                {
                  webTitle: 'Title',
                  fields: { trailText: 'Description' },
                  webUrl: 'http://example.com'
                }
              ]
            }
          })
      })
    );
  });

  // This is a single test that verifies that the getNews method works correctly
  it('fetches news from API', async () => {
    // Call the getNews method
    await client.getNews(onSuccess, onError);

    // Assert that the fetch function was called once with the correct URL
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://content.guardianapis.com/search?api-key=api_Key'
    );

    // Wait for all promises to resolve before proceeding
    await new Promise(resolve => setTimeout(resolve, 0));

    // Assert that the onSuccess callback was called with the correct data and the onError callback was not called
    expect(onSuccess).toHaveBeenCalledWith([
      { title: 'Title', description: 'Description', url: 'http://example.com' }
    ]);
    expect(onError).not.toHaveBeenCalled();
  });
});
