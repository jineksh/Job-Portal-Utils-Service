import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import ApiRoutes from './routes/index.js';
import getCareerAdvice from './Service/carrerGuidance.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Specify your frontend URL
    credentials: true,               // Allow cookies/headers
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));



app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

app.use('/api',ApiRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Utils Service is running on port ${process.env.PORT}`);
})