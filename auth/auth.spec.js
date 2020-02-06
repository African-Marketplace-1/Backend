const server =require('../server')
const request = require('supertest')
const db = require('../dbConfig')

beforeEach(()=>{
    return db.migrate.rollback()
    .then(()=>db.migrate.latest())
    .then(()=>db.seed.run())
   
})


describe('Authorization / authentication', ()=>{
    it('gets responce 201 from register', async ()=>{
        const res = await request(server)
        .post('/api/auth/register')
        .send({username:'pickleRick',password:'jaguar',profile_pic_url: ''})
        expect(res.status).toBe(201)
        expect(res.body).toHaveProperty('id')
    })
    it('gives response 401 to invalid user', async ()=>{
        const res = await request(server)
        .post('/api/auth/login')
        .send({ username:'fart',password:'goodbyemoonmen' })
        expect(res.status).toBe(401)
    })
})

describe('login user',()=>{
    it('Post /api/auth/login', async ()=>{
        const register = await request(server)
        .post('/api/auth/register')
        .send({username:'pickleRick',password:'jaguar',profile_pic_url: ''})
        const res = await request(server)
        .post('/api/auth/login')
        .send({username:"pickleRick", password:"jaguar"})
        expect(res.status).toBe(200)
        expect(res.body.token)
    })
})