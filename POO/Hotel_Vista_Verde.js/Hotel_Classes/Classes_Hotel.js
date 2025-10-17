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
        function criandoDiretorio(nome) {
        try {
            fs.mkdirSync(listas_Reservas)
        } catch (error) {
            console.error(error.message);
        }
    }
        let reserva = new Reserva(quarto,data,cliente)
        this.reservas.push(reserva)
        //this.reservas.push()
        console.log(this.reservas)
    }
    concelarReserva(quarto,data){

    }
    listarQuartoDisponiveis(){
        console.log("\n=== LISTA QUARTOS DISPONIVEIS ===");
        console.log(this.quartos);
    }
    listaTodasReservas(){
        console.log("\n=== LISTA DE TODAS AS RESERVAS ===");
        console.log(this.reservas);   
    }
    informacoesReserva(){

    }
}