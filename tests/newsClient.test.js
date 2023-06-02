//file: newsClient.test.js

const NewsClient = require('../src/newsClient');

describe('NewsClient', () => {
  let client;
  let onSuccess;
  let onError;

  beforeEach(() => {
      client = new NewsClient();
      onSuccess = jest.fn();
      onError = jest.fn();

      fetch = jest.fn().mockImplementation(() => Promise.resolve({
          json: () => Promise.resolve([
              { title: 'Title', description: 'Description'}
          ])
      }));
  });

  it('fetches news from API', async () => {
      await client.getNews(onSuccess, onError);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('https://content.guardianapis.com/search?api-key=66857629-03f8-415a-9074-994d909d3a9c');
      //wait for all promises to resolve before proceeding
      await new Promise(resolve => setTimeout(resolve, 0)); 
      expect(onSuccess).toHaveBeenCalledWith([{ title: 'Title', description: 'Description' }]);
      expect(onError).not.toHaveBeenCalled();
  });
});
