// file: tests/newsView.test.js

const NewsModel = require('../src/newsModel');
const NewsClient = require('../src/newsClient');
const NewsView = require('../src/newsView');

describe('NewsView', () => {
  let view, model, client, mockElement;

  beforeEach(() => {
    mockElement = { addEventListener: jest.fn(), appendChild: jest.fn(), innerHTML: '' };
    document.getElementById = jest.fn().mockReturnValue(mockElement);
    model = new NewsModel();
    client = new NewsClient();
    view = new NewsView(model, client);
  });

  it('handles submit event', () => {
    const model = new NewsModel();
    const client = new NewsClient();
    const view = new NewsView(model, client);

    view.bindSubmit();

    expect(document.getElementById).toHaveBeenCalledWith('search-form');
  });
});
