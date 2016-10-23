var express = require("express");

var app = express();

app.set("view engine","jade"); //Motor de vista



/*RUTAS */
	app.get("/",function(req,res){
		res.render("index");
	});
	app.get("/login",function(res,res){
		res.render("login");
	});
/*Fin RUTAS */





app.listen(8080);