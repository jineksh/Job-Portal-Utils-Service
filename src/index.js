import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import ApiRoutes from './routes/index.js';


dotenv.config();

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',ApiRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Utils Service is running on port ${process.env.PORT}`);
})