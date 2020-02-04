const express = require('express')
const cors = require('cors')
const server = express()
const helmet = require('helmet')


const authRouter = require('./auth/auth-router')
const avgPriceRouter = require('./pricelist/avg-price-router')
server.use(cors())
server.use(helmet())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/prices',avgPriceRouter )

server.get('/',(req,res)=>{
    res.send('Server Running')
})

module.exports = server
