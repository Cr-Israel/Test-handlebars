const express = require('express');
const exphbs = require('express-handlebars');
const loja = require('./users')
const path = require('path');

const app = express();
const port = 5000;

const hbs = exphbs.create({
    partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.use('/users', loja);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log(`Running on port ${port}!`));
