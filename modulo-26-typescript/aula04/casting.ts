//Serve para converter os tipos no typescript

//No typescript nao podemos ter a mesma variavel no mesmo arquivo
namespace casting {
    let idade: any = 24;
    (idade as number).toFixed()
}


//Exercicios CASTING:

//a) Declare uma variável do tipo any e faça o casting para number.
namespace casting2 {
    let varAny: any = 'teste';
    let varNumber: number = varAny as number;
    varNumber.toFixed(); // Aqui você deve atribuir o resultado do casting a uma nova variável
}
//b) Converta uma string para maiúsculas usando casting.
namespace casting3 {
    let str: string = 'Bruno';
    let strUppercase: string = (str as string).toUpperCase(); // Você esqueceu dos parênteses para chamar o método
}
//c) Evite um erro de compilação ao realizar operações específicas de string em uma variável do tipo any usando type assertion.
namespace casting3 {
    let varAny: any = 'teste';
    (varAny as string).charAt(0); // Aqui você pode realizar uma operação específica de string
}
//d) Declare duas variáveis, uma contendo um número e outra uma string, e realize operações entre elas usando casting.
namespace casting4 {
    let varString: string = 'Joyce';
    let varNumero: number = 27;
    let strLowercase: string = (varString as string).toLowerCase(); // Adicionei uma variável para armazenar o resultado do casting
    let numFixed: string = (varNumero as number).toFixed(2); // Adicionei uma variável para armazenar o resultado do casting
}


//e) Crie uma função que recebe um parâmetro do tipo any e realiza o casting para boolean, retornando o resultado da comparação desse valor com true.
namespace casting5 {
    function calculaArea(input: any): boolean {
        let boolValue: boolean = input as boolean;
        return boolValue === true;
    }
}
