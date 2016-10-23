var express = require("express");

var app = express();

app.set("view engine","jade"); //Motor de vista
/*Middlewares*/
	/*Servir archivos*/
		app.use("/estatico",express.static('public'));
	/*Fin servir artchivos*/
/*fin middlewares


/*RUTAS */
	app.get("/",function(req,res){
		res.render("index");
	});
	app.get("/login",function(res,res){
		res.render("login");
	});
/*Fin RUTAS */





app.listen(8080);