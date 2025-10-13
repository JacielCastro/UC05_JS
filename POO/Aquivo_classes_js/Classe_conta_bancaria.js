import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class ContaBancaria{
    #nomeTitular
    numeroConta
    numeroAgencia
    #saldo = 0
    dataAbertura

    constructor(nomeTitula,numeroConta,numeroAgencia,saldo,dataAbertura){
        
        this.#nomeTitular = nomeTitula
        this.numeroConta = numeroConta
        this.numeroAgencia = numeroAgencia
        this.#saldo = saldo
        this.dataAbertura = dataAbertura
    }
    set nomeTitular (nomeTitula01){
        this.#nomeTitular = nomeTitula01
    }
    get nomeTitular(){
        return this.#nomeTitular
    }
    set saldo (saldo_cliente){
        this.#saldo = saldo_cliente
    }
    get saldo (){
        return this.#saldo
    }1
    Deposita(valor){
        let saldo_atual,extrato,deposito
        deposito = prompt("Informe o valor que deseja Deposita: ")
        if (deposito > 0) {
            saldo_atual = this.#saldo + deposito
            extrato = prompt("Gostaria de saber o saldo de sua conta atualizado? (sim ou não)? ").toLowerCase()
            if (extrato === "sim") {
                console.log(`Saldo em conta --> ${saldo_atual}`)
            } else {
                console.log("Obrigado pelo uso do nosso serviços !!! ");  
            }    
        } else {
            throw new ContaBancaria(`Valor do deposito invalido. Exemplo --> (R$ 20 ou mais o valor) ${deposito}`) // REALIZANDO O LANÇAMENTO DE ERROR 
        }
    }
    sacar(valor){
        
    }
    calculaRendimento(){

    }    
} 