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
    }
    Deposita(valor){
        let saldo,saldo_atual
        valor = prompt("Informe o valor que deseja Deposita: ")
        if (valor > 0) {
            saldo = saldo + valor
            saldo_atual = prompt("Gostaria de saber o saldo de sua conta atualizado? (sim ou não)? ").toLowerCase()
            if (saldo_atual === "sim") {
                console.log(Data.toLocaleString('pt-BR'))
                console.log(`Saldo em conta --> ${saldo}`)
            } else {
                console.log("Obrigado pelo uso do nosso serviços !!! ");  
            }
            
        } else {
           // console.log(`Tentativa do deposito invalido !!\nValor que estar tentando deposita --> ${valor}`); 
            throw new contabancaria_Error(`Tentativa do deposito invalido !!\nValor que estar tentando deposita --> ${valor}`) // REALIZANDO O LANÇAMENTO DE ERROR 
        }
    }
    sacar(valor){
        
    }
    calculaRendimento(){

    }
    
} 