import express from 'express';
import appRouter from './routes/app-route';
import  cors from 'cors';



const app = express();
app.set('trust proxy', true)
app.use(cors());
app.use('/api/v1', appRouter)
 
export default app;