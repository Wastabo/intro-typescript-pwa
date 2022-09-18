
interface Exponencial{
    num1:number;
    num2:number;
}

const exponencial:Exponencial={
    num1:2,
    num2:4,
}

const{num1, num2}=exponencial;

console.log(`Numero 1 es: ${num1}`);
console.log(`Numero 2 es: ${num2}`);

console.log(`${num1} multiplicado por ${num2} veces es igual a: ${num1**num2}`);