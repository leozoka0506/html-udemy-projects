
let cor = ['red', 'green', 'blue', 'yellow', 'purple']

function changeColor(){
    let style = Math.floor(Math.random() *cor.length)
    let stylesort = cor[style]
    document.body.style.backgroundColor = stylesort
}