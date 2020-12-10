"use strict"
function risolvi_equazione(a,b,c,) {
    while(a === 0) {
        a = +prompt("Inserire un valore di a diverso da 0")
    }
    let delta
    delta = b*b-4*a*c
    alert(`Il delta e' ${delta}`)

    if(delta > 0) {
    let sol1, sol2
    sol1 = (-b + Math.sqrt(delta))/2*a
    sol2 = (-b - Math.sqrt(delta))/2*a
    alert(`Le soluzioni sono ${sol1} e ${sol2}`)
    } 
    else if(delta === 0) {
        let sol0
        sol0 = -b/2*a
        alert(`Le soluzioni sono conicidenti in ${sol0}`)
    } 
    else {
        alert("Non esistono soluzioni")   
    }

}