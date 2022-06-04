// Map = her "key" için bir "value"
let mYmap = new Map()

//console.log(mYmap)

const key1 = "Mustafa"
const key2 = { a: 10, b: 20 }
const key3 = () => 2;
//set
mYmap.set(key1, "Strin Değer")
mYmap.set(key2, "Object")
mYmap.set(key3, "Function")

//  get 
//console.log(mYmap.get(key1))
//console.log(mYmap.get(key2))
//console.log(mYmap.get(key3))


//console.log(mYmap)
//console.log(mYmap.size)


const cities = new Map()

cities.set("Ankara" , 10)
cities.set("Adana" , 15)
cities.set("İstanbul" , 25)
cities.set("Gaziantep" , 35)
//ForEach

cities.forEach(function(value,key){
    //console.log(key , value)
})
// For of
for(let [value,key] of cities){
    //console.log(key,value)
}

// Map keys

for(let key of cities.keys()){
    //console.log(key)
}

// map values

for(let value of cities.values()){
    //console.log(value)
}


// Arraylerden map oluşturma
const array = [["key1" , "value1"], ["key2", "value2"]]

const lastMap = new Map(array)

//console.log(lastMap)


// Maplerden array oluşturma 

const items = new Map()

items.set("Ankara" , 10)
items.set("Adana" , 15) 
items.set("İstanbul" , 25)
items.set("Gaziantep" , 35)

const array1 = Array.from(items)
console.log(array1)