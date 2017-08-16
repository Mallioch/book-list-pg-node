const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
require('dotenv').config();

const app = express();

const mustache = mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/list', (req, res) => {
  res.render('list');
});

app.get('/book/add', (req, res) => {
  res.render('book-form');
});

app.post('/book/add', (req, res) => {
  console.log('post body', req.body);

  const client = new Client();
  client.connect()
    .then(() => {
      console.log('connection complete');
      //do query stuff
      const sql = 'INSERT INTO books (title, authors) VALUES ($1, $2)'
      const params = [req.body.title, req.body.authors];
      return client.query(sql, params);
    })
    .then((result) => {
      console.log('result?', result);
      res.redirect('/list');
    })
    .catch((err) => {
      console.log('err', err);
      res.redirect('/list');
    });


});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}.`);
});
