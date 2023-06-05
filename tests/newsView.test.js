// file: tests/newsView.test.js

const NewsModel = require('../src/newsModel');
const NewsClient = require('../src/newsClient');
const NewsView = require('../src/newsView');

describe('NewsView', () => {
  let view, model, client, mockElement;

  beforeEach(() => {
    //create a mock element object with necessary functions and properties
    mockElement = { addEventListener: jest.fn(), appendChild: jest.fn(), innerHTML: '' };
    //mock the getElementById function to return the mock element
    document.getElementById = jest.fn().mockReturnValue(mockElement);
    //create instances of the model, clients and view
    model = new NewsModel();
    client = new NewsClient();
    view = new NewsView(model, client);
  });
//test case for the bindSubmit method
  it('binds to the submit event', () => {
    // const model = new NewsModel();
    // const client = new NewsClient();
    // const view = new NewsView(model, client);
    //call hte bindSubmit method
    view.bindSubmit();
    //check if the getElementById function was called with the correct ID
    expect(document.getElementById).toHaveBeenCalledWith('search-form');
    //check if addElementListener was called on the form
    expect(mockElement.addEventListener).toHaveBeenCalledWith('submit', expect.any(Function));
  });

});
