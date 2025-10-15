import PromptSync from "prompt-sync";
import { Hotel } from "../Hotel_Classes/Classes_Hotel.js";
import { Reserva } from "../Hotel_Classes/Classe_Reserva.js";
const Prompt = PromptSync()


console.log(`  ===== SEJA BEM VINDO AO HOTEL VISTA VERDE =====
    ==== FAÇA A SUA RESERVA EM NOSSO HOTEL ====
        ATENDENTE DO NOSSO HOTEL DIGITI (1)
        SE FOR CLIENTE DIGITI (2)`);

    
let hotel = new Hotel ()
hotel.adicionarQuarto(30,"solteiro")
// hotel.listarQuartoDisponiveis()
hotel.adicionarQuarto(15,"familia")
hotel.listarQuartoDisponiveis()

let res_cliente = new Reserva()
res_cliente.reservaQuarto(25,"20/10/2025","Jaciel Castro")
// res_cliente.listarTodasReservas()