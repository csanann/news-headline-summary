const express = require('express');
// const cors = require('cors');
const app = express();
// const PORT = 3000;
const path = require('path');

// app.use(cors())

let notes = [
  'This news is coming from the Server-side'
];

// Serving static files from the 'news-app' directory
app.use("/static", express.static(path.resolve(__dirname, "./news-summary-challenge", "static")));

// Enabling JSON body parsing for POST requests
// app.use(express.json());

app.get('/*', (_req, res) => {
  res.sendFile(path.resolve(__dirname,"./news-summary-challenge", "index.html"));
});

app.post('/news', (req, res) => {
  notes.push(req.body.content)
  res.send(JSON.stringify(notes));
});

// app.delete('/news', (_req, res) => { // changed to _reg to request the delete/to activate the delete
//   notes = [];
//   res.send(JSON.stringify(notes))
// });

app.listen(process.env.PORT || 5060, () => console.log(`Server is running...`));
