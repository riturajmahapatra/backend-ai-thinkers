// express connection
var express = require('express');
const connection = require('./connection');
var app = express();

app.get('/', function (req, res) {
  res.send('hello world!!');
});

app.listen(4000, function () {
  console.log('server is running');
  connection();
});

// data from script2.js
var data = require('./script2');

console.log(data);

// figlet
var figlet = require('figlet');

figlet('AI Thinkers', function (err, figletString) {
  if (err) {
    console.log('something went wrong');
    return console.log(err);
  }

  console.log(figletString);
});
