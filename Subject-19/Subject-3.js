// Spread Operatör("...")


const langs = ["python", "javascript" ,"java" ,"c++","c#"]

console.log(...langs)

const langs2 = ["html5" , "css3", ...langs ]

console.log(...langs2)

const numbers = [1,2,3,4,5,6,7,8,9]
const [a,b,...numbers2] = numbers
console.log(a,b,numbers2) 
console.log(a,b,...numbers2) 


const addNumbers = (a,b,c) => console.log(a+b+c)  /// en çok kullandığımız yöntem

const number = [100,200,300]
addNumbers(...number)