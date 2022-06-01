let value;

const numbers = [43, 56, 55, 41, 75, 8];

const langs = ["python", "java", "javascript", "javascript"];

value = numbers.length();

value = numbers[0];
value = numbers[1];
value = numbers[-1];
value = numbers[numbers.length -1];


numbers[2] = 1000;


value = numbers 

value = numbers.indexOf(1000)

value = numbers.push(5)  //sona ekleme
value = numbers.unshift(300) //başa ekleme


numbers.pop() ; // arrayın sonundaki değeri çıkarır
numbers.shift(); // arrayın başındaki değeri çıkarır

numbers.splice(1,3) // belli bir indeksdeki değerleri atar

numbers.reverse(); //arrayı ters çevirir 

numbers.sort() ; // ilk rakamına göre küçükten büyüge sıralama metodu

value.sort(function(){
    return x-y ;   // küçükten büyüge doğru sıralamak
})

value.sort(function(){
    return y-x ;   // büyükten küçüge doğru sıralamak
})


console.log(value);
