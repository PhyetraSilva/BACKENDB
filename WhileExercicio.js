import rl from 'readline-sync';
//01. Escreva um programa que peça ao usuário para digitar um número e, em seguida,
//imprima a tabuada desse número usando um loop while.
let num = rl.questionInt("Informe um número: ");
let cont = 1;
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
} 
//02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de
//alunos.
//O Programa deverá:
//Ler o número de alunos da turma;
//Ler as notas dos 4 bimestres de cada aluno;
//Calcular e imprimir a média do aluno;
//Calcular e imprimir a média da turma

//03. a) Escreva um programa que simule um jogo de adivinhação
//onde o usuário deve adivinhar um número aleatório entre 1 e 100.
//O programa deve fornecer dicas sobre se o número digitado é
//maior ou menor que o número aleatório. O jogo deve continuar até
//que o usuário adivinhe corretamente.

//04. Escreva um programa que calcule e imprima os primeiros 20 números da sequência de Fibonacci.

//05. Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o
//valor de imposto de renda a ser pago.
//Calcule o total de Imposto de Renda a ser pago conforme a tabela abaixo:
//Salário <= R$ 2.100,00 = isento
//Salário <= R$ 2.800,00 = 7,5%
//Salário <= R$ 3.750,00 = 15%
//Salário <= R$ 4.660,00 = 22.5%
//Salário > R$ 4.660,00 = 27.5%

//6. Escreva um programa que itere sobre as propriedades
//de um objeto e imprima suas chaves e valores.
//7. Escreva um programa que itere sobre os elementos de um
//array e imprima seus valores.
//8. Escreva um programa que itere sobre os caracteres de uma
//string e imprima cada caractere.


