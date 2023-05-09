const comprimento = 10;
const largura = 4;

function calcArea(comprimento, largura){
  return comprimento * largura
};

function calcPerimetro(comprimento, largura){
  return 2 * (comprimento + largura)
};

const area = calcArea(comprimento, largura);
const perimetro = calcPerimetro(comprimento, largura);

console.log(area, perimetro)