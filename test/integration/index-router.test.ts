import supertest from 'supertest';
import {Server} from 'http';
import appServer from '../../server';

let server:Server;

describe('GET /api/v1', ()=>{

    beforeEach(()=>{
        server = appServer()

    });

    afterEach(  ()=>{
       server.close()
    })
    
    it('index handler status code should be 200',async() => {

    const request =  supertest(server);
    const response = await request.get('/api/v1');

    expect(response.statusCode).toBe(200)

    })


})