import PromptSync from "prompt-sync";
import {Pessoa,Funcionario,Gerente } from "./EXC_Heranca.js";

const prompt = PromptSync()

// let teste = new Pessoa(
//     prompt ("Informe o seu nome: "),
//     prompt ("Infrome o seu cpf: "),
//     prompt ("Informe a sua data de nascimento: ")
//)
// let teste01 = new Funcionario(
//     prompt ("Informe o seu nome: "),
//     prompt ("Informe o seu cpf: "),
//     prompt ("Infome a sua data de nascimento: "),
//     prompt ("informe o seu cargo: "),
//     prompt ("Informe o seu salario: "),
//     Number (prompt("Informe a sua matricula: "))
// )
//teste.mostrar_informacoes()

let teste02 = new Gerente(
    prompt ("Informe o seu nome: "),
    prompt ("Informe o seu cpf: "),
    prompt ("Infome a sua data de nascimento: "),
    prompt ("informe o seu cargo: "),
    Number (prompt("Informe o seu salario: ")),
    Number (prompt ("Informe a sua matricula: ")),
    prompt ("Informe o seu setor: "),
    Number (prompt("Informe a quantidade da sua equipe: "))
)
teste02.mostrar_informacoes()
teste02.calculoBonificacao()
