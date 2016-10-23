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
var user_schema = new Schema({
	name:String,
	username: String,
	password: String,
	age: Number,
	email: String,
	date_of_birth: Date
});

var User = mongoose.model("User",user_schema);

module.exports.User = User;
