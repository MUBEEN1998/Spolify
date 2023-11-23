import express from 'express';
import dbconnect from "../config/db.js";
import { createuser, user } from "../controllers/Usercontroller.js";

const router=express.Router();

router.get("/",user)
router.post("/signup",createuser);

export default router;