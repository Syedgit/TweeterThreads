// ONE 
const fs = require('fs');
fs.readFile('myfile.txt', function (err, data) {
  if (err) throw err;
  console.log(data);
});


// TWO 

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('myEvent', function (arg) {
  console.log('myEvent triggered with argument:', arg);
});
myEmitter.emit('myEvent', 'hello world');

//THREE
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});
server.listen(3000);
console.log('Server listening on port 3000');

//FOUR
$ node
> 1 + 3
4
// using variables 
$ node
> x = 10
10
> y = 10
undefined
> x + y
20

//FIVE
$ npm install <Module Name>

install a famous Node.js web framework module called express −

$ npm install express

// use this module in your js file as following −

const express = require('express');

//SEVEN
const fs = require("fs");
let data = '';

// Create a readable stream
let readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");

// EIGHT
const fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
let data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

//TEN
const express = require('express');
let app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

const server = app.listen(8081, function () {
const host = server.address().address
const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})