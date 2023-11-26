//Exemplo real de encapsulamento:

class ContaBancaria {
    constructor(saldo) {
      this._saldo = saldo;  // Atributo protegido
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor > 0) {
        this._saldo += valor;
        console.log("Depósito realizado com sucesso.");
    }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
        this._saldo -= valor;
        console.log("Saque realizado com sucesso.");
    } else {
        console.log("Saldo insuficiente.");
    }
    }
}

  // Uso da classe
const minhaConta = new ContaBancaria(1000);
console.log("Saldo inicial:", minhaConta.saldo);
minhaConta.depositar(500);
console.log("Novo saldo após depósito:", minhaConta.saldo);
minhaConta.sacar(200);
console.log("Novo saldo após saque:", minhaConta.saldo);