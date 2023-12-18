//A peculiaridade aqui no TS é ter de que passar os tipos para os argumentos

function calculaArea(base: number, altura: number): number {
    return base * altura
}

const calculaArea2 = (base: number, altura: number) => {
    return base * altura
}

//Mas e se tivermos que usar o OPERADOR REST, onde nao conhecemos o tipo do dado a receber
//Por padrao se nao definirmos um TIPO ao REST ele sera do tipo ANY, no caso abaixo vamos definir o array=

function somar(...numeros: number[]): void {   //Esse void seria para explicar qual seria o retorno no fim da funçao, nesse caso seria sem retorno
    //numeros.reduce()
    console.log(numeros)
}

//Podemos usar o UNION TYPESD no retorno das funçoes=
function teste(): string | number {
    if(10 > 5){
        return 'dez maior que 5'
    }
    else{
        return 5 
    }
}
//Dessa forma retornamos 2 tipos de valores diferentes em uma mesma funçao