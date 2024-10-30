import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const dbConnection=async(req,res,next)=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}`,{
            dbName:DB_NAME
        });
        console.log("Mongodb Connected",connectionInstance.connection.host);
    }
    catch(error){
        console.log(error);
    }
}