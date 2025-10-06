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
    set numeroConta (numeroConta01){
        this.numeroConta = numeroConta01
    } 
    get numeroConta (){
        return this.numeroConta 
    }
    set numeroAgencia (numeroAgencia01){
        this.numeroAgencia = numeroAgencia01
    }
    get numeroAgencia(){
        return this.numeroAgencia
    }
    set saldo (saldo_cliente){
        this.#saldo = saldo_cliente
    }
    get saldo (){
        return this.#saldo
    }
    set dataAbertura(dataAbertura01){
        this.dataAbertura = dataAbertura01
    }
    get dataAbertura(){
        return this.dataAbertura
    }
    sacar(valor){
        
    }
    
} 