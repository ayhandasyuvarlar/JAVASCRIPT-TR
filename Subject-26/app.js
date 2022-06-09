const person = {
    age: 25,
    // tellAge : function(){

    //     // this - person
    //     console.log(this.age)
    // }

    tellAge : () =>{
        console.log(this)
        console.log(this.age)
    }
    // this -window
}

person.tellAge()