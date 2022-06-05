// Prototype

//**en temel
// const object = new Object()
// const object1 = new Object()
// object.name ="Ayhan"
// console.log(object)

function Employee(name , age){
    this.name = name
    this.age = age
    this.showInfos = function(){
        console.log("Bilgiler gösteriliyor...")
    }
}

const emp1 = new Employee("ayhan", 21)
//console.log(emp1)


function Employee1(name, age){
    this.name = name
    this.age = age
}
Employee1.prototype.showInfos = function(){
    document.getElementById("prototype").innerHTML = `İsminiz : ${this.name}, <br> Yaşınız: ${this.age}`
}
const emp = new  Employee1("Ayhan", 20)
emp.showInfos()
console.log(emp)
