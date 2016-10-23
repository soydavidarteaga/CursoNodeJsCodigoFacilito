var express = require("express");

var router = express.Router();

router.get("/",function(req,res){
	/*Buscar Usuario*/
	res.render("app/home")
});

module.exports = router;