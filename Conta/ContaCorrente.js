import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }

  //sobrescreve o comportamento de sacar (Classe mãe)
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}
