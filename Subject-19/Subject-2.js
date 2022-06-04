
// Destructing


// Destructing After
let number1, number2;

arr = [100, 200, 300, 400]

number1 = arr[1]
number2 = arr[2]



//Destructing Before

array = [100, 200, 300, 400]

let [number3, number4] = array;

// Object Destructing 

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
}

const{a:num1,b:num2,c:num3,d:num4,e:num5} = numbers;
console.log(num1,num2,num3,num4,num5)


//Function Destructing 

const getLangs = () =>{
    return ["python", "c++" ,"javascript" ,"java"]
}

const[lang1 , lang2 , lang3 ,lang4] = getLangs();

console.log(lang1,lang2,lang3,lang4)

const person = {
   firstName : "Ali",
   lastName : "Kiraz",
   age: 34,
   job:"Teacher",
   showInfos : () => console.log("Bilgiler gösteriliyor...")
}

const {firstName:İsim , lastName:Soyisim, age:yaş, job:meslek, showInfos:bilgilerigöster} = person 

console.log(İsim,Soyisim,yaş,meslek)
bilgilerigöster();