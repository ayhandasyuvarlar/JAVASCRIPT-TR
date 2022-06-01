let value;

// veri tiplerini string ifadeye dönüştürme
value = 123;
value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function () {
  console.log("hello world");
});
value = String([1, 2, 3, 4]);
value = (10).toString();
value = (3.4).toString();

console.log(value);
console.log(typeof value);

// veri tiplerini number veri tipine dönüştürmek
value = Number("3.14");
value = parseFloat("3.14");
value = parseInt("3")
value = Number("123");
value = Number(null);
value = (Number(undefined) == false) == NaN;
value = Number("hello world") == false;
value = Number(function () {
  console.log("hello world");
}); //== false
value = Number([1, 2, 3, 4]) == false;


// otomatic translete

let a = "hello " + 34 ;

console.log(a);
console.log(typeof a)// == String

let b = Number("34") + 53 ;
console.log(b);
console.log(typeof b)// == Number



