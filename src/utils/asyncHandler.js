export const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

// export const asyncHandler=(theFunc)=>{
//     return async(req,res,next)=>{
//         try{
//             await theFunc(req,res,next);
//         }
//         catch(error){
//             res.status(error.code || 500).json({
//                 success:false,
//                 message:error.message
//             })
//             
//         }
//     }
// }