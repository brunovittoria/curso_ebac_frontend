//• Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

function multi(numero1: number, numero2: number): number {
    return numero1 * numero2
}
let result = multi(20,40);
console.log(result)

function hello(nome: string) : string {
    return "Olá " + nome
}
let sauda = hello("Bruno")
console.log(sauda)


//• No repositório do curso crie uma branch chamada exercicio_ts e armaze o código TS escrito nesta branch, nos envie o link através da plataforma.