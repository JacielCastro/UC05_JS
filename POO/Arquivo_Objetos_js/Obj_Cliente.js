import {Cliente} from "./Classe_Cliente.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync()

let cliente_01 = new Cliente();
cliente_01.nome = prompt("Informe o seu nome: ");
cliente_01.endereco = prompt("Informe o seu endereco: ")
cliente_01.renda = prompt("informe sua renda: ")

console.log("\n===== RESULTADOS =====\n");
console.log(`Nome do cliente --> ${cliente_01.nome}\nEndereço atual --> ${cliente_01.endereco}\nInforme a sua renda --> ${cliente_01.renda}\n`);

console.log("-----------------------------------------------\n");

let cliente_02 = new Cliente();
cliente_02.nome = prompt("Informe o seu nome: ")
cliente_02.endereco = prompt("Informe o seu endereco: ")
cliente_02.renda = prompt("Informe sua renda: ")

console.log("\n===== RESULTADOS =====\n");
console.log(`Nome do cliente --> ${cliente_02.nome}\nEndereço atual --> ${cliente_02.endereco}\nInforme a sua renda --> ${cliente_02.renda}\n`);