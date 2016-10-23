var express = require("express");

var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

app.set("view engine","jade"); //Motor de vista

/*Middlewares*/
	/*Servir archivos*/
		app.use("/estatico",express.static('public'));
		app.use(bodyParser.json()); //Para peticiones json
		app.use(bodyParser.urlencoded({extended:true})); 
	/*Fin servir artchivos*/
/*fin middlewares

/*MODELOS Y ESQUEMAS */
	mongoose.connect("mongodb://localhost/fotos");
	var userSchemaJson = {
		email:String,
		password:String
	};
	var user_schema = new Schema(userSchemaJson);

	var User = mongoose.model("User",user_schema);
/*Fin Modelos*/

/*RUTAS */
	app.get("/",function(req,res){
		res.render("index");
	});
	app.get("/login",function(res,res){
		User.find(function(err,doc){
			console.log(doc);
			res.render("login");
		});
		
	});
	app.post("/users",function(req,res){
		var user = new User({email: req.body.email, password: req.body.password}); //Se crera un nuevo usuario
		user.save(function(){ //Se guarda y asi mismo se envia un callback
			res.send("Guardamos tus datos");
		});
		
	});
/*Fin RUTAS */





app.listen(8080);