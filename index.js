const express= require('express');
const fs=require("fs");
const server=express();

fs.writeFileSync("first.txt","my name is mohd mubeen")
fs.appendFileSync("first.txt"," i am the best of the world version")
const data=fs.readFileSync("first.txt");
server.get("/",(req,res)=>{
    res.send({name:"mohd mubeen"});
})

server.listen(8080,()=>{
    console.log("server is running");
    console.log(data.toString());

});