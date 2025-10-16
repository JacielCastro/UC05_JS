
import fs from 'fs'
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

function criarDiretorio(nome) { // criando da função para criar pasta 
    try {
        fs.mkdirSync(nome)
    } catch (error) {
        console.error(error.message)
    }    
}
function escrevendoArquivo(){
    try { // REALIZANDO O TRATAMENTO DO TESTE 
        fs.writeFileSync('./Exemplo.js',
            'let linguagem = "javascript"\nconsole.log(`Manipulação do arquivo em ${linguagem}`)','utf-8'
        )
    } catch (error) {
        console.error(message)
    }
}
function descricao(nome) {
    return `\n//Reservas do hotel ${nome}`
}
function escrevendoArquivo02(){ // escreve no arquivo e criar se não exirtir
    try {
        let relatorio = descricao (prompt('Nome do Hotel: '))
        fs.appendFileSync('./manipulação_PATH.js/Exemplo.js',relatorio,'utf-8')
    } catch (error) {
        console.error(error.message)
    }
}
escrevendoArquivo()
escrevendoArquivo02()