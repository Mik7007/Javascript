"use strict"
function inserisci_intero(min,max,string) {
    alert(string)
    let n
    do {
        n = +prompt("Inserisci un valore valido") 
    } while (n<min||n>max)
    return n
}   
