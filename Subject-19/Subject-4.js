// For In ve  For of Döngüleri

const person = {
    name: "Ayhan dasyuvarlar",
    age: 21,
    salary: 5000
}

const langs = ["python", "php", "java","javascript"]

const name = "ayhan"

// For In
// Object
for (let prop in person){
    console.log(prop,person[prop])
}
// Array
for(let index in langs){
    console.log(index,langs[index])
}

// String

for(let index in name){
    console.log(index,name[index])
}

// for of    // sadece string ve arraylar da gezinebiliriz objeler üzerinde gezinemeyiz
for( let prop of langs){ 
    console.log(prop)
}

for( let value of name){
    console.log(value)
}
