// Definição da classe base (Carro)
class Carro {
    constructor() {
        this._velocidade = 0; // Atributo protegido
    }

    acelerar(valor) {
        if (valor > 0) {
            this._velocidade += valor;
            console.log("Acelerando...");
        }
    }

    frear(valor) {
        if (valor > 0 && this._velocidade >= valor) {
            this._velocidade -= valor;
            console.log("Freando...");
        }
    }

    get velocidade() {
        return this._velocidade;
    }
}

// Definição da primeira classe filha (LojaDeCarros1)
class LojaDeCarros1 extends Carro {
    constructor() {
        super(); // Chama o construtor da classe pai (Carro)
        this._nomeLoja = "Loja 1";
    }
}

// Definição da segunda classe filha (LojaDeCarros2)
class LojaDeCarros2 extends Carro {
    constructor() {
        super(); // Chama o construtor da classe pai (Carro)
        this._nomeLoja = "Loja 2";
    }
}

// Criação de instâncias
const carroLoja1A = new LojaDeCarros1("Loja 1");
console.log("Velocidade inicial da", carroLoja1A._nomeLoja + ":", carroLoja1A.velocidade);
carroLoja1A.acelerar(30);
console.log("Nova velocidade após aceleração da", carroLoja1A._nomeLoja + ":", carroLoja1A.velocidade);

const carroLoja1B = new LojaDeCarros1("Loja 1");
console.log("Velocidade inicial da", carroLoja1B._nomeLoja + ":", carroLoja1B.velocidade);
carroLoja1B.frear(10);
console.log("Nova velocidade após freio da", carroLoja1B._nomeLoja + ":", carroLoja1B.velocidade);

const carroLoja2 = new LojaDeCarros2("Loja 2");
console.log("Velocidade inicial da", carroLoja2._nomeLoja + ":", carroLoja2.velocidade);
carroLoja2.acelerar(20);
console.log("Nova velocidade após aceleração da", carroLoja2._nomeLoja + ":", carroLoja2.velocidade);
