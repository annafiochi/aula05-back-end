import { config } from 'dotenv'
import express from 'express'
config()

const serverPort = process.env.PORT ||3000
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    return res.status(200).send({message: 'hello,  world!'})
})
app.listen(serverPort, () => {
    console.log(`🎉 server started on http://localhost:${serverPort}`)
})