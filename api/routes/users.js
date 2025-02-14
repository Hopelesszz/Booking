import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
router.put("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser)
router.get("/:id", verifyUser, getUser)
router.get("/", verifyUser, getAllUsers)
export default router

//router.get("/checkauth", verifyToken, (req,res,next)=>{
//    res.send("hello user, you are logged in")
//})
//router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//    res.send("hello user, you are logged in and you can delete your account")
//})
//router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//    res.send("hello admin, you are logged in and you can delete all accounts")
//})