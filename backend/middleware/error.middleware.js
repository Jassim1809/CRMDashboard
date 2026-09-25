import {ApiError} from '../utils/ApiError.js';

export const notFound=(req,res,next)=>{
    next(new ApiError(404,`Route Not Found - ${req.method} ${req.originalUrl}`));
};

export const errorHandler=(err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal Server Error";

    if(err.name==="CastError"){
        statusCode=400;
        message=`Invalid ${err.path}: ${err.value}`;
    }

    if(err.code===11000){
        statusCode=409;
        const field=Object.keys(err.keyValue || {})[0] || "field";
        message=`Duplicate value for field: ${field}`;
    }

    if(err.name==="ValidationError"){
        statusCode=400;
        message=Object.values(err.errors || {}).map((e)=>e.message).join(", ");
    }

    if(process.env.NODE_ENV==="production" && statusCode===500){
        message="Internal Server Error";
    }

    res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV!== "production" && statusCode===500    
            ?{stack: err.stack}
            : {}),
    });
}