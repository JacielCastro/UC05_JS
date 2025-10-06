
//CRIANDO AS CLASSES COM OS COMPONENTES DE UM COMPUTADOR 
export class memoria{
    #tipo
    #frequencia
    #capacidade
    
    constructor(tipo,frequencia,capacidade){
        this.#tipo = tipo
        this.#frequencia = frequencia
        this.#capacidade = capacidade
    }
    set tipo (tipo01){
        this.#tipo = tipo01
    }
    get tipo (){
        return this.#tipo
    }
    set frequencia(frequencia01){
        this.#frequencia = frequencia01
    }
    get frequencia(){
        return this.#frequencia
    }
    set capacidade(capacidade01){
        this.#capacidade = capacidade01
    }
    get capacidade(){
        return this.#capacidade
    }
    usarMemoria(qtd){ // simula o uso de uma quantidade de memória 
        let result = this.#capacidade - qtd
        console.log(result);
    }
    liberarMemoria(qtd){ // simula a liberação de memória 
        let libera = this.#capacidade + qtd
        console.log(libera);
    }
}

export class processador{
    #marca
    #modelo
    #nucleo
    #velocidade

    constructor(marca,modelo,nucleo,velocidade){
        this.#marca = marca
        this.#modelo = modelo
        this.#nucleo = nucleo
        this.#velocidade = velocidade
    }
    set marca ( marca01 ){
        this.#marca = marca01
    }
    get marca(){
        return this.#marca
    }
    set modelo(modelo01){
        this.#modelo = modelo01
    }
    get modelo(){
        return this.#modelo
    }
    set nucleo (nucleo01){
        this.#nucleo = nucleo01
    }
    get nucleo (){
        return this.#nucleo
    }
    set velocidade(velocidade01){
        this.#velocidade = velocidade01
    }
    get velocidade(){
        return this.#velocidade
    }
    
    executarprograma(programa){ // simula a execução de um programa
        console.log(`${programa} Programa iniciado`);    
    }
}

export class Armazenamento{
    #tipo
    #capacidade
    #espaco_utilizado

    constructor (tipo,capacidade,espaco_utilizado){
        this.#tipo = tipo
        this.#capacidade = capacidade
        this.#espaco_utilizado = espaco_utilizado
    }
    set tipo ( tipo02 ){
        this.#tipo = tipo02
    }
    get tipo (){
        return this.#tipo
    }
    set capacidade ( capacidade01){
        this.#capacidade = capacidade01
    }
    get capacidade(){
        return this.#capacidade
    }
    set espaco_utilizado (espaco_utilizado01){
        this.#espaco_utilizado = espaco_utilizado01
    }
    get espaco_utilizado(){
        return this.#espaco_utilizado
    }

    espacoLivre(){ // calcula o espaço disponivel
        
    }
}

export class tela{ // ligar a tela
    #tamanho
    #resolucao

    constructor (tamanho,resolucao){
        this.#tamanho = tamanho
        this.#resolucao = resolucao
    }
    set tamanho (tamanho01){
        this.#tamanho = tamanho01
    }
    get tamanho(){
        return this.#tamanho
    }
    set resolucao( resolucao01){
        this.#resolucao = resolucao01
    }
    get resolucao(){
        return this.#resolucao
    }
    ligar(){ // ligar a tela do computador

    }
    desligar(){ // desligar a tela do computador 

    }

}
export class computador{
    #marca
    #modelo
    memoria
    processador
    Armazenamento
    tela
    
    constructor(marca,modelo,memoria,processador,Armazenamento,tela){
        this.#marca = marca
        this.#modelo = modelo
        this.memoria = memoria
        this.processador = processador
        this.Armazenamento = Armazenamento
        this.tela = tela
    }
    set marca ( marca01 ){
        this.#marca = marca01
    }
    get marca(){
        return this.#marca 
    }
    set modelo(modelo01){
        this.#modelo = modelo01
    }
    get modelo (){
        return this.#modelo
    }

    imprimeFichatecnica(){ // imprime  todos as caracteristica do computador 
        
    }
    instalarSoftware(nome){ // instala (insere em um array) o software passado por parâmetro e informa ao usuario

    }
    listaSoftware(){ // mostra todos os software instalados 
    
    }
    removerSoftware(nome){ // remove o software escolhido da lista de softwares instalados

    }
}