/// Call , apply ve bind

const obj1 = {
    num: 10,
    num1: 20
}

const obj2 = {
    num: 20,
    num1: 30
}


function addNumber(number3, number4) {
    console.log(this.num + this.num1 + number3 + number4)
}
//addNumber.call(obj1,100,200)
//addNumber.call(obj2,100,200)


//addNumber.apply(obj1 , [100 ,200])
//addNumber.apply(obj1 , [200 ,200])


/// Bind

function getNumbersTotal(number3, number4) {
    return this.num + this.num1 + number3, number4
}

const copyFunc1 = getNumbersTotal.bind(obj1)
console.log(copyFunc1(100, 200))