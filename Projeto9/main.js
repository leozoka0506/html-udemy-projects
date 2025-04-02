let idade = parseInt(prompt("Qual sua idade?"))
let eleitor = prompt("Tem titulo de eleitor?")

if(idade>17 && eleitor == 'Sim'){
    alert('Pode votar')
}
else if(idade>17 && eleitor == 'Não'){
    alert('Falta o Titulo')
}
else{
    alert('não tem idade minima')
}
