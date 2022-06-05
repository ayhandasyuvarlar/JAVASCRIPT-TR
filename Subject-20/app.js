// Object.Create

const obj = {
    test1: function () {
        console.log("test1")
    },
    test2: function () {
        console.log("test2")
    }
}

const emp = Object.create(obj)
emp.name = "ayhan"
emp.age = 20
//console.log(emp)


function Person() {                                                                             //
}                                                                                               //        
Person.prototype.test1 = function () {                                                          //        
    document.getElementById("prototype").innerHTML =` ${this.names} , ${this.age}   `              // 
    console.log(this.names, this.age)                                                             //   kalıtım yani "miras alma işlemi oldu"
}                                                                                                  // 
function Employee(names, age) {                                                                       // 
    this.names = names                                                                                // 
    this.age = age                                                                              //
}                                                                                               //
Employee.prototype = Object.create(Person.prototype)   
Employee.prototype.Style = function(){
    let style = document.getElementById("prototype")
    style.style.color ="gold"
}                                         //
const emp1 = new Employee("Ayhan", 20)                                                          //
                                                                                            //
emp1.Style()                                                                                      //
emp1.test1();                                                                               //

console.log(emp1)