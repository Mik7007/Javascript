"use strict"

function inseriscintero(min,max) {
    let n 
    do {
        n = +prompt("Inserire un valore di n compreso tra min e max")
    } while(n<min||n>max)
    return n
}

function conta_somma_valori(n,min,max) {
    let counter1 = 0
    let counter2 = 0
    let somma = 0
    let media
    for(let i=0;i<n;i++) {
        let value
        do {
            value = +prompt("Inserire valore compreso tra min e max")
        } while(value<min||value>max)

        if(value%2===0) {
            counter1 = counter1 + 1
        }

        if(value > (min+max)/2) {
            somma = somma + value
            counter2 = counter2 + 1
        }
    }
    media = somma/counter2
    alert(counter1 + " sono pari")
    alert("La media dei valori maggiori di min+max/2 e' " + media)
}


