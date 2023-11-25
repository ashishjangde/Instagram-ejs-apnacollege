const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path")
const port = 3000;


app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));
app.listen(port, () => {
    console.log(`app started on ${port}`);
});



app.get("/ig/:username",(req,res)=>{
   let {username} = req.params;
   let instaData = require("./data.json")
    //console.log(instaData)
   const data = instaData[username]
   if(data){
      res.render("instagram",{data})
   }else{
      res.send("<h1>Doesnt Find Account You looking For</h1>")
   }
  // const followers = ["Ashish","Jasmine","gungun","Monu"]
   
})

app.get("/",(req,res)=>{
    res.render("home")
 })

 app.get("/diceroll",(req,res)=>{
    diceRoll = Math.floor(Math.random()*6)+1;
    res.render("diceroll",{diceRoll})
 })