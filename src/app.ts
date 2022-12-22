import express from 'express';
import appRouter from './routes/app-route';

const app = express();

app.use('/api/v1', appRouter)

export default app;