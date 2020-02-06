const server =require('../server')
const request = require('supertest')
const db = require('../dbConfig')

beforeEach(()=>{
    return db.migrate.rollback()
    .then(()=>db.migrate.latest())
    .then(()=>db.seed.run())
   
})

describe('avg-price', ()=>{
    it('gets json array of listings', async ()=>{
        const res = await request(server).get('/api/listings')
       .expect('Content-type','application/json; charset=utf-8')
    })
   it('gets a single listing', async ()=>{
       const res = await request(server).get('/api/listing/2')
       .expect('Content-type','text/html; charset=utf-8')
   } )
})