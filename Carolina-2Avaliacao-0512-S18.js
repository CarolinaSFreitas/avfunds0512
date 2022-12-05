/*
Turno: Manhã
Nome do aluno: Carolina Soares Freitas
*/

/* 01 - Escreva um script que leia a idade (em anos) e a altura (em cm) de uma pessoa.
Caso seja menor de idade e tenha altura inferior 160cm a informe: “Acesso permitido”. 
Caso contrário informe: “Acesso não permitido”. */
const prompt = require("prompt-sync")()
const idade = Number(prompt("Qual sua idade? "))
const altura = Number(prompt("Digite sua altura(em cm): "))

if (idade < 18 && altura < 160) {
    console.log("Acesso permitido");
} else {
    console.log("Acessão não permitido")
}

/* 02 – Reescrever o script anterior utilizando as regras de De Morgan (vistas em aula), 
ajustando o algoritmo para negar a condição de modo que a mensagem “Acesso não permitido” seja 
exibida no <if> e a mensagem “Acesso permitido” seja exibida no <else> */
const prompt = require("prompt-sync")()
/* Cole seu código aqui */

/* 03 – Faça um script que leia o valor de duas notas de um estudante. 
Calcule a média e exiba na tela. Após exibir a média exiba uma das mensagens abaixo:
    "Caramba! Parece o Edécio!", se a média for igual a 10.
    "Mandou bem!", se a média for maior ou igual a 6 e menor do que 10
    "Que triste!", se a média for menor do que 6 */
const prompt = require("prompt-sync")()
const nota1 = Number(prompt("1ª Nota: "))
const nota2 = Number(prompt("2ª Nota: "))

const media = (nota1 + nota2) / 2

console.log(`Média final: ${media}`)

if (media == 10) {
    console.log("Caramba! Parece o Edécio!")
} else if (media >= 6 && media < 10) {
    console.log("Mandou bem!")
} else if (media < 6) {
    console.log("Que triste!")
}

/* 04 – Escreva um script que pergunte o turno que o usuário gosta de trabalhar.
A resposta deverá ser “M”, “T” ou “N” (sem aspas). 
M – Manhã
T – Tarde
N – Noite
Dependendo da resposta o sistema deverá exibir a mensagem:
"Deus ajuda que cedo madruga" - Para quem responder M
"Bem comum. Grande coisa!" - Para quem responder T
"Se achando morcegão (vai dormir, Batman!)" - Para quem responder N
"Bebeu ou fez uso de substâncias tóxicas!" - Para quem responder algo diferente de M, T ou N */
const prompt = require("prompt-sync")()

const turno = prompt("Responda qual turno você gosta de trabalhar (M, T, N): ")

if (turno == "M" || turno == "m") {
    console.log("Deus ajuda quem cedo madruga!");
} else if (turno == "T" || turno == "t") {
    console.log("Bem comum. Grande coisa!")
} else if (turno == "N" || turno == "n") {
    console.log("Se achando morcegão (vai dormir, Batman!)")
} else {
    console.log("Bebeu ou fez uso de substâncias tóxicas!")
}