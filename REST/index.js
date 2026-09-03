const express = require("express");
const path = require("path");
const { v4 : uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const app = express();
const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

let posts = [
	{
		id: uuidv4(),
		username:"venkat",
		content:"I Love coding!"
	},
	{
		id: uuidv4(),
		username:"jayaram",
		content:"Hardwork is important to achieve success"
	},
	{
		id: uuidv4(),
		username: "Raj Gopal",
		content: "I got my first internship!"
	},
	{
		id: uuidv4(),
		username: "Ananth",
		content: "I witnessed my death!"
	}
];

app.get("/posts/",(req,res)=>{
	res.render("index.ejs", {posts});
});

app.get("/",(req,res)=>{
	res.redirect("/posts");
})

app.get("/posts/new",(req,res)=>{
	res.render("new.ejs");
}); 

app.post("/posts", (req,res) => {
	let { username, content} = req.body;
	let id = uuidv4();
	posts.push({ id, username, content });
	res.redirect("/posts");
});

app.get("/posts/:id",(req, res)=>{
	let { id } = req.params;
	let post = posts.find(post => post.id === id);
	res.render("show.ejs",{post});
});

app.patch("/posts/:id", (req,res)=>{
	let { id } = req.params;
	let post = posts.find(post => post.id === id);
	let content = req.body.content;
	post.content = content;
	res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res)=> {
	let { id } = req.params;
	let post = posts.find(post => post.id === id);
	res.render("edit.ejs",{post});
});

app.delete("/posts/:id", (req,res)=>{
	let { id } = req.params;
	posts = posts.filter(post => post.id !== id);
	res.redirect("/posts");
});

app.listen(port,()=>{
	console.log(`Server Started at ${port}`);
});