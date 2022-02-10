
let name = "Tony"
let age = "55"
let favoriteFood = "Burrito"

let person = {
  name: "Tony",
  age: 55,
  favoriteFood: "Burrito",
  sayHello: () => {
    console.log("Hellow")
  }
}

console.log(person.name)

let testFunction1 = () => {
  return 5
}

let testFunction2 = () => {
  console.log("Hello")
  return undefined
}

console.log(testFunction1() + 5)

console.log(testFunction2() + 5)
