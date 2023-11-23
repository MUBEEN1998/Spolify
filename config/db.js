// const mysql=require("mysql2")
// require('dotenv').config();
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const dbconnect=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,

    database:process.env.DB_NAME,
    waitForConnections:"true",

})

dbconnect.connect((error)=>{
    if(error){
        console.log('mysql connection error',error)
    }else{
        console.log("connected successfully database")
    }
})

export default dbconnect;