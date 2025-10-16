import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Cliente extends Hotel{
    #cpf
    #contato
    constructor(cpf,nome_Cliente,contato){
        this.#cpf = cpf
        this.nome = nome_Cliente
        this.#contato = contato
        
    }
    set cpf (cpf_Cliente){
        this.#cpf = cpf_Cliente
    }
    get cpf (){
        return this.#cpf 
    }
    set contato (contato_Cliente){
        this.#contato = contato_Cliente
    }
    get contato (){
        return this.#contato
    }
}
// Cliente.function_Hotel()