const login = document.querySelector("#login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const menu = document.querySelector(".menu")

let value1 = password;
let value2 = email;
console.log(login);

login.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(value1.value);
  console.log(value2.value);
  menu.style.display = "none";
  login.style.display = "none";
  email.style.display = "none";
  password.style.display = "none";
  document.querySelector(".spinner").style.display = "block";
  setTimeout(
    () => (window.location.href = "../js_spinner/page/indexSecond.html"),
    2000
  );


});

// const btn = document.querySelector('#btn')
// console.log(btn)

//
