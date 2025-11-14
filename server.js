import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

connectDB();
const app=express();

app.use(express.json());
app.use('/api/v1/auth',authRoute);

app.get("/",(req,res)=>{
    res.send({
        message:"Welcome to server"
    });
});

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`.bgCyan.white);
});