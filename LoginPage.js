let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

const form = document.getElementById('form')

var error = []
var success = ""

// form.addEventSubmit('submit', function (e) {
//     e.preventDefault()
//     alert("You have registered.")
//     const username = document.getElementById('username')
//     const passwword = document.getElementById('password')

//     if (username.value == "") {
//         error.push("Please enter the username")
//     }
//     if (password.value == "") {
//         error.push("Please enter the password")
//     }

//     alert("Form is submitted")

//     var message = document.getElementById('message')
//     message.innerText = error
// }

signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}