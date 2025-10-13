import PromptSync from "prompt-sync";
import { Atributos} from "../Funções_js/Function.js";
import { ContaBancaria } from "../Aquivo_classes_js/Classe_conta_bancaria.js";
const prompt = PromptSync()

let cliente = new ContaBancaria()
Atributos(cliente); // PASSANDO OBJETO DENTRO DO MÉTODO PARA EMPRIME
cliente.Deposita()
  