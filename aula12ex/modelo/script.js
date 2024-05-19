document.addEventListener("keypress", function (confirmar) { // Evento que acessa o documento do site, adiciona o evento keypress para acionar a função confirmar pelo "enter".
    if (confirmar.key === 'Enter') {
        var btn = document.querySelector("#verificar");
        btn.click();
    }
})
function confirmar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('anoNasc')
    var res = document.querySelector('div#res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // ESSA É A FORMA DE DECLARAR UM IMG JUNTAMENTE DE SEU ID, QUE NO CASO É "foto" EM JS. É equivalente a <img id="foto" src="ex.png" alt="">
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <= 3) {
                //bebe
                img.setAttribute('src', 'hbebe.png')
            } else if (idade > 3 && idade <= 10) {
                //criança
                img.setAttribute('src', 'hcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'hjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'hadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'hidoso.png')
            }
        } else if (sexo[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'mbebe.png')
            } else if (idade >= 5 && idade <= 10) {
                //criança
                img.setAttribute('src', 'mcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'madulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'midoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
