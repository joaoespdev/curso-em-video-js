document.addEventListener("keypress", function (calcular) { // Evento que acessa o documento do site, adiciona o evento keypress para acionar a função confirmar pelo "enter".
    if (calcular.key === 'Enter') {
        var btn = document.querySelector("#botao");
        btn.click();
    }
})

function calcular() {

    let multiplicarNull = window.document.querySelector('input#num1')
    let tab = window.document.querySelector('select#selTab')
    if (multiplicarNull.value.length == 0) {
        window.alert('[ERROR] Insira um valor!')
    } else {
        tab.innerHTML = null
        let multiplicar = Number(multiplicarNull.value)
        for (i = 1; i <= 10; i++) {
            res = i * multiplicar
            let item = document.createElement('option')
            item.text = `${multiplicar} x ${i} = ${multiplicar * i}`
            item.value = `tab${i}` // usado para php, para classificar cada option por ordem numérica, nesse caso: tab1, tab2, tab3 etc...
            tab.appendChild(item)
        }
    }
}