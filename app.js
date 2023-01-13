const express = require('express');

const nunjucks = require('nunjucks');

const indexRouter = require('./routes/index');

const app = express();
const port = 4000;


app.use(express.static('public'))

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello world!',
        title: 'Nunjucks hello world',
    });
});
