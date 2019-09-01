import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import { Server } from 'http'
import socketio from 'socket.io'

import routes from './src/routes'
import sockets from './src/sockets'

const app = express()
const server = Server(app)
const io = socketio(server)

app.use(cors())
app.use(express.json())

routes(app, io)
sockets(io)

server.listen(3000, () => {
    console.log('Up and running!')
})