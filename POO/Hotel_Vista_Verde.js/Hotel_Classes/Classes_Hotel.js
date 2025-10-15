import PromptSync from "prompt-sync";
import { Quarto } from "./Classe_Quarto.js";
import { Reserva } from "./Classe_Reserva.js";
const prompt = PromptSync()

export class Hotel{
    constructor(nome,quarto = [],reserva = []){
        this.nome = nome
        this.quartos = quarto
        this.reservas = reserva
    }
    adicionarQuarto(numero,tipo){
        let quarto = new Quarto(numero,tipo) 
        this.quartos.push(quarto)
        // console.log(this.quartos);      
    }
    reservaQuarto(quarto,data,cliente){
        let reserva = new Reserva(quarto,data,cliente)
        this.reservas.push(reserva)
        console.log(this.reservas)
    }
    concelarReserva(quarto,data){

    }
    listarQuartoDisponiveis(){
        console.log(this.quartos);
    }
    listaTodasReservas(){
        console.log(this.reservas);   
    }
    informacoesReserva(){

    }
}