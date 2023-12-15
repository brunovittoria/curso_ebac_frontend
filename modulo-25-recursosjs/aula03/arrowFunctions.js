//a) Crie uma Arrow Function chamada quadrado que receba um número como parâmetro e retorne o quadrado desse número.
let num = 50
const quadrado = (num) => {
    return num * num
}

//b) Utilize a função setTimeout para criar uma contagem regressiva de 5 a 1, usando Arrow Functions.
const contarRegressivamente = (numero) => {
    if (numero > 0) {
        console.log(numero);
        setTimeout(() => contarRegressivamente(numero - 1), 1000);
    } else {
        console.log("Contagem finalizada!");
    }
};

contarRegressivamente(5);
//c) Escreva uma função de filtro que utilize Arrow Function para retornar apenas os números pares de uma array de números.
let arr = [1, 2, 3, 4, 5, 6]
const filtro = (arr) => {
    const pares = arr.filter(num => num % 2 === 0)
    console.log(pares)
}

//d) Converta a seguinte função tradicional em uma Arrow Function:

function saudacao(nome) {
    return "Olá, " + nome + "!";
}

const saudacao = (nome) => {
    return "Olá, " + nome + "!";
}

