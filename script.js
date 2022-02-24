let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

const validatePassword = () => {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords don't match!");
    password.setCustomValidity("Passwords don't match!");
  } else {
    confirm_password.setCustomValidity("");
    password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onchange = validatePassword;