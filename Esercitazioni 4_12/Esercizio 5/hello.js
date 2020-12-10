"use strict"

function generarandom() {
    let k
    k = Math.floor(Math.random()*1000)
    return k
}

function ciclo(k) {
    let x
    do {
        do {
            x = +prompt("Inserire un valore compreso tra 0 e 1000")
        } while (x<=0||x>=1000)
        if(x>k) {
            alert("Il tuo valore è maggiore di quello ricercato")
        } else if(x<k) {
            alert("Il tuo valore è minore di quello ricercato")
        } else {
            alert("Hai indovinato!")
        }
    } while (x!==k)
    alert("Il valore ricercato era " + k)
}