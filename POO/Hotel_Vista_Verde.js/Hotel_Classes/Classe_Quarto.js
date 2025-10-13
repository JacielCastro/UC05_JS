import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Quarto {
    numero_Quarto
    tipo_Quarto

    constructor (numero_Quarto,tipo_Quarto){
        this.numero_Quarto = numero_Quarto
        this.tipo_Quarto = tipo_Quarto
    }
}