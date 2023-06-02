// file: tests/main.test.js

const NewsClient = require('../src/newsClient');
const NewsModel = require('../src/newsModel');
const NewsView = require('../src/newsView');

describe('Main', () => {
    test('modules are loaded', () => {
        const newsClient = new NewsClient();
        const newsModel = new NewsModel();
        const newsView = new NewsView(newsModel, newsClient);
      
        expect(newsClient).toBeDefined();
        expect(newsModel).toBeDefined();
        expect(newsView).toBeDefined();
    });
});
