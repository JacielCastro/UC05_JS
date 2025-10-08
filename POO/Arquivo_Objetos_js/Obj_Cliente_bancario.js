import PromptSync from "prompt-sync";
import { ContaBancaria } from "../Aquivo_classes_js/Classe_conta_bancaria";
const prompt = PromptSync()

let cliente = new ContaBancaria(
    prompt ('Informe o seu nome: '),
    Number (prompt ('Digite o número da sua conta: ')),
    Number (prompt ('Digite o número da sua agencia: ')),
    prompt ('Digiti a data da abertura da sua conta: ')
)