var agora = new Date()
var diaSem = agora.getDay()

//var diaSem = 2
/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

//console.log(diaSem)

switch(diaSem) { // Essa condição faz com que faça mais sentido para o usuário os dias da semana. Ao invés de imprimir apenas o valor de diaSem, vai traduzir para os dias da semana.
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
}

/*if (diaSem == 0) {
    console.log('Domingo')
} else if (diaSem == 1) {
    console.log('Segunda')
} else if (diaSem == 2) {
    console.log('Terça')
} else if (diaSem == 3) {
    console.log('Quarta')
} else if (diaSem == 4) {
    console.log('Quinta')
} else if (diaSem == 5) {
    console.log('Sexta')
} else if (diaSem == 6) {
    console.log('Sábado')
} else {
    console.log('[ERRO] Dia inválido!')
} Utilizando if eu teria que escrever bem mais, escrevendo a variável repetidas vezes sem necessidade, junto dos operadores relacionais, também teria que ficar abrindo e fechando blocos*/