import express from 'express';
const app = express();
import { efetuarCalculoIMC, retornarStatusIMC, validarParametro} from './servicos/calculadoraIMC.js';

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;
    if(validarParametro(peso) && validarParemetro(altura))
    let imc = peso / (altura * altura);
    let status = retornarStatusIMC(imc);

    res.json({imc: imc, status: status});
});

app.listen(8080, () => {
let data = new Date();
console.log("Servidor node iniciado em: " + data );
})