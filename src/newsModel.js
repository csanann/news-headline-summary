//file: newsModel.js
// This class is a simple model that stores news data
class NewsModel {
    // The constructor initializes an empty array to store the news
    constructor() {
        this.news = []
    }

    // The setNews method sets the news array to the provided value
    setNews(news) {
        this.news = news;
    }
    
    // The getNews method returns the news array
    getNews() {
        return this.news;
    }
}

// The NewsModel class is exported so it can be imported in other files
module.exports = NewsModel;

