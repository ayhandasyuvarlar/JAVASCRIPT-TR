// Kalıtım - Inheritance
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.showInfos = function () {
    console.log(this.name, this.age)
}
//const person = new Person("Ayhan", 21)
//console.log(person)

function Employee(name, age, salary) {
    Person.call(this, name, age)
    this.salary = salary

}
// Overriding - İptal etme işlemi
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.showInfos = function () {
    console.log(this.name, this.age, this.salary)
}

const emp = new Employee("Mustafa", 25, 5000)

console.log(emp)
emp.showInfos()