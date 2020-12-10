"use strict"

function divisori(k) {
    let count = 0
    for(let i=1;i<k+1;i++) {
        if(k%i===0) {
            count = count+1
        }
    }
    return count
}

let isprimo = (n) => divisori(n)===2 ? true : false

let Inseriscitraestremi = (k) => k>0&&k<1000 ? true : false