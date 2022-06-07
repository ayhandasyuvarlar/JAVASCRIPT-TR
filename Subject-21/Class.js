// Syntactic  sugar

 //ecmascript 6 after

// function Employee(name, age , salary){
//     this.name = name
//     this.age = age
//     this.salary = salary
// }                                                  

// Employee.prototype.showInfos = function(){
//   console.log(this.name , this.age , this.salary)
// }

// const emp = new Employee("ayhan" ,25 , 4000)

// emp.showInfos();

// ecmascript 6 before

class Employee {
    constructor(name ,age ,salary){
        this.name = name 
        this.age = age
        this.salary = salary
    }
    showInfos(){
        console.log(this.name , this.age , this.salary)
    }

}

const empy = new Employee("ayhan", 25 ,5000)
empy.showInfos();