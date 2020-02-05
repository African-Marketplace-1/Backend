const server =require('../server')
const request = require('supertest')

describe('avg-price', ()=>{
    it('price list should require auth', async ()=>{
        
       const res = await request(server).get('/api/prices')
       expect(res.status).toBe(401)
    })
    
    
})