

//set Tımeout

setTimeout(function () {
    console.log("naber")
}, 2000)

let i = 0
let value = setInterval(function () {
    i++
    console.log(i)
}, 1000)

//Clear Interval

document.getElementById("btn").addEventListener("click" ,function () {
    clearInterval(value)
})