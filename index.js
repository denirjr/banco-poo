import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente";
import { Diretor } from "./Funcionario/Diretor";

const diretor = new Diretor('Denir', 10000, 421410355214)
const gerente = new Gerente('junior', 5000, 555510355214)

SistemaAutenticacao.login(diretor, '123456789')
