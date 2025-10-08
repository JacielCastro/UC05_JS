import PromptSync from "prompt-sync";
const prompt = PromptSync()
let valor

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
    }
    Deposita(valor){
        if (valor > 0) {
            saldo = this.saldo + valor
        } else {
            console.log(`Tentativa do deposito invalido !!\nValor que estar tentando deposita --> ${valor}`); 
        }
    }
    sacar(valor){
        
    }
    calculaRendimento(){

    }
    
} 