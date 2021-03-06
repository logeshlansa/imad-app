var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg'),Pool;

var config = {
    user:'logeshlansa',
    database:'logeshlansa',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
     
    var htmlTemplate =
    <html>
    <head>
    <title>
    ${title}
    </title>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
    <div class="container">
    <div>
    <a href="/">Home</a>
    </div>
    <hr/>
    <h3>
    ${heading}
    </h3>
    </html>
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/hash/:input', function(req, res)) {
}; 
}


app.get('/ui/madi.png', function (req, res) {
pool.query('SELECT * FROM test', function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    }else{
        res.send(JSON.stringify(result.rows));
    }
    }}
    var counter = 0;
    app.get('/counter', function(req, res) {
      counter - counter + 1;
      res.send(counter.toString());
    }
  var names = [];
  app.get('/submit-name',function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var Pool = new Pool(Config);
app.get('/test.db',function (req, res) {
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var Pool = new Pool
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var counter 0 ;

    var name = req.query.name;

    names.push(name);
    res.send(JSON.stringify(names));
app.get('/articles/:articlename',function (req, res) {
pool.query('SELECT * FROM article WHERE title = $1',[req.params.articleName], function(err, result)) {
  if(err) {
      res.status(500).send(err.toString());
  } else {
      if (result.rows.length---0) {
          res.status(404).send('Article not found');
      } else {
      }
  }
  }  
}