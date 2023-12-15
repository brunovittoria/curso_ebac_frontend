//Exemplo de POO:

class Carro { //Classe
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
    }

    acelerar(quantidade) {  //Metodo passado como funçao que deixa armazenado essa funcionalidade dentro da class carro
        this.velocidade += quantidade;
        console.log(`O carro ${this.marca} ${this.modelo} está agora a ${this.velocidade} km/h.`);
    }

    frear() { //Metodo passado como funçao que deixa armazenado essa funcionalidade dentro da class carro
        this.velocidade -= 10;
        console.log(`O carro ${this.marca} ${this.modelo} está agora a ${this.velocidade} km/h.`);
    }
}

// Criando uma instância(Novo Tipo com particularidades) da classe Carro
const meuCarro = new Carro('Toyota', 'Corolla');

// Chamando métodos para alterar o estado do objeto
meuCarro.acelerar(30);
meuCarro.frear();


//Agora vamos criar uma classe que obtem a HERANCA da classe carro: 

class CarroEsportivo extends Carro {
    constructor(marca, modelo, potencia) {
        super(marca, modelo); //Super é usado para chamar os construtores da classe PAI (CARRO)

        // Adicionando propriedade específica de CarroEsportivo
        this._potencia = potencia;  //Aqui estamos usando encapsulamento, para deixar escondido o valor POTENCIA
    }

    //Getter ira servir dentro do ENCAPSULAMENTO pra acessar o valor privado POTENCIA
    get potencia() {
        return this._potencia
    }

    //Setter serve dentro do ENCAPSULAMENTO pra definir a potencia com verificaçoes
    set potencia(novaPotencia) {
        if (novaPotencia > 0) {
            this._potencia = novaPotencia;
        } else {
            console.log("A potência deve ser um valor positivo.");
        }
    }

    // Adicionando método específico de CarroEsportivo
    ativarModoEsportivo() {
        console.log(`Modo esportivo ativado para o ${this.marca} ${this.modelo}!`);
    }
}

const carroPorsche = new CarroEsportivo('Porsche', 'Taycan', 500); //Criando nova instancia

// Usando getter para acessar a potência(valor encapsulado) 
console.log(`Potência do ${carroPorsche.marca} ${carroPorsche.modelo}: ${carroPorsche.potencia} HP`);

// Usando setter para alterar a potência(valor encapsulado)
carroPorsche.potencia = 600;

// Chamando métodos para alterar o estado do objeto
carroPorsche.ativarModoEsportivo();
//Neste trecho ACIMA, a instância carroPorsche foi criada como uma instância da classe CarroEsportivo, que é uma subclasse //da classe base Carro. O polimorfismo permite que a instância seja tratada como um objeto da classe base (Carro) ou de //qualquer uma de suas subclasses.

//O método ativarModoEsportivo() é específico da classe CarroEsportivo e não existe na classe base Carro. No entanto, devido //ao polimorfismo, podemos chamar esse método na instância carroPorsche, mesmo que tenhamos declarado a variável como const //carroPorsche = new CarroEsportivo(...).

//Isso ilustra o conceito de polimorfismo, onde objetos de diferentes classes podem ser tratados de maneira uniforme quando //pertencem à mesma hierarquia de herança. O código pode chamar métodos específicos da subclasse, mesmo quando a referência //é da classe base.

