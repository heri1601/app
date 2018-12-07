///https://github.com/senchalabs/connect#middleware
var connect = require('connect');
var dump =require('nodedump');
var http = require('http');
var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')
var fs = require('fs')
var url = require('url');
var app = connect();
const querystring = require('querystring');


function mydump(obj,res){
  res.writeHead(200,{"Content-Type" : "text/html"});
  var dumpOutput=nodedump(obj);
  res.write(dumpOutput);
}


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
app.use(bodyParser.urlencoded({extended: true}));




// error middleware for errors that occurred in middleware
// declared before this
app.use(function onerror(err, req, res, next) {
  // an error occurred!
});



app.use('/registrar', function fooMiddleware(req, res, next) {
//  mydump(req._parsedUrl.query,res);
  var arguments = url.parse(req._parsedUrl.query, true).query;
  mydump(arguments,res);
  res.end();
});


app.use('/bar', function barMiddleware(req, res, next) {
  // req.url starts with "/bar"
  //next();
  res.end('bar!\n');
});



app.use('/js', function barMiddleware(req, res, next) {
  var done = finalhandler(req, res)
  fs.readFile('./public/index.js', function (err, buf) {
    if (err) return done(err)
    res.setHeader('Content-Type', 'text/html')
    res.end(buf)
  })
});



//Index
app.use(function(req, res){
  var done = finalhandler(req, res)
  fs.readFile('./public/index.html', function (err, buf) {
    if (err) return done(err)
    res.setHeader('Content-Type', 'text/html')
    res.end(buf)
  })
});

//create node.js http server and listen on port
httpApp=http.createServer(app).listen(8080);
httpApp.post();
