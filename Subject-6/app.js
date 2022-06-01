//Template literal

const names = "Murat";
const department = "Software";
const salary = "20.000";

const a = `Name :${names} \nAlan:${department}  \n Maaş: ${salary}  `;
console.log(a);

function a(){
    return "Hello world"
}


const html = `<ul>
<li>   ${names}</li>
<li>   ${department}</li>
<li>   ${salary}</li>
<li>   ${10/4}</li>
<li>   ${a()}</li>
</ul>`;

document.body.innerHTML = a;
