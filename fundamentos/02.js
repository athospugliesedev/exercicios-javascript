const peso = 124;
const altura = 1.96;

function calc(peso, altura){
  return peso / altura * altura
};

const imc = calc(altura, peso);

console.log(`IMC igual à ${imc}`)