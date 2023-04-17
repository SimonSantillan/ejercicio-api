/* 4 Maximo comun divisor , Minimo comun múltiplo */

function mcd(num){
  /* Es el maximo comun divisor de un numero, o sea el numero mas alto contenido en el */
  let maximo = 0;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      maximo = i;
    }
  }
  return `El maximo comun divisor es: ${maximo}`;
}

/* Para esta resolucion me ayude con chat gpt para hacer memoria sobre los mcm a nivel conceptual*/
function mcm(num1,num2) {
  let max = num1 > num2 ? num1 : num2; // Tomo el mayor numero ingresado
  let min = num1 < num2 ? num1 : num2; // Tomo también el numero minimo que se ingreso
  let i = max; // Le asigno el mayor numero a la variable i
  while (i % min !== 0) { //Si el mayor numero es divisible por el minimo numero entonces ese es el mcm
    i += max; // Si no, se suma denuevo el valor maximo 
  }
  return i;
}

console.log(mcm(12,8));
console.log(mcm(15,4));
















