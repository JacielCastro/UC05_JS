import PromptSync from "prompt-sync";
import { Hotel } from "../Hotel_Classes/Classes_Hotel.js";
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