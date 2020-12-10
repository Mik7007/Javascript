"use strict"
function valutazioni() {

    let n = 0
    let i = 0
    let voti = [0,0,0,0,0,0,0,0,0,0,0]
    do{
        n = +prompt("Inserire un valore tra 1 e 10 (Inserire 0 per terminare)")
        voti[n] += 1
        i ++
    }while(n !== 0 )
    return voti
}
function Moda(array) {

    let max = Math.max(...array)
    let moda = array.indexOf(max)
    alert("La moda della lista è " + moda)
}