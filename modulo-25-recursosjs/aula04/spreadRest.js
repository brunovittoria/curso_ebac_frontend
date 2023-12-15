//a) Crie uma função que utilize o operador REST para receber um número variável de argumentos e retorne a soma deles.
let argumentos = [2, 5, 6, 8, 9]
function rest(...argumentos) {
    let result = argumentos.reduce((total,num) => total + num , 0)
    console.log(result)
}

//b) Escreva uma função que utilize o operador SPREAD para combinar dois objetos.
let obj1 = {
    name: 'Bruno',
    idade: 24,
    genero: 'masculino'
}

let obj2 = {
    name: 'Joyce',
    idade: 27,
    genero: 'feminino',
}

function combinator (obj1, obj2){
    let combo = {...obj1, ...obj2}
    console.log(combo)
}

//c) Modifique a função do exemplo SPREAD para criar uma cópia profunda de um array de objetos.
// Definindo uma função chamada copiaProfunda que recebe um array como parâmetro
const copiaProfunda = (arrayOriginal) => 
  // Usando o método map para percorrer cada objeto do arrayOriginal
    arrayOriginal.map(objeto => 
    // Criando uma cópia superficial (shallow copy) de cada objeto usando o operador SPREAD ({ ...objeto })
    ({ ...objeto })
);

// Criando um array chamado arrayOriginal com objetos aninhados
const arrayOriginal = [{ a: 1 }, { b: 2 }, { c: 3 }];

// Chamando a função copiaProfunda e passando arrayOriginal como argumento, resultando em um novo array
const arrayCopia = copiaProfunda(arrayOriginal);

// Exibindo o resultado no console, que deve ser uma cópia dos objetos presentes em arrayOriginal
console.log(arrayCopia);  // Output: [ { a: 1 }, { b: 2 }, { c: 3 } ]


//d) Crie uma função que utilize tanto o operador REST quanto o SPREAD para receber uma lista de ingredientes e retornar uma nova lista com um ingrediente adicionado.

let ingredientes = [
    {comida: 'pimenta'},
    {comida: 'farinha'},
    {comida: 'leite'}
]

const restSpread = (ingredientes) => {
    let novaLista = ingredientes.map(item => {
        return {
            ...item,
            comida: pizza
        }
    })
    console.log(novaLista)
}
