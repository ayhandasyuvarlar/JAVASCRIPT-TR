let value;

const Arc = {
  Name: "Osman",
  Lastname: "Bulut",
  age: 22,
  email: "osmanblt@gmail.com",
  langs: ["python", "java", "javascript", "c++", "c#"],
  adrees: {
    country: "Turkey",
    city: "Gaziantep",
    street: "Binevler",
  },

  work: function () {
    console.log("Programcı çalışıyor");
  },
};

value = Arc;

value = Arc.Name;
value = Arc.email

Arc.work();


const program = [
    {Name :"Murat" ,age : 25 , city :"Gaziantep"},
    {Name :"Ali" , age : 25 , city :"İstanbul"}

]

value = program[0].Name

console.log(value);
