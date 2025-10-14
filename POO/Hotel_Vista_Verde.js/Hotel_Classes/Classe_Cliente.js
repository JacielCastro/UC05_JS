import PromptSync from "prompt-sync";
const prompt = PromptSync()
import function_Hotel from "../Hotel_Function/Function_Hotel.js"
import { Hotel } from "./Classes_Hotel.js";
export class Cliente extends Hotel{
    #cpf
    nome
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
Cliente.function_Hotel()