const express=require("express");
const bodyParser=require("body-parser");

const app=express();
var nItems=["eat","sleep","code"];
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    var today=new Date();
    var currentDay=today.getDay();
    var options={
        weekday :"long",
        day : "numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",options);
    res.render("list",{kindOfday:day, newlis:nItems});
});

app.post("/",function(req,res){
    var nItem=req.body.newItem;

    if(nItem !="") nItems.push(nItem);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("hey server is running on port 3000");
});