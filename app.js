var express = require("express");

var app = express();
var bodyParser = require("body-parser");

app.set("view engine","jade"); //Motor de vista
/*Middlewares*/
	/*Servir archivos*/
		app.use("/estatico",express.static('public'));
		app.use(bodyParser.json()); //Para peticiones json
		app.use(bodyParser.urlencoded({extended:true})); 
	/*Fin servir artchivos*/
/*fin middlewares


/*RUTAS */
	app.get("/",function(req,res){
		res.render("index");
	});
	app.get("/login",function(res,res){
		res.render("login");
	});
	app.post("/users",function(req,res){
		console.log("Contraseña:"+req.body.password);
		console.log("Email:"+req.body.email);
		res.send("Recibimos tus datos");
	});
/*Fin RUTAS */





app.listen(8080);