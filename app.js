// express is helping us manage requests
// node: a place where you can run code


const express = require( 'express' );
const app = express();
const morgan = require('morgan');
// npm install morgan --save (to make sure that future users have access)
const nunjucks = require('nunjucks');

/* how to require
We've seen three ways to require modules:

    If the module is built into Node, we can simply use the name: var fs = require('fs')
    If the module was installed via npm, we can use the name: var nunjucks = require('nunjucks')
    If the module is one we've written, we need the path: var greeter = require('./greeter')

*/

app.use(function(req, res, next){
    console.log(`Request Type: ${req.method}, ID: ${req.originalUrl}`);
    next();
});

/*
app.use(morgan);
*/

/*
example of how nunjucks works:

when we pass nunjucks some data to render this view with, it will interpolate with the values we want

var locals = {
    title: 'An Example',
    people: [
        {name: 'Gandalf'},
        {name: 'Frodo'},
        {name: 'Hermione'},
    ]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function(err, output) {
    console.log(output);
});
*/

const people = [{name: "Full"}, {name: "Stacker"}, {name: "Son"}];

// setting conventions for when we send responses. what format are we sending them in?
app.set('view-engine', 'html'); // have res.render work with html files
// we are setting the view engine to html
app.engine('html', nunjucks.render); // when giving html files to res.render tell it to use nunjucks
// first arg: extension: .html, when we have html, use nunjucks
nunjucks.configure('views', {noCache: true}); // turns off caching

app.get('/', function(req, res){
    // res.send('Welcome to Twitter');
     res.render('index.html', {title: "Hall of Fame", people: people});
 });


app.get('/news', function(req, res){
    res.send(`What's going on in the world today?`);
    //next();
})

app.listen(3000, () => console.log(`We're listening on 3000`));
