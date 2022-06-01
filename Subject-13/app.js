// While Cycles

let i = 0;

while (i < 10) {
  console.logi(i);
  i++;
}

let a = 10;

while (a > 10) {
  console.log(a);

  i--;
}

/// Break and Contiune

let b = 0;

while (b < 10) {
  console.log(i);
  if (i == 5) {
    break;
  }
  i++;
}

let c = 0;
while (c < 10) {
  if (c === 3 || i == 5) {
    i++;
    continue; // yani şöyle eğer ki biz bir şey istedğimizde  3 ve 5 değerler sağlanmıyorsa onları es geç diğerlerini çalıştır
  }
  console.log(i);
  i++;
}

// Do While cycles

let d = 0;

do {
  console.log(d); // çok fazla kullanılmıyor
  i++;
} while (i < 10);

//
const langs = ["python", "javascript", "java"];

// let index = 0;

while (index < langs.length) {
  console.log(langs[index]);
  index++;
}
// fo cycles

for (let index = 0; index < langs.length; index++) {
  console.log(langs[index]);
}
// forEach 


langs.forEach(function (lang, index) {
  console.log(lang, index);
});


// map function 
const users = [
  {
    name: "Mustafa",
    age: 25,
  },
  {
    name: "Zeynep",
    age: 40,
  },
];

const names = users.map(function (user) {
  return user.name;
});
const ages = users.map(function (ages) {
  return ages.age;
});
console.log(names);
console.log(ages);

 // for in cycles  
for( let key in users){
    console.log(key,users[key])
}
