const express= require('express');
const server=express();


server.get("/",(req,res)=>{
    res.send({name:"mohd mubeen"});
})

server.listen(8080,()=>{
    console.log("server is running");
    console.log(data.toString());

});