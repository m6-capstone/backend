import express from 'express'
import cors from 'cors'
import { appRoutes } from './routes/index.routes'

const app = express()
app.use(express.json())

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,       
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(appRoutes)

export default app;