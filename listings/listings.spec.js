const server =require('../server')
const request = require('supertest')

describe('avg-price', ()=>{
    it('gets json array of listings', async ()=>{
        const res = await request(server).get('/api/listings')
       .expect('Content-type','application/json; charset=utf-8')
    })
   
})