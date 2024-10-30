import dotenv from "dotenv";

import { dbConnection } from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path:"./.env"
});

dbConnection()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Server is running on port 8000")
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed",err);
})