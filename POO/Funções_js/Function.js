import PromptSync from "prompt-sync"
const prompt = PromptSync()
export const Atributos = (a,b,c,d,e) =>{
    nomeTitular = prompt ('Informe o seu nome: '),
    numeroConta = Number (prompt ('Digite o número da sua conta: ')),
    nemeroAgencia = Number (prompt ('Digite o número da sua agencia: ')),
    saldo = Number ( prompt('Informe o saldo da conta'))
    dataAbertura = prompt ('Digiti a data da abertura da sua conta: ')
    console.log(`Nome do cliente --> ${nometitular}\n
        Número da conta --> ${numeroConta}\n
        NúmeroAgencia --> ${numeroAgencia}\n
        Saldo em conta --> ${saldo}\n
        Data da abertura de conta --> ${dataAbertura}`);

}
