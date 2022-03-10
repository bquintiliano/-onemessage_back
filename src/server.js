import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(cors())

routes(app)

app.listen(3001, () => console.log('Servidor UP'))