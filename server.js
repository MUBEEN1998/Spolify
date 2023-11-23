import dotenv from 'dotenv';
import app from './index.js'
import http from 'http';


const server=http.createServer(app);

server.listen(process.env.PORT)



