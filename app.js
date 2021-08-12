const express=require("express");
const bodyParser=require("body-parser");
const date= require(__dirname+"/date.js")

const app=express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const today= new Date();
let day="";

let tasks=["Buy ps5", "Buy games", "play ps5"];
let worklist=[];

app.get("/",function(req,res){
    let day=date();

    res.render("list", { listTitle : day, newlistarray : tasks});
    
});

app.post('/', function(req, res) {
    let task = req.body.task;
    if(req.body.list==="Work List"){
        worklist.push(task);
        res.redirect("/work");
    }
    else{
        tasks.push(task);
        res.redirect("/");
    }
   
   
   
});

app.get("/work",function(req,res){
    
    res.render("list", { listTitle : "Work List", newlistarray : worklist});
});
app.post("/work", function(req,res){
    
    res.redirect("/work");
});

app.listen(3000, function(){
    console.log("Server is running at port 3000");
});