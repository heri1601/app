///https://github.com/senchalabs/connect#middleware


var connect = require('connect');
var http = require('http');
var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')
var fs = require('fs')

var app = connect();

//var serve = serveStatic('public/ftp', {'index': ['index.html', 'index.htm']})
// gzip/deflate outgoing responses
//var compression = require('compression');
//app.use(compression());

// store session state in browser cookie
//var cookieSession = require('cookie-session');
//app.use(cookieSession({
//    keys: ['secret1', 'secret2']
//}));

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));




// error middleware for errors that occurred in middleware
// declared before this
app.use(function onerror(err, req, res, next) {
  // an error occurred!
});



app.use('/register', function fooMiddleware(req, res, next) {
  res.end('foo!\n');
});


app.use('/bar', function barMiddleware(req, res, next) {
  // req.url starts with "/bar"
  //next();
  res.end('bar!\n');
});



app.use('/js', function barMiddleware(req, res, next) {
  // req.url starts with "/bar"
  //next();
  res.end('bar!\n');
});



//Index
app.use(function(req, res){
  //var path = require('path');
  //global.appRoot = path.resolve(__dirname);
  //res.end('Hello from Connect!\n'+global.appRoot);
//  res.sendfile('a.txt');

  var done = finalhandler(req, res)
  fs.readFile('index.html', function (err, buf) {
    if (err) return done(err)
    res.setHeader('Content-Type', 'text/html')
    res.end(buf)
  })

});

//create node.js http server and listen on port
http.createServer(app).listen(8080);