let  myButton = document.getElementById('my-button')
function myFunc() {
let newText=""

let num = Number(document.getElementById("my-text-feild").value)
  num =(num +10)
let currentYear= 2021
console.log(num)
 if ( num > currentYear) {
  newText= "It is not old"
}
else {
newText= "It is considered old"
}

document.getElementById("newText").innerHTML=newText;
}
myButton.addEventListener("click",myFunc)
