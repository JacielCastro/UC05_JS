
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
    set salario(salario01){
        this.#salario = salario01
    }
    get salario (){
        return this.#salario
    }
    set matricula (matricula01){
        this.#matricula = matricula01
    }
    get matricula (){
        return this.#matricula 
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
        let bonus = 0, salario_atual
        if (this.quantidadesEquipe >= 10) {
            bonus = this.salario * 0.15 // THIS.SALARIO SE REFERE AO ATRIBUTO DA CLASSE E NÃO AVARIAVEL QUE FOI CRIADA
        }else{
           bonus = this.salario * 0.7
        }
        salario_atual = this.salario + bonus
        console.log(`Salario --> ${this.salario}\nBonus de equipe --> ${bonus}\nSalario bruto --> ${salario_atual}`);
    }
    mostrar_informacoes(){  // Mostra todas as informações da pessoa
        super.mostrar_informacoes()
        console.log(`--> ${this.setor}\n--> ${this.quantidadesEquipe}`);  
    }
} 