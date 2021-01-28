function acaoBotao(){
    var sairloop, valor01, valor02
    do{
        valor01 = prompt("Digite o Primeiro Valor:")
        valor02 = prompt("Digite o Segundo Valor:")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt( valor01) + parseInt( valor02))
        sairloop = prompt("Deseja Sair? S/N")
    }while(sairloop !== "N" || sairloop !== "n")
}