function efetuarCalculoIMC(peso, altura) {
   let imc = peso / (altura * altura);
   return imc.toFixed(2);
}

function retornarStatusIMC(imc) {
   let status;
   if (imc < 18.5) {
      status = 'Abaixo do peso';
   } else if (imc < 24.9) {
      status = 'Peso normal';
   } else if (imc < 30) {
      status = 'Acima do peso';
   } else {
      status = 'Obeso';
   }
   return status;
}

function validarParametro(parametro) {
   if(parametro != null)
      if (isNaN(parametro)) {
         return false;
      } else {
         return true
      }
   {
   else{
      return false;
   }
}
   }

export { efetuarCalculoIMC, retornarStatusIMC };