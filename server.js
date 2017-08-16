const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const pgCamelCase = require('pg-camelcase');

pgCamelCase.inject(require('pg'));
require('dotenv').config();

const app = express();

const mustache = mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/books', (req, res) => {

  const client = new Client();
  client.connect()
    .then(() => {
      return client.query('SELECT * FROM books;');
    })
    .then((results) => {
      res.render('book-list', results);
    })
    .catch((err) => {
      //console.log('error', err);
      res.send('Something bad happened');
    });

});

app.get('/book/add', (req, res) => {
  res.render('book-form');
});

app.post('/book/add', (req, res) => {
  //console.log('post body', req.body);

  const client = new Client();
  client.connect()
    .then(() => {
      const sql = 'INSERT INTO books (title, authors) VALUES ($1, $2)'
      const params = [req.body.title, req.body.authors];
      return client.query(sql, params);
    })
    .then((result) => {
      //console.log('result?', result);
      res.redirect('/list');
    })
    .catch((err) => {
      //console.log('err', err);
      res.redirect('/list');
    });
});

app.post('/book/delete/:id', (req, res) => {

  const client = new Client();
  client.connect()
    .then(() => {
      const sql = 'DELETE FROM books WHERE book_id = $1;'
      const params = [req.params.id];
      return client.query(sql, params);
    })
    .then((results) => {
      //console.log('delete results', results);
      res.redirect('/books');
    })
    .catch((err) => {
      //console.log('err', err);
      res.redirect('/books');
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}.`);
});
