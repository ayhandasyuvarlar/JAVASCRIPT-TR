let a = "ayhan"
let b = "ahmet"

if (a === b) {
    console.log("eşittir")
}

function arrayset() {
    let array = [1, 2, 3, 4, 5]
    let array1 = [1, 2, 3, 4, 5]
    if (array === array1) {
        console.log("eşittir")
    } else {
        console.log("eşit değil")
    }

}
arrayset()


function objectSet() {
    const person = {
        name: "ayhan",
        age: "25"
    }
    const person1 = {
        name: "ayhan",
        age: "25"
    }
    if (person === person1) {
        console.log("olumlu")
    } else {
        console.log("olumsuz")
    }
}
objectSet()


const cities = new Map()
const key = [1,2,3]
cities.set("Ankara", 5)
cities.set("Kahramanmaraş" ,10)
cities.set(key,"Array")
console.log(cities.get(key))
