/// Function definition

function hello(name = "Information no ", age = "Information no ") {
  // if(typeof name  === "undefined" ) name = "Information no"
  // if(typeof age  === "undefined") age ="Information no"
  console.log(`Name: ${name} Age: ${age}`);
}

hello("Ayhan", 25); // Function Call

function square(x) {
  console.log(x * x);
}
////falseeeee
function cube(x) {
  console.log(x * x * x);
}

let a = square(120);

a = cube(a);

function square(x) {
  return x * x;
  //console.log("hello")   //return after code is not translate and does not work
}

function cube(x) {
  /////// true
  return x * x * x;
}

let b = cube(square(12));

console.log(b);

function hello() {
  return "Hello World";
}

console.log(hello());

//Function Expression

const hello = function (name) {
  console.log("hello" + name);
};
hello("Fatih")(
  // Immediately Invoked Funciton Expression(IIFE)

  function (name) {
    console.log("hello" + name);
  }
)("Fatih");

const database = {
  host: "localhost",
  add: function () {
    console.log("Add");
  },
  get: function () {
    console.log("Okey ,success");
  },
  update: function (id) {
    console.log(`Id: ${id} Update`);
  },
  delete: function (id) {
    console.log(`Id: ${id} Delete`);
  },
};

console.log(database.host);

database.add();

database.delete(10);
