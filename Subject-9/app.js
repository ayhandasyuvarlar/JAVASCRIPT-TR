let value;

const now = new Date();

const date = new Date("8-08-2001 10:00:00");
const date1 = new Date("august 08 2001");
const date2 = new Date("8/08/2001");

value = date 

value =date.getMonth()
value =date.getDate()
value =date.getDay()


value =date.getHours()
value =date.getSeconds()
value =date.getMinutes()
value =date.getMilliseconds()


date1.setMonth(9)
date1.setDate(15)
date1.setFullYear(2000)

date1.setHours(0)
date1.setMinutes(15)
date1.setSeconds(30)    


console.log(value);
