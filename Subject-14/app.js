/// Window method

// alert
alert("Welcome");

// Confirm

if (confirm("Window Close ? ")) {
  console.log("Delete");
} else {
  console.log(" Not deleted");
}

// propmt

const quiz = prompt(" 2 + 2 = ?");
if (quiz == "4") {
  console.log("Yes, success");
} else {
  console.log("I am sad , try again");
}

// location

let value;
value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

if (confirm("paper update ?")) {
  window.location.reload();
} else {
  console.log("paper not updated");
}


value = window.outerHeight; // tarayıcı pencerisinin uzunguluğunu ölçüyor
value = window.outerWidth;  // tarayıcı penceresinin genişliğini ölçüyor
value = window.innerHeight;  // html sayfasının uzunluğunu ölçüyor
value = window.innerWidth ; // html sayfasının genişliğini ölçüyor
value = window.scrollX;
value = window.screenY;
console.log(value)
