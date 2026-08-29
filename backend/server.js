import "dotenv/config";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

//import routes

import { connectDB } from "./config/db.js";

import { notFound , errorHandler } from "./middleware/error.middleware.js";

import authRoutes from "./routes/auth.routes.js";

import leadRoutes from "./routes/lead.routes.js";

import contactRoutes from "./routes/contact.routes.js";

import taskRoutes from "./routes/task.routes.js";

import noteRoutes from "./routes/note.routes.js";

import aiRoutes from "./routes/ai.routes.js";

import analyticsRoutes from "./routes/analytics.routes.js";

const app = express();

// Middleware

app.use(cors({
    origin:process.env.CLIENT_URL || "http://localhost:5173",
    credentials:true
}));

app.use(express.json( {limit:"1mb"} ));

app.use(express.urlencoded({extended:true}));

if(process.env.NODE_ENV!=="production"){
    app.use(morgan("dev"));
}

app.get("/api/health", (req,res)=>{
    res.status(200).json({success:true,message:"Server is healthy"});
});

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/analytics", analyticsRoutes);

// Error handling middleware

app.use(notFound);
app.use(errorHandler);

// Start the server

const PORT=process.env.PORT || 8000;

const start=async() => {
    try{
        await connectDB();
        app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
    } catch (err) {
        console.error("Failed to start server:",err.message);
        process.exit(1);
    }
};

start();

export default app;