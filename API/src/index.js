const express = require("express");
var avaliacoes = ["TESTE"];

const app = express();
app.use(express.json());

app.post("/avaliacoes", (req,res)=> {
    const {id, pessoa, nota } = req.body;
    const avaliacao = {id, pessoa, nota};
    avaliacoes.push(avaliacao);
    return res.status(201).json(avaliacao);
})

app.get("/avalicoes", (req,res) => {
    const todas_avaliacoes =  avaliacoes;
    return res.status(200).json(todas_avaliacoes);
});

app.listen(3333, "localhost",()=> console.log("Servidor rodando!"));