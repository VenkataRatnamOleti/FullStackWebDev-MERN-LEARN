const express = require("express");
const mysql = require("mysql2");
const methodOverride = require("method-override");
const path = require("path");

const port = 8080;

const connection = mysql.createConnection({
    host:"localhost",
    database:"delta_app",
    user:"root",
    password:"1234"
});

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.listen(port,()=>{ 
    console.log("server started");
})

app.get("/",(req,res)=>{
    let p = "SELECT * FROM user;";
    try{
        connection.query(p,(err,results)=>{
            if(err) throw err;
            let count = results[0]["COUNT(*)"];
            return res.render("home.ejs",{results});
        });
    }catch(err){
        console.log(err);
        return res.render("err.ejs");
    }
});