import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoute.js';

const app = express();
const port = process.env.PORT || 5000;


await connectDB();
const allowedOrigins = ["http://localhost:5173"];

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins,credientials:true}));


app.get("/",(req,res)=>{
    res.send("API is Working");
});

app.use("/api/user",userRouter);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
})