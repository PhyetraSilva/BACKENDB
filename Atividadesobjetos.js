//01
let ap = {
    quartos: 2,
    tipo: 'Apartamento',
    endereco: 'Avenida Principal, 456 -Centro',
    andar: 7,
}

console.log(ap);
console.log('${ap.tipo} com ${ap.quartos} quartos,localizado no ${ap.andar}º andar da ${ap.endereco}');

//02
let prodEmb = {
    nome: 'Laptop HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preco: 3500.00,
}
console.log(`O produto${prodEmb.nome}, da categoria ${prodEmb.categoria}, pesando ${prodEmb.peso}, Está a venda por R$${prodEmb.preco.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}.`)

//03
class Imovel {
    constructor(quartos,tipo,endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco;
    }
    exibirinformacoes(){
        return `${this.tipo} com ${this.quartos} quartos,localizado na ${this.endereco}.`
    }
}

let casa = new Imovel();
//casa.quartos = 3;
//casa.tipo = 'Sobrando';
//casa.endereco = 'Rua tanto faz, nº 7070';
//console.log(casa);
//console.log(`Tipo do imóvel: ${casa.tipo} \nQuartos: ${casa.quartos} \nEndereço: ${casa.endereco}`);

console.log(casa.exibirinformacoes());

let apt = new Imovel(2,'Apartamento', 'Rua Amélia, nº 1010, bairro centro');
console.log(apt.exibirinformacoes());

//04
class Veiculo {
    constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    }
    
    exibirDetalhes() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}
    const carro = new Veiculo("Toyota", "Corolla", 2022);
    const motocicleta = new Veiculo("Honda", "CBR 600RR", 2021);
    console.log("Carro:");
    console.log(carro.exibirDetalhes());
    
    console.log("\nMotocicleta:");
    console.log(motocicleta.exibirDetalhes());
    import entraadados from 'readline-sync';
    
    console.log()
    let nome =entraadados.question('Informe seu nome: ');
    console.log(`ola ${nome}, seja bem vindo`);

//import EntradaDados from 'readline-sync';

//console.log();
//let nome = entradaDados.question("Informe seu nome:");
//console.log(`Olá ${nome}, seja bem-vindo(a)!`);

