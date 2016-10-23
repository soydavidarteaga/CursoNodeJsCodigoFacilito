
var express = require("express");
var User = require("./models/user").User;
var router = express.Router();

router.get("/",function(req,res){
	/*Buscar Usuario*/

	res.render("app/home")
});

module.exports = router;