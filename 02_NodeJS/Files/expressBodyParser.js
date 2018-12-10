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
  res.sendfile('./public/index.html')
})


app.get('/js', urlencodedParser, function (req, res) {
  res.sendfile('./public/index.js')
})


app.post('/registrar', urlencodedParser, function (req, res) {
	console.log("registrando");
	convertParameters(req);
	var request={};
	request.producto=req.query.inProducto;
	request.precio=req.query.inPrecio;
	mydump(request,res);
	var modelo =new Modelo();
	modelo.registrarProducto(request.producto,request.precio,request.imagen);
	res.send('producto: '+req.body.inProducto)
})




app.get('/obtenerProductos', urlencodedParser, function (req, res) {
	convertParameters(req);
	
	var modelo =new Modelo();
	modelo.obtenerProductos().then(function(productos){
			res.end(JSON.stringify(productos));
			res.end();
		});
	
	
})


app.get('/modificarProducto', urlencodedParser, function (req, res) {
	convertParameters(req);
	var modelo =new Modelo();
	var request={}
	request.id=req.query.inIDProducto;
	request.producto=req.query.inProducto;
	request.precio=req.query.inPrecio;
	request.imagen=req.query.inImagen;
	//Validations?
	
	var response=modelo.modificarProducto(request.id,request.producto,request.precio,request.imagen);
	res.end();
	
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
		var dao=new DAO();
		dao.registrarProducto(inProducto,inPrecio,inImagen);
		}
		
	async obtenerProductos(){
		var dao=new DAO();
		await dao.obtenerProductos();
		var q= dao.obtenerProductosF();
		return q;
		}
		
	modificarProducto(id,producto,precio,imagen){
		var dao=new DAO();
		return dao.modificarProducto(id,producto,precio,imagen);
		}
}

























//DAO


class DAO {
  constructor() {
		this.arregloProductos=null;
	}
	
	
	registrarProducto(inProducto,inPrecio,inImagen){
		var MongoClient = require('mongodb').MongoClient;
		var url = "mongodb://localhost:27017/";

		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("liverpool");
		  var myobj = { producto: inProducto, precio: inPrecio,imagen: inImagen,estado:1 };
		  dbo.collection("productos").insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted");
			db.close();
		  });
		}); 
		}//Registrar
		
		
		modificarProducto(in_id,in_producto,in_precio,in_imagen){
			var MongoClient = require('mongodb').MongoClient;
			var url = "mongodb://localhost:27017/";
			var ObjectID = require('mongodb').ObjectID;

			MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
			  if (err) throw err;
			  var dbo = db.db("liverpool");
			  console.log("Updating the id "+in_id+"  "+in_producto);
			  dbo.collection("productos").updateOne(
										   { "_id": ObjectID(in_id) },
										   {
											 $set: {
											   "producto": in_producto,
											   "precio": in_precio,
											   "imagen": in_imagen
											 }
										   },
										   function(err, res) {
												if (err) throw err;
												console.log("1 document updated");
												db.close();
											  }
										);

			});
			return 1;
		}//Modificar
		
	obtenerProductos(inProducto,inPrecio,inImagen){
		var that=this;
		var MongoClient = require('mongodb').MongoClient;
		var url = "mongodb://localhost:27017/";

		return new Promise(function(resolve,reject){
						MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
						var dbo = db.db("liverpool");
						//MongoClient.connect(url, function(err, db) {
						  if (err) throw err;
						  //db.collection("productos").find({ estado: { $gt: 0 } }).toArray(function(err, result) {
						  var productos=dbo.collection("productos").find({}).toArray();
						  productos.then(function(data){
							  that.arregloProductos=data;
							  resolve(data);
							  });
						}); 
						
			
			}).then(function(data){
				return data;
				});
		}//obtenerProductos
	
	
	obtenerProductosF(){
		return this.arregloProductos;
		}
	
	
	
}
