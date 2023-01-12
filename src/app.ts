import express from 'express';
import appRouter from './routes/app-route';
import  cors from 'cors';
import helmet from 'helmet';



const app = express();
app.use(cors());
app.use(helmet());
app.use('/api/v1', appRouter)
 
export default app;