//npm install mongodb --save
var express = require('express')
var bodyParser = require('body-parser')
var dump =require('nodedump');
var app = express()


var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Method to route the index method
/*app.get('/',urlencodedParser, function (req, res) {
	//mydump(req.body,res);
  //Call the index function
  //res.send(index(req,));
  res.send(JSON.stringify(req.body));
  index(req,res);
});*/

//Examples
app.get('/login', urlencodedParser, function (req, res) {
	convertParameters(req);
	res.send('welcome, ' + req.query.username)
})

app.post('/login', urlencodedParser, function (req, res) {
	req=convertParameters(req);
	res.send('welcome, ' + req.query.username)
})



app.get('/', urlencodedParser, function (req, res) {
  res.send('Index')
})


app.get('/registrar', urlencodedParser, function (req, res) {
	convertParameters(req);
	
	var request={};
	request.producto=req.query.inProducto;
	request.precio=req.query.inPrecio;
	mydump(request,res);
	var modelo =new Modelo();
	modelo.registrarProducto(request.producto,request.precio,request.imagen);
	res.send('producto: '+req.body.inProducto)
})





function convertParameters(req){
	    console.log(req.method)
		if(req.method=='GET'){
			return req;
			}
		if(req.method=='POST'){
			req.query=req.body;
			}
		return req;
	}










function testFunciton(req,res){
	res.end("testFunciton")
	}




function mydump(obj,res){
  res.writeHead(200,{"Content-Type" : "text/html"});
  var dumpOutput=nodedump(obj);
  res.write(dumpOutput);
}




//door method to handle other public methods
app.use(function (req, res) {
	//mydump(JSON.stringify(req.body, null, 2),res);
	res.write(JSON.stringify(req.body, null, 2),res);
	//mydump(req.body,res);
	res.end();
	
	if(req.body.meth==undefined){
	  res.end("You didn't specify a method")
	  }
  //Calling the specified function
  //global[req.body.meth](req,res)
  /*res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))*/
  
})



/*app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})*/




//public functions
function index(req,res){
	//mydump(req.body,res);
	res.send("index"+JSON.stringify(req.body));
	}


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});





































//////////////////////////////Modelo
class Modelo {
  constructor() {
    this.id = 'id_1';
  }
	registrarProducto(inProducto,inPrecio,inImagen){
		console.log("registrando negocio");
		var dao=new DAO();
		dao.registrarProducto(inProducto,inPrecio,inImagen);
		}
}

























//DAO


class DAO {
  constructor() {

	}
	
	
	registrarProducto(inProducto,inPrecio,inImagen){
		console.log("registrando negocio");
		
		
		
		
		
		var MongoClient = require('mongodb').MongoClient;
		var url = "mongodb://localhost:27017/";

		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("liverpool");
		  var myobj = { name: "Company Inc", address: "Highway 37" };
		  dbo.collection("productos").insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted");
			db.close();
		  });
		}); 
		  
		
		
		}
}
