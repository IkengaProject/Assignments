let exampleObj = {}
fetch('https://api.nasa.gov/planetary/apod?api_key=qaniESSZsr8cX4NGXwzrprvRH4wJIE6b98ck2bi0')
    .then((response) => {
        console.log(response)
        return response.text()
    })
    .then((data) => {
        console.log(data)
        let jsonData = JSON.parse(data)
        var image = document.getElementById('example')
        image.src = jsonData.url
        exampleObj = jsonData
    });

  // fetch('https://images-api.nasa.gov/search?year_start=2021')
  //   .then(response => response.json())
  //   .then(data => {
  //     var collectionImages = data.collection.items[0].href
  //     var collectionOfImages = data.collection.items
  //     for (var i = 0; i < collectionOfImages.length; i++) {
  //       console.log(collectionOfImages[i].data[0])
  //       var imageInformation = collectionOfImages[i].data[0]
  //       fetch(collectionOfImages[i].href)
  //       .then(response => response.json())
  //       .then(imageList => {
  //         var node;
  //           node = document.createElement("img");
  //           node.src = imageList[0]
  //           document.getElementById("imageDisplay").appendChild(node);
  //       })
  //     }
  //
  //   });
