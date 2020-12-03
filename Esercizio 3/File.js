"use strict"

function maggiore(a,b) {
    let max 
    max = a > b ? a : b
    return max
}

function minore(a,b) {
    let min 
    min = a < b ? a : b
    return min
}

function somma(min,max) {

    let result = 0
    for(let i = min; i <= max; i++) {
        
        result += i
    }
    return result
}

function prodotto(min,max) {

    let result = 1
    for(let i = min; i <= max; i++) {

        if(i%2===0 && i!==0) {
            result = result*i
        }
    }

    return result
}

function multiplo(min,max,k) {

    for(let i = min; i <= max; i++) {

        if(i%k===0) {
            alert(i)
        }
    }
}
