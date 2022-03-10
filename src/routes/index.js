import messageRouter from './messageRoute'

export default app => {
    app.use (messageRouter)
}