/*escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Dgite a nota 01 do aluno: ")
leia(nota01)
escreval("Digite a nota 02 do aluno: ")
leia(nota02)
media >= (nota 01 + nota 02) /2

se media >= 50 entao
escreva("aprovado!" , nome)
senao
escreva("reprovado" , nome)
fimse*/

var nome, nota01, nots02;
nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Dgite a nota 01 do aluno:")
nota02 = prompt("Digite a nota 02 do aluno:")

media = (parseInt(nota01) + (parseInt(nota02))) / 2;

if(media >= 50){
   alert("aprovado!" + nome)
}
else
   alert("reprovado!" + nome)