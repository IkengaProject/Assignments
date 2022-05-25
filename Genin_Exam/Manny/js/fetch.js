let myB = document.getElementById('pokeButton')
let searchPoke=()=> {
let querey=""
let exampleObj = {}
querey= document.getElementById('pokeText').value
fetch('https://pokeapi.co/api/v2/pokemon/'+querey)
    .then((response) => {
        console.log(response)
        return response.text()
    })
    .then((data) => {
        console.log(data)
        let jsonData = JSON.parse(data)
        document.getElementById("weight").innerHTML=jsonData.weight
        var image = document.getElementById('example')
        image.src = jsonData.sprites.other["official-artwork"].front_default
        console.log(jsonData.sprites);
        exampleObj = jsonData
    });
  //  .then(()=>{
    //  fetch()


  //  })
}
myB.addEventListener("click",searchPoke)
