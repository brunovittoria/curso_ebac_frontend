
let arrObjetos = [
    {
    "nome": "Bruno",
    "nota": 10
    },
    {
    "nome": "Vitor",
    "nota": 4
    },
    {
    "nome": "Ian",
    "nota": 9
    },
    {
    "nome": "Marco",
    "nota": 6
    },
    {
    "nome": "Jose",
    "nota": 5
    },
]

function aprovados(arrObjetos) {
    return arrObjetos.filter(aluno => aluno.nota >= 6);
}

console.log(aprovados(arrObjetos))
