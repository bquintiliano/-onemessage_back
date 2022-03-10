import { Router } from 'express'
import messageControllers from '../controllers/messageControllers'

const messageRouter = Router()

messageRouter 
    .post('/create', messageControllers.createMessage)
    .get('/read/:id', messageControllers.readMessage)


export default messageRouter