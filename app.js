const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();


app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(session({
    name : process.env.SESSION_NAME,
    secret : process.env.SESSION_SECRET,
    resave : true,
    saveUninitialized : true,
    cookie : {
        maxAge : null
    }
}))

const register = require("./routes/register");
const login = require("./routes/login");
const logout = require("./routes/logout");
const db = require("./database");
const idNotAvailable = require("./middleware/idNotAvailable");
const idAvailable = require("./middleware/idAvailable");

app.post("/register",register);
app.post("/login",login);

app.get("/login",idNotAvailable,(req,res)=>{
    res.sendFile("client/login.html",{root : __dirname})
})

app.get("/register",idNotAvailable,(req,res)=>{
    res.sendFile("client/register.html",{root : __dirname})
})

app.get("/home",idAvailable,(req,res)=>{
    res.sendFile("client/home.html",{root : __dirname})
})

app.get("/logout",idAvailable,logout);



db.connect.sync({force : true})
    .then(() =>{
        console.log("Recreated");
    })

app.listen(4000,() =>{
    console.log("listening")
})