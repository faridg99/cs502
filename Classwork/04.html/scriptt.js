// const form = document.querySelector('form')
// const button = document.querySelector('button')
// const username = document.querySelector('#username')
// const email = document.querySelector('#email')
// const password = document.querySelector('#password')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const user = {
//         username: username.value,
//         email: email.value,
//         password: password.value
//     }

// })

// function checkValidation() {
//     if (username.value && email.value && password.value) {
//         button.removeAttribute('disabled')
//     } else {
//         button.setAttribute('disabled', null)
//     }
// }


// function validatePassword(password) {
//     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password);
//   }
  
//   var password = document.getElementsByName("password")[0];
//   var password_confirm = document.getElementsByName("repassword")[0];
//   var btnSubmit = document.getElementById("submit").disabled;
  
//   function validate_password() {
  
//     if (validatePassword(password.value)) {
//       document.getElementById("password_result_invalid").style.visibility = "hidden";
//       document.getElementById("password_result_invalid").style.height = "0";
//       btnSubmit = false;
//     } else {
//       document.getElementById("password_result_invalid").innerHTML = "Password must be 8 characters with mix of upper, lower case, numeric and special character"
//       document.getElementById("password_result_invalid").style.height = "initial";
//       btnSubmit = true;
  
//       if (password.value === password_confirm.value) {
//         document.getElementById("password_confirmation_invalid").style.visibility = "hidden";
//         document.getElementById("password_confirmation_invalid").style.height = "0";
//         btnSubmit = false;
//       } else {
//         document.getElementById("password_confirmation_invalid").innerHTML = "Passwords do not match.";
//         document.getElementById("password_confirmation_invalid").style.height = "initial";
//         btnSubmit = true;
//       }
//     }
  
//   }

//   <input type="submit" id="submit"></input>

