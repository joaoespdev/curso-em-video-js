function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimpar(223) // O programa vai retornar o resultado direto para a variável do parâmetro, nesse caso "let res = Ímpar".
console.log(res)

/* Ou
console.log(parimpar(4)) 
*/