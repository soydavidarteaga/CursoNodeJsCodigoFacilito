var express = require("express");

var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
/*Modelos*/
var User = require("./models/user").User;
/*Fin Modelos*/


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
		User.find(function(err,doc){
			console.log(doc);
			res.render("login");
		});
		
	});
	app.post("/users",function(req,res){
		var user = new User({email: req.body.email, password: req.body.password, password_confirmation: req.body.password_confirmation,username: req.body.username}); //Se crera un nuevo usuario
		console.log(req.body.password_confirmation)
		user.save().then(function(us){
			res.send("Guardamos tus datos");
		},function(err){ //Se guarda y asi mismo se envia un callback
			if(err){
				console.log(String(err));
				res.send("No pudimos guardar la informacion "+err);
			}
			
		});
		
	});
/*Fin RUTAS */





app.listen(8080);