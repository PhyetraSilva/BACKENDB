function efetuarCalculoIMC(peso, altura) {
   let imc = peso / (altura * altura);
   return imc.toFixed(2);
}

export {efetuarCalculoIMC};