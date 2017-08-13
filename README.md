# Book List in PostgreSQL and Node

This project is an example of how you could build a website with Node, Express, and PostgreSQL. This project and the accompanying YouTube videos is meant for junior developers who already have basic exposure to Node, Express, HTML, CSS, and JavaScript. I am going to try to assume that you're not particularly comfortable with any of them though so I will explain a lot along the way. I'm going to assume you know nothing about PostgreSQL.

## Video List

The videos will be listed here as they are available.

## What Are We Building?

We are building a book list. General features of this app include...

* Basic authentication for one person (so just login and no registration).
* Forms for creating books, authors, and tags.
* Lists for viewing and searching through the books, as well as filtering by tags and authors.

## Tech?

This will will give us the opportunity to discuss so many things about web apps, including but not limited to...

* How Node works.
* How Express works and web frameworks work in general.
* Some thoughts on how to organize Express apps.
* How to use PostgreSQL, the SQL language, and relational databases like PostgreSQL.
* How to create simple APIs and call them with Ajax.
* How to layout some simple pages with Flexbox.
* Refactoring.
* How to deploy to Heroku.

## Rough Sequence

This is the rough sequence of events.

* Basic project setup + dotenv + mustache.
* Setup SCSS
* Setup pg and create add book view
* Create book list view
* Refactor to connection pooling and add book edit
* Manage tags view
* Link to books and talk and discuss joining, add api for tags, change add/edit book
* Search by tag page
* Deploy to Heroku and discuss environment settings/ dev vs prod, etc.
