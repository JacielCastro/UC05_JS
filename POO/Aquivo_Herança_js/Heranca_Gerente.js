
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