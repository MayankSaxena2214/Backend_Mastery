import { asyncHandler } from "../utils/asyncHandler.js";


export const register=asyncHandler(async(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"Ok"
    })
})