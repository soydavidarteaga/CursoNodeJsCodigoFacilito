
var express = require("express");
var Imagen = require("./models/imagenes");
var router = express.Router();

router.get("/",function(req,res){
	/*Buscar Usuario*/
	res.render("app/home")
});

/*REST*/
router.get("/imagenes/new",function(req,res){
	res.render("app/imagenes/new")
});
router.route("/imagenes/:id")
	.get(function(req,res){
		console.log(req.params.id)
		Imagen.findById(req.params.id,function(err,imagen){
			res.render("app/imagenes/show",{imagen: imagen});
		})
		
	})
	.put(function(req,res){

	})
	.delete(function(req,res){

	})
router.route("/imagenes")
	.get(function(req,res){

	})
	.post(function(req,res){
		 var title = console.log(req.body.title);
			if(title =! ''){
						var data = {
					title: req.body.title
				}

				var imagen = new Imagen(data);

				imagen.save(function(err){
					if(!err){
						res.redirect("/app/imagenes/"+imagen._id);
					}else{
						res.render(err);
					}
				});
			}else{
				res.send("No paso nada")
			}
	});


module.exports = router;