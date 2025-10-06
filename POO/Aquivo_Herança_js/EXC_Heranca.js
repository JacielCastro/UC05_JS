
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
export class Funcionario extends Pessoa{
    cargo
    #salario
    #matricula

    constructor(nome,cpf,data_nascimento,cargo,salario,matricula){
        super(nome,cpf,data_nascimento)
        this.cargo = cargo
        this.#salario = salario
        this.#matricula = matricula
    }
    calculo_horaExtra(qtd_hora){
        let salario_hrs_Ext,valor_h = 15, vlr_ttl_h
        vlr_ttl_h = qtd_hora * valor_h
        salario_hrs_Ext = this.#salario + vlr_ttl_h

        console.log(`O valor total do salario com as horas extras --> ${salario_hrs_Ext}`);    
    }
    mostrar_informacoes(){  // Mostra todas as informações da pessoa
        super.mostrar_informacoes()
        console.log(`--> ${this.cargo}\n--> ${this.#salario}\n--> ${this.#matricula}`);  
    }
}

export class Gerente extends Funcionario{
    setor
    quantidadesEquipe

    constructor(nome,cpf,data_nascimento,cargo,salario,matricula, setor,quantidadesEquipe){
        super(nome,cpf,data_nascimento,cargo,salario,matricula)
        this.setor = setor
        this.quantidadesEquipe = quantidadesEquipe
    }
    calculoBonificacao() { // CALCULANDO A POCENTAGEM DO BONUS DO GERENTE  
        let bonus
        if (this.quantidadesEquipe >= 10) {
            bonus = this.salario * 0.15 // THIS.SALARIO SE REFERE AO ATRIBUTO DA CLASSE E NÃO AVARIAVEL QUE FOI CRIADA
        }else{
           bonus = this.salario * 0.7
        }
        console.log(bonus);
    }
    mostrar_informacoes(){  // Mostra todas as informações da pessoa
        super.mostrar_informacoes()
        console.log(`--> ${this.setor}\n--> ${this.quantidadesEquipe}`);  
    }
} 