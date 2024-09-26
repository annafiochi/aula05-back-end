import { Router } from "express";

const personagensRoutes = Router();

let personagens = [
  {
    id: 100,
    nome: "Totoro",
    studio: "Ghibli",
    vivo: true,
  },
  {
    id: 101,
    nome: "Merida",
    studio: "Disney",
    vivo: true,
  },
  {
    id: 102,
    nome: "Toy Story",
    studio: "Pixar",
    vivo: true,
  },
];

// rota para buscar todos personagens
personagensRoutes.get("/", (req, res) => {
  return res.status(200).send(personagens);
});

// rota para criar personagens
personagensRoutes.post("/", (req, res) => {
  const { nome, studio, vivo } = req.body;
  const novoPersonagens = {
    id: personagens.length + 1,
    nome: nome,
    studio: studio,
    vivo: vivo,
  };
  personagens.push(novoPersonagens);
  return res.status(201).send(novoPersonagens);
});

personagensRoutes.delete("/:id", (req,res) => {
  const {id}= req.params;

  const personagens= personagens.find((person) => person.id == id );

  if (!personagens){
      return res.status(404).send({
          message: "personagem não encontrada!",
      });
}
personagens = personagens.filter((person) => person.id != id)
    return res.status(200).send({
        message: "personagem deletado!",
        personagens,
    });
  })
  export default personagensRoutes;
    
