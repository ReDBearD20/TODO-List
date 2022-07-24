const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const date=require(__dirname+ "/date.js");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
var items=[];
var workItems=[];
app.get("/",function(req,res){
let day=date.getDate();
      res.render("list",{listitems:items,ListTitle:day});//this is to render the ejs template
});
app.post("/",function(req,res){
  item=req.body.listitem;
  if(req.body.List==="Work List"){
    workItems.push(item);
    res.redirect("/work");
  }else {
    items.push(item);
   res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("list",{ListTitle:"Work List",listitems:workItems});
});


app.listen(3000,function(){
  console.log("server is running at port 3000");
});
