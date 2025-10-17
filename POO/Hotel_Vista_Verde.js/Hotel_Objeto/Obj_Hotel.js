import PromptSync from "prompt-sync";
import { Hotel } from "../Hotel_Classes/Classes_Hotel.js";
const Prompt = PromptSync()


console.log(`  \n===== SEJA BEM VINDO AO HOTEL VISTA VERDE =====
    ==== FAÇA A SUA RESERVA EM NOSSO HOTEL ====
        
        ATENDENTE DO NOSSO HOTEL DIGITI (1)
        SE FOR CLIENTE DIGITI (2)`);

    
let hotel = new Hotel ()
<<<<<<< HEAD
//hotel.adicionarQuarto(30,"solteiro")
//hotel.adicionarQuarto(15,"familia")
hotel.listarQuartoDisponiveis()
hotel.reservaQuarto(25,"20/10/2025","Jaciel Castro") // ESTOU ADICIONANDO O UMA RESERVA NO HOTEL, ATRAVES DE UM METODO NA CLASSE HOTEL
hotel.listaTodasReservas()

=======
hotel.adicionarQuarto(30,"solteiro")
hotel.adicionarQuarto(25,"solteiro")
hotel.adicionarQuarto(15,"familia")

hotel.listarQuartoDisponiveis()

hotel.reservaQuarto(30,"solteiro","30/10/2025","Juliana Karoline")// ESTOU ADICIONANDO O UMA RESERVA NO HOTEL, ATRAVES DE UM METODO NA CLASSE HOTEL
//hotel.reservaQuarto(25,"solteiro")
hotel.listaTodasReservas()
>>>>>>> 8510ded9ce4ebad619fb987143b8a67d377a888f
