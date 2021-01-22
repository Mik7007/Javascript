const fetch = require("node-fetch")


let id = 3
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        data.filter((e) => {
            if(e.userId === id){
                console.log(e.body)
            }
        })
    })