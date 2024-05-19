document.addEventListener("keypress", function (contar) { // Evento que acessa o documento do site, adiciona o evento keypress para acionar a função confirmar pelo "enter".
    if (contar.key === 'Enter') {
        var btn = document.querySelector("#contagem");
        btn.click();
    }
})

function contar() {
    let _inicio = window.document.querySelector('input#ini') // Utilizando let, essas variáveis não vão existir quando saírem desse escopo
    let _fim = window.document.querySelector('input#end')
    let _passo = window.document.querySelector('input#pass')
    var res = window.document.querySelector('div#res')
    if (_inicio.value.length == 0 || _fim.value.length == 0 || _passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(_inicio.value)
        let f = Number(_fim.value)
        let p = Number(_passo.value)
        for (var cont = i; cont <= f; cont += p) {
            res.innerHTML += `${cont} \u{1F449} `
        }
    }
}









// Explicando a lógica do Guanabara, o inicio é o valor inicial da variável, o fim é valor da condição, e o passo é de quanto em quanto até atingir o valor desejado em "fim", tudo o usuário que irá escolher no input do site.