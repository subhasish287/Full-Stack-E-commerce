import app from './app.js'
import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDb.js'
import {connectCloudinary} from './config/cloudinary.js'
import cors from 'cors';


dotenv.config();
app.use(cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        origin: ['https://full-stack-e-commerce-frontend-iota.vercel.app'],  // Or specify the origin like 'http://localhost:5173'
        credentials: true  // Allow cookies or credentials to be sent
            
}));
connectDb();
connectCloudinary();
app.get('/', (req, res) => {
        console.log("hello world");
        res.send("hello world");
})

app.listen(8080, () => {
        console.log("Server is running on port 8080");
})

