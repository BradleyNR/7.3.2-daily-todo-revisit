const models = require('./models');
const sequelize = require('sequelize');
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyparser = require('body-parser');

const app = express();

//view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//body parser
app.use(bodyparser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  models.Todo.findAll().then((results) => {
    res.render('home', {todos: results});
  });
});

app.post('/add', (req, res) => {
  models.Todo.create({title: req.body.item}).then((result) => {
    res.redirect('/');
  });
});

app.post('/complete/:id', (req, res) => {
  models.Todo.findById(req.params.id).then((todo) => {
    return todo.destroy();
  }).then(() => {
    res.redirect('/');
  });
});



app.listen(3000);
