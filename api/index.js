import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import hotels from "./routes/hotels.js";
import rooms from "./routes/rooms.js";
import cookieParser from "cookie-parser";
const app = express()
dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to mongoDB.")
    } 
    catch (error) {
        throw(error);
    }
}
app.use(cookieParser())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Main page")
})
app.use("/auth",auth);
app.use("/users",users);
app.use("/hotels",hotels);
app.use("/rooms",rooms);

app.use((err,req,res,next)=>{
    const errStatus = err.status || 500
    const errMessage = err.message || "Something went wrong."
    return res.status(errStatus).json({
        success: false,
        starus: errStatus,
        message: errMessage,
        stack: err.stack,
    })
})


app.listen(8800,()=>{
    connect()
    console.log("Connected to backend.")
})