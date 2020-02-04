const express = require('express')
const cors = require('cors')
const server = express()
const helmet = require('helmet')


const authRouter = require('./auth/auth-router')
const avgPriceRouter = require('./pricelist/avg-price-router')
const listingRouter = require('./listings/listings-router')
const userRouter = require('./users/users-router')

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api/auth', authRouter)
server.use('/api/prices',avgPriceRouter )
server.use('/api/listings',listingRouter)
server.use('/api/users', userRouter)

server.get('/',(req,res)=>{
    res.send('Server Running')
})

module.exports = server
