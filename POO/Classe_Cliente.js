import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Cliente {
    #nome = "string";
    #endereco = "string";
    #renda = "string";
    constructor(nome,endereco,renda) {
        this.#nome = nome
        this.#endereco = endereco
        this.#renda = renda
    }
    set nome(nomecliente) {
        this.#nome = nomecliente
    }
    get nome() {
        return this.#nome
    }
    set renda(rendacliente) {
        this.#renda = rendacliente
    }
    get renda() {
        return this.#renda
    }
    set endereco(enderecocliente) {
        this.#endereco = enderecocliente
    }
    get endereco() {
        return this.#endereco
    }
}