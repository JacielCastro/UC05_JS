export class Pessoa {
    nome 
    #cpf
    data_nascimento

    constructor(nome,cpf,data_nascimento){
        this.nome = nome
        this.#cpf = cpf
        this.data_nascimento = data_nascimento
    }

    set cpf (cpf01){
        this.#cpf = cpf01
    }
    get cpf (){
        return this.#cpf
    }
    mostrar_informacoes(){  // Mostra todas as informações da pessoa
        console.log(`--> ${this.nome}\n--> ${this.cpf}\n--> ${this.data_nascimento}`);  
    }
}