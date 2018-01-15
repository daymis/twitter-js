const express = require( 'express' );
const app = express();

app.use(function(req, res, next){
    console.log(`Request Type: ${req.method}, ID: ${req.originalUrl}`);
    next();
});

app.get('/', function(req, res){
    res.send('Welcome to Twitter');
});

app.get('/news', function(req, res){
    res.send(`What's going on in the world today?`);
    //next();
})

app.listen(3000, () => console.log(`We're listening on 3000`));