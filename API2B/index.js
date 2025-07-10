import express from 'express';
const app = express();

app.get('/',(req, res) => {
let nome = "Phyetra";
let mensagem = ({mensagem: 'Hello World!', nome});
res.json(mensagem.nome); /*res.json(mensagem.nome);*/
});

app.listen(8080, () => {
let data = new Date();
console.log("Servidor node iniciado em: " + data );
})