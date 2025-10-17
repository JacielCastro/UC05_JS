import PromptSync from "prompt-sync"
import {Cliente} from "../Hotel_Classes/Classe_Cliente";
import fs from 'fs' 
const prompt = PromptSync()

export const prompt_atributos = (cliente) => {
    cliente.cpf_cliente = prompt ('Informe o seu CPF: ')
    cliente.nome_cliente = prompt ('Informe o seu nome: ')
    cliente.contato_Cliente = prompt ('Informe o seu contato: ')
}
export function criandoDiretorio(nome) {
    try {
        fs.mkdirSync(listas_reservas)
    } catch (error) {
        console.error(error.message);
    }
}
