import { config } from 'dotenv'
import express from 'express'

import routes from './routes/index.routes.js'
config();

const serverPort = process.env.PORT ||3000
const app = express()
app.use(express.json())
app.use(routes);



const personagens = [
    {
        id:100,
        nome:'Totoro',
        vivo: true
    },
    {
        id:101,
        nome:'Elsa',
        vivo: true
    },
    {
        id:102,
        nome:'Sr. batata',
        vivo: true
    }
]
app.listen(serverPort, () => {
    console.log(`🎉 server started on http://localhost:${serverPort}`)
})