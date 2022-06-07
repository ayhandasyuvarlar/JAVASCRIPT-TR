class Person{     //SuperClass veya Baseclass
    constructor(name , age){
        this.name = name
        this.age = age
    }
    showInfos(){
        console.log(this.name, this.age)
    }
} 

class Employee  extends Person{  // Derivedclass , Subclass , ChildClass
    constructor(name , age ,salary){
        super(name ,age) //önceki classdan kalıtım yani miras alır.
        this.salary = salary
    }
    showInfos(){  // Overriding
        console.log(this.name, this.age, this.salary)
    }
    raiseSalary(amount){
        this.salary += amount
    }
}
const emp =  new Employee("ayhan", 25 , 10000)
emp.raiseSalary(5000)

emp.showInfos();