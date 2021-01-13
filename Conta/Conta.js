//Classe abstrata
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor === Conta) {
      throw new Error(
        "Você não deve instanciar um tipo Conta diretamente pois essa é uma classe abstrata"
      );
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  // Método abstrato
  sacar(valor) {
    throw new Error("O método sacar da conta é abstrato");
  }

  _sacar(valor, taxa) {
    let valorSacado = taxa * valor;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor) {
    if (valor < 100) {
      return;
    }
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
