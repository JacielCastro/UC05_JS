import PromptSync from "prompt-sync"
import {ContaBancaria} from "../Aquivo_classes_js/Classe_conta_bancaria.js"
const prompt = PromptSync()
export const Atributos = (atribui) =>{// PASSANDO OBJETO COMO PARAMETRO NA FUNÇÃO E CRIANDO UMA FUNÇÃO PARA OS PROMPT DOS STRIBUTOS DO OBJETO 
    atribui.nomeTitular = prompt ('Informe o seu nome: '),
    atribui.numeroConta = Number (prompt ('Digite o número da sua conta: ')),
    atribui.numeroAgencia = Number (prompt ('Digite o número da sua agencia: ')),
    atribui.saldo = Number ( prompt('Informe o saldo da conta: '))
    atribui.dataAbertura = prompt ('Digiti a data da abertura da sua conta: ')
    console.log(`\n========== Informações do cliente =========
        Nome do cliente --> ${atribui.nomeTitular}
        Número da conta --> ${atribui.numeroConta}
        NúmeroAgencia --> ${atribui.numeroAgencia}
        Saldo da conta --> ${atribui.saldo}
        Data da abertura de conta --> ${atribui.dataAbertura}\n`);
}
