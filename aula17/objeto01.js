let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p // this = palavra de auto referência ao objeto  
}}

amigo.engordar(2) // a partir da chamada da função, aparece "engordou"
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)