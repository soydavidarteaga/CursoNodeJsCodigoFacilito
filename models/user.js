var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/fotos");
/*
	Tipos de datos
	String
	Number
	Date
	Buffer
	Boolean
	Mixed
	Objectid
	Array

*/

var posibles_valores = ["M","F"];
var email_match = [/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/,"Coloca un mail valido"]
var user_schema = new Schema({
	name:String,
	last_name: String,
	username: {type: String, required:true,maxlenght:[50, "Username muy grande"]},
	password: {type: String, minlength: [8,"El password es muy corto"]},
	age: {type: Number,min:[5,"La edad no puede ser menor a 5"],max:[100, "La edad no puede ser mayor a 100"]},
	email: {type: String, required: "El correo es obligatorio",match:email_match},
	date_of_birth: Date,
	sex: {type:String,enum:{values: posibles_valores,message:"Opcion no valida"}}
});
/*Virtuals*/
	user_schema.virtual("password_confirmation").get(function(){
		return this.p_c
	}).set(function(password){
		this.p_c = password;
	});
/*Fin Virtuals*/
var User = mongoose.model("User",user_schema);

module.exports.User = User;
