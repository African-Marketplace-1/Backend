const server =require('./server')
const request = require('supertest')

describe('GET /', ()=>{
    it('has process.env.DB_env as "testing"', ()=>{
        expect(process.env.DB_ENV).toBe('testing')
    })

    it('returns "server running"', ()=>{
        return request(server).get('/')
        .expect("Server Running")
    })
    it('returns an array of listings in json',()=>{
        return request(server).get('/api/listings/')
        .expect('Content-type','application/json; charset=utf-8')
    })
})