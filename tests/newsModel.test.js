// tests/newsModel.test.js

const NewsModel = require('../src/newsModel');

describe('NewsModel', () => {
  it('stores and retrieves news', () => {
    const model = new NewsModel();
    const news = [{ title: 'Title', description: 'Description' }];

    model.setNews(news);

    expect(model.getNews()).toEqual(news);
  });
});
