import PromptSync from "prompt-sync"
import {Cliente} from "../Hotel_Classes/Classe_Cliente";
const prompt = PromptSync()

export const prompt_atributos = (cliente) => {
    cliente.cpf_cliente = prompt ('Informe o seu CPF: ')
    cliente.nome_cliente = prompt ('Informe o seu nome: ')
    cliente.contato_Cliente = prompt ('Informe o seu contato: ')
}
