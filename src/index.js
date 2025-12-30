import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import ApiRoutes from './routes/index.js';


dotenv.config();

const app = express();


app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

app.use('/api',ApiRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Utils Service is running on port ${process.env.PORT}`);
})