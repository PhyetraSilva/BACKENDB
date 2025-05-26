import rl from 'readline-sync';
//01.

let num = rl.questionInt("Informe um número: ");

let cont = 1;
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
} 

//02.

let numAlunos = rl.questionInt("Informe o número de alunos: ");
let somaMedias = 0;
let contadorAluno = 1;

while (contadorAluno <= numAlunos) {
    console.log(`Aluno ${contadorAluno}:`);

    let somaNotas = 0 
    let contadorBimestre = 1;

    while (contadorBimestre <= 4) {
        let nota = rl.questionInt(`Informe a nota do ${contadorBimestre}º bimestre parao Aluno ${contadorAluno}: `)
        somaNotas = somaNotas + nota;
        contadorBimestre++;
    }
    let mediaAluno = somaNotas/4;
    somaMedias = somaMedias + mediaAluno;

    console.log(`Média do Aluno ${contadorAluno}: ${mediaAluno.toFixed(2)}`);
    contadorAluno++;
}

let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Média geral da truma: ${mediaGeralTurma.toFixed(2)}`);

//03.
const numAleatorio = Math.floor(Math.random()*100)+1;

let tentativa;

do {
  tentativa = rl.questionInt("Tente adivinhar o número (entre 1 e 100): ");
    if (tentativa ===  numAleatorio) {
    console.log("Parabens você adivinhou o número.");
    } else if(tentativa < numAleatorio) {
        console.log("Tente um número maior.");
    }else{
        console.log("Tente um número menor.");
    }
} while (tentativa !== numAleatorio);

//04.

    for (let i = 1; i <=10; i++){
    let nome = rl.question(`Infrome o nome da ${i}ª pessoa: `);
    let salario = rl.questionFloat(`Infrome o salário de ${nome}: `);    

    let ir =0;
    if (salario <= 2100) {
        ir = 0;
    } else if (salario <=2800) {
        ir = salario * 0.075;
    }else if(salario <= 3750) {
        ir = salario * 0.15;
    }else if (salario <= 4660) {
        ir = salario * 0.275;
    }else {
        ir = salario * 0.275;
    }
    console.log(`\n---Imposto de Renda Devido---`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${ir.toFixed(2)}\n `);
}

//05

const pessoa = {
  nome: "Carlos Eduardo dos Santos",
  dtNasc: "22/02/2002",
  cpf: 88234512045,
  sexo: 'M'
}

//console.log(pessoa)
//console,log("Nome: " + pessoa.nome);
for (const key in pessoa) {
  console.log(`${key}: ${pessoa[key]}`);

}

const cores = ["Branco", "Azul", "Verde", "Preto", "Roxo", "Amarelo"];
let valores = "";
for (const elemento of cores) {

    valores += elemento + ",";
}
console.log(valores)
