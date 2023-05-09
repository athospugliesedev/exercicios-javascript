const celsius = 21;
const farenheit = 69.8;

function temperaturaCelsius(celsius){
  return ( celsius * 9) / 5 + 32;
    
};

function temperaturaFarenheit(farenheit){
  return (farenheit - 32) * 5/9
}

console.log(`${celsius} igual a ${temperaturaCelsius(celsius)}`);

console.log(`${farenheit} igual a ${temperaturaFarenheit(farenheit)}`)

