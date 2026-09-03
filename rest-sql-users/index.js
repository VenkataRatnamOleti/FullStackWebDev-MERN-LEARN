const express = require("express");
const app = express();
const path = require("path");
const mysql2 = require("mysql2");
const { faker } = require("@faker-js/faker");
const methodOverride = require("method-override");

function getFakeUser(){
	return [
		faker.string.uuid(),
		faker.person.fullName(),
		faker.internet.email(),
		faker.internet.password()
	];
}

let data = [];
for(let i=0; i<200; i++){
	data.push(getFakeUser());
}

const connection = mysql2.createConnection({
	host: "localhost",
	user: "root",
	database: "mydb",
	password: "1234"
});

let port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));



app.listen(port,()=>{
	console.log(`listening at the port :${port}`);
});

app.get("/",(req,res)=>{
	let q = "SELECT COUNT(*) FROM users";
	try{
		connection.query(q,(err,result)=>{
			if(err) throw err;
			let count = result[0]["COUNT(*)"];
			res.render("home.ejs",{count});
		});
	}catch(err){
		res.send("error.ejs");
	}
});

app.get("/users",(req,res)=>{
	let q = "SELECT * FROM users";
	try{
		connection.query(q,(err,result)=>{
			if(err) throw err;
			let users = result;
			res.render("users.ejs",{users});
		});
	}catch(err){
		res.send("error.ejs");
	}
});

app.get("/addNewUser",(req,res)=>{
	let data = getFakeUser();
	let q = "INSERT INTO users VALUES (?,?,?,?)"; 
	try{
		connection.query(q,data,(err,result)=>{
			if(err) throw err;
			res.redirect("/");
		});
	}catch(err){
		res.send(err);
	}
});

app.get("/users/new",(req,res)=>{
	res.render("newUser.ejs");
});

app.post("/users",(req,res)=>{
	try{
		let { email, username, password } = req.body;
		let id = faker.string.uuid();
		let data = [id,email,username,password];
		let q = `INSERT INTO users VALUES(?,?,?,?)`;
		connection.query(q,data,(err,result)=>{
			if(err) throw err; 
			res.redirect("/");
		}); 
	}catch(err){
		console.log(err);
		res.send("error.ejs");
	}
});

app.get("/users/edit/:id",(req,res)=>{
	let { id } = req.params;
	try{
		let q = "SELECT * FROM users WHERE ID = ?";
		let data = [id];
		connection.query(q,data,(err,result)=>{
			if(err) throw err;
			let user = result[0];
			res.render("edit.ejs",{user});
		});
	}catch(err){
		res.render("error.ejs");
	} 
});

app.patch("/users/:id",(req,res)=>{
	let { username, email, newPassword} = req.body;
	let { id } = req.params;
	try{
		let q = "SELECT password FROM users WHERE ID=?";
		let data = [id];
		connection.query(q,data,(err,result)=>{
			if(err) throw err;
			let password = result[0]["password"];
			console.log(result);
			if(password === newPassword){
				let q2 = "UPDATE users SET username = ?, email = ? WHERE ID=?";
				data = [username,email,id];
				connection.query(q2,data,(err,result)=>{
					if(err) throw err;
					res.redirect("/");
				});
			}else{
				res.render("wrong.ejs");
			}
		});
	}catch(err){
		res.render("error.ejs");
	}
});

app.get("/users/delete/:id",(req,res)=>{
	let { id } = req.params;
	res.render("password.ejs",{id});
});

app.delete("/users/:id", (req,res)=>{
	let { id } = req.params;
	let { newPassword } = req.body;
	try {
		let q = "SELECT password FROM users WHERE ID=?";
		let data = [id];
		connection.query(q,data,(err,result)=>{
			if(err) throw err;
			let password = result[0]["password"];
			if(password === newPassword){
				let q2 = "DELETE FROM users WHERE ID=?";
				data = [id];
				connection.query(q2,data,(err,result)=>{
					if(err) throw err;
					res.redirect("/");
				});
			}else{
				res.render("wrong.ejs");
			}
		});
	} catch (error) {
		console.log(error);
	}
});
