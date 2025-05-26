//01. Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta.
//Declaração de função
import rl from 'readline-sync';
let frase = rl.question("Informe o texto para ser convertido: ");
//console.log(Maiusculas(frase));

function Maiusculas(texto) {
    texto = texto.toUpperCase();
    return texto.toUpperCase();

}

const cxAlta = function (texto) {
    return texto.toUpperCase();
}

const toMaiusculas = (texto) => texto.toUpperCase();
console.log(toMaiusculas (frase));