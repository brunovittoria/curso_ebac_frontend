//Exercicios para fixaçao dos ARRAY METHODS

//EX1: forEach:Dado o array [1, 2, 3, 4], utilize o método forEach para imprimir cada elemento multiplicado por 3.

let numbers = [1, 2, 3, 4]

numbers.forEach(num => console.log(num * 3))

//Map:Crie uma função que recebe um array de números e retorna um novo array contendo o quadrado de cada número. Utilize o método map.

let arr = [1, 2, 3, 4];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

console.log(squareNumbers(arr));

//Find:Dado o array [10, 20, 30, 40, 50], encontre o primeiro número maior que 25 usando o método find.

let arr2 = [10, 20, 30, 40, 50];
let result2 = arr2.find(num => num > 25);
console.log(result2);

//every: Crie uma função que verifica se todos os elementos de um array são pares. Utilize o método every.

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let resultPares = arr3.every(num => num % 2 === 0);
console.log(resultPares);

//some: Dado o array [-1, 2, -3, 4, -5], verifique se existe pelo menos um número negativo usando o método some.

let arr4 = [-1, 2, -3, 4, -5];
let resultSome = arr4.some(num => num < 0);
console.log(resultSome);


//filter:Crie uma função que recebe um array de palavras e retorna um novo array contendo apenas as palavras com mais de 5 letras. Utilize o método filter.

let palavras = ['peixe', 'gato', 'cachorro', 'cavalo'];

function filterByLength(palavras) {
    return palavras.filter(palavra => palavra.length > 5);
}

console.log(filterByLength(palavras));


//reduce:Calcule a soma de todos os elementos do array [5, 10, 15, 20] usando o método reduce.

let arrSoma = [5, 10, 15, 20]
let resultSoma = arrSoma.reduce((acc, num) => acc + num, 0)
console.log(resultSoma)