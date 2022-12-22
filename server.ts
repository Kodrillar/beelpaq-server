import {createServer} from 'http';
import app from './src/app';
import config from 'config';
import {config as dotenvConfig} from 'dotenv';

//loads .env file for development
dotenvConfig();

const server = createServer(app);

const port:number = config.get('server.port');

server.listen(port, ()=>{
    console.log(`Connected successfully on port ${port}`);
    
})

export default server;