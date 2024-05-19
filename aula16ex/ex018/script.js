// No programa, a variável "n" é utilizada como parâmetro nas funções isNumero e inLista para permitir a reutilização dessas funções com diferentes entradas. Ao invés de referenciar diretamente a variável global  num, que é o input do usuário, o uso de "n" como parâmetro torna as funções mais versáteis e reutilizáveis em outros contextos, se necessário.

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Parâmetro "l": Permite que a função verifique a presença de "n" em qualquer lista fornecida, não apenas em valores.

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// repare que em "!inLista" podemos checar os dois novos parâmetros que demos, utilizando a função inLista() dentro da função adicionar(). Me refiro a num.value e valores, que na função original são "n" e "l".
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option') // criando item de forma dinâmica
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // esvaziar o input para não precisar apagar o número anterior
    num.focus() // voltar o foco no input para não precisar selecionar antes de atribuir outro número a lista
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

// TENTAR TRANSFORMAR EM ARROW FUNCTION NO FINAL DA AULA
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions