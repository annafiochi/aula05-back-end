import {Router}from "express";
import emocoesRoutes from "./emocoes.routes.js";

const routes= Router();
routes.get('/', (req, res) => {
    return res.status(200).send({message: 'hello,  world!'})
})
routes.get('/2tds2', (req, res) => {
    return res.status(200).send({message: 'hello,  world!'})
})

routes.get('/personagens', (req, res) => {
    return res.status(200).send(personagens)
})
routes.use("/emocoes", emocoesRoutes);

export default routes;