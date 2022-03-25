const password = document.getElementById("pwd");
const button = document.querySelector("button");
const confirmPassword = document.getElementById("confirm-pwd");

function validatePassword() {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords don't match");
    confirmPassword.classList.add("error");
  } else {
    confirmPassword.setCustomValidity("");
    confirmPassword.classList.remove("error");
  }
}

button.onclick = validatePassword;
