//Abaixo temos alguns exemplos de tipos BASICOS e como eles sao chamados

let estaChovendo: boolean = false

estaChovendo = true

let idade: number = 24

let altura: number = 1.87

const nacionalidade: string = 'Italo-brasileiro'

const colegas: string[] = ['Stefano','Claudio']
//Abaixo temos outro modo de especificar um array em TS:
const tecnologias: Array<string> = ['HTML', 'CSS', 'JS']
//Temos tambem o array somente de leitura:
const notas: ReadonlyArray<number> = [7, 9, 5, 8]

tecnologias.push()
//notas.push() Este arr(notas) permite somente leitura, logo nao funciona com esses metodos 

//podemos passar varios tipos dentro uma "tupula"
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Bruno', true, 24]

//Union Types, uniao de tipos, conseguimos atribuir a uma variavel mais de um tipo:

let idadeDaJoyce: number | string = 27
idadeDaJoyce = '27 anos'

//Esse tipo aceita qualquer coisa: Any
//E muito usado quando devemos receber dados de API, porem nao sabemos exatamente quais dados sao esses.

let dadosDaApi: any
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2,3]
dadosDaApi = 'string'

//Temos tambem a tipagem implicita

let curso = 'frontend' //Por padrao o valor sera string, se mudarmos o tipo como abaixo, dara um erro pois foi criada sendo uma string
//curso = 10 