let exampleObj = {}
fetch('https://pokeapi.co/api/v2/')
    .then((response) => {
        console.log(response)
        return response.text()
    })
    .then((data) => {
        console.log(data)
        let jsonData = JSON.parse(data)
        var image = document.getElementById('example')

        exampleObj = jsonData
    });
