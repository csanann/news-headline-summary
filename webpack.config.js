const path = require('path');

module.exports = {
  entry: './main.js', // path to your main JavaScript file
  output: {
    filename: 'bundle.js', // name of the file that will contain all your compiled JavaScript code
    path: path.resolve(__dirname, 'dist') // directory where the output file will be placed
  },
  mode: 'development'
};
