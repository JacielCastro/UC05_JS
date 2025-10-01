import PromptSync from "prompt-sync";
import { Pessoa } from "./EXC_Heranca.js";

const prompt = PromptSync()

let teste = new Pessoa(
    prompt ("Informe o seu nome: "),
    prompt ("Infrome o seu cpf: "),
    prompt ("Informe a sua data de nascimento: ")
)
teste.mostrar_informacoes()