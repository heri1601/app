var http = require('http');
var url = require('url');

app=http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
  var q = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
  var txt = q.year + " " + q.month;
  res.end(txt);
})


app.post('/registerProduct', function(req, res){
	var obj = {};
	console.log('rbody: ' + JSON.stringify(req.body));
	res.send(req.body);
});



app.post('/modify', function(req, res){
	var obj = {};
	console.log('mbody: ' + JSON.stringify(req.body));
	res.send(req.body);
});


app.post('/delete', function(req, res){
	var obj = {};
	console.log('dbody: ' + JSON.stringify(req.body));
	res.send(req.body);
});



app.post('/query', function(req, res){
	var obj = {};
	console.log('qbody: ' + JSON.stringify(req.body));
	res.send(req.body);
});


app.listen(8080);
