import express from 'express';

const app = express();

app.use('/', (req, res)=>{
    res.json({message:'Welcome to Beelpaq'});
})



export default app;