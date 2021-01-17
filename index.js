import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Denir", 10000, 421410355214);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("junior", 5000, 555510355214);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 42141093848, 123);

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log("DIRETOR", diretorEstaLogado);
console.log("GERENTE", gerenteEstaLogado);
console.log("CLIENTE", clienteEstaLogado);
