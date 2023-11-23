import dotenv from 'dotenv';
import express from 'express';
import dbconnect from './config/db.js';
import cors from 'cors';
import router from './routes/User.js';
const app=express();


app.use(express.urlencoded({extended:true}))
app.use(express.json())

// dbconnect();

app.use("/api/cafe",router);

// app.get("/",(req,res)=>{
//     res.send({name:"mohd mubeen"});
// })

// app.listen(8000,()=>{
//     console.log("server  is running");

// });

export default app;