// app.js
//https://nftcard.herokuapp.com/
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(process.env.PORT || 1337, 'nftcard.herokuapp.com');
console.log('Server running at https://nftcard.herokuapp.com/');
//console.log('Server running at http://127.0.0.1:1337/');