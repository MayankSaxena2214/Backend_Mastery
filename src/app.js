import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/user.routes.js";

export const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}));
//for allowing the json data previously the bodyParser used
app.use(express.json({
    limit:"16kb"
}));
//for url data understanding
//extended for object nesting
app.use(express.urlencoded({extended:true,limit:"16kb"}));
//the file which we will store 
//we are telling that it will be in public folder
app.use(express.static("public"));
app.use(cookieParser());

//routes 
app.use("/api/v1/users",userRouter);


