console.log(this) // Global scopeSS

const emp1 = { // Object literal
    name :"Ayhan",
    age : 25
}
const emp2 = {
    name :"Mustafa",
    age : 35
}

emp1.salary = 4000

//console.log(emp1)

function Employee(name, age , salary){  // Yapıcı fonksiyon -- Constructor
    this.name = name
    this.age = age
    this.salary = salary
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary)
    }
}

Employee();
const emp = new Employee("Mustafa",25 , 4000)

emp.showInfos()
