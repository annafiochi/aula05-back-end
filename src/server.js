import { config } from 'dotenv'
import express from 'express'
config()

const serverPort = process.env.PORT ||3000
const app = express()
app.use(express.json())
const emocoes = [
    {
        id:1, 
        nome:'Nojinho',
        cor:'Verde'
    },
    {
        id:2, 
        nome:'Alegria',
        cor:'Amarelo'
    },
    {
        id:3, 
        nome:'Raiva',
        cor:'Vermelho'
    }
]
app.get('/', (req, res) => {
    return res.status(200).send({message: 'hello,  world!'})
})
app.get('/2tds2', (req, res) => {
    return res.status(200).send({message: 'hello,  world!'})
})
app.get('/emocoes', (req, res) => {
    return res.status(200).send(emocoes)
})
app.get('/personagens', (req, res) => {
    return res.status(200).send(personagens)
})
app.post('/emocoes', (req, res) => {
    const{ nome, cor} = req.body
    const newEmotion = {
        id:emocoes.length +1,
        nome:nome,
        cor:cor
    }
    emocoes.push(newEmotion)
    return res.status(200).send(emocoes)
})
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