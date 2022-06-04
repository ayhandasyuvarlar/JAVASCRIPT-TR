// const hello = function(name){          // normal fonksiyon
//     console.log("hello"  +" " + name)
// }

// hello("ayhan");

//Arrow Function
const hello1 = (props) =>{
    console.log("hello" , props )
}

hello1("ayhan")


// #eger ki fonksiyon tek parametre alıyorsa paranteze gerek olmuyor

const hello2 = name =>{
    console.log("hello" , name )
}

hello2("ayhan")


const hello3 = (firstname , lastname) =>{
    console.log("hello", firstname , lastname)
}

hello3("ayhan" ,"daşyuvarlar")


// #diğer bir özelliği ise eğer ki yapıcağınız işlem tek satır ise süslü parantezlere de gerek yok


const hello4 = (firstname , lastname) => console.log("hello", firstname , lastname)
  
hello4("ayhan" ,"daşyuvarlar")

//example -1
const cube = x =>{
    return x*x*x
}
console.log(cube(4))


//example-2
const cube1 = x => x*x*x
console.log(cube(4))