// Setler 

const myset = new Set()

myset.add(100)
myset.add(100) /// sadece bir değeri bir defa ekler
myset.add(200)
myset.add("ayhan")
myset.add(3.14)
myset.add({a:1, b:2})
myset.add([0,1,2,3])

//console.log(myset)

const myset2 =  new Set([1, 100, {a:1,b:2}, [10,5,14,5], "mustafa", 3.14 , 3535454545343])
//console.log(myset2)


//size
console.log(myset.size)

//delete 
console.log(myset.delete(100))
console.log(myset)

// has

console.log(myset.has(100))

// ForEach

myset.forEach(function(value){
    console.log(value)
})

//For of

for(let prop of myset){
    console.log(prop)
}

//set den array oluşturma
const array = Array.from(myset)

console.log(array)