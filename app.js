const headerP = document.getElementById("header-p")
const headerPspans = headerP.getElementsByTagName("span")
let isshowpass = false
const passloginInput = document.getElementById("password-login")
const closeEye = "fa-regular fa-eye-slash"
const openEye = "fa-regular fa-eye"
const loginPassIcon = document.getElementById("login-eye")

const passToggleSignin = document.getElementById("signin-eye")
const passSigninInput = document.getElementById("password-signin")
const signinPassIcon = document.getElementById("signin-eye")
const passvallogin = document.getElementById("pass-val-login")

const toSignIn = document.getElementById("toSignIn")
const toLogIn = document.getElementById("toLogIn")
const loginContainer = document.getElementById("log-con")
const signinContainer = document.getElementById("signin-con")
const conWrapper = document.getElementById("Con-wrapper")

toSignIn.addEventListener("click", () => {
    signinContainer.style.opacity = "1"
    loginContainer.style.opacity = "0"
    signinContainer.style.zIndex = "999"
    loginContainer.style.zIndex = "0"
    signinContainer.style.left = "40rem"
    signinContainer.style.right = "1rem"
    loginContainer.style.right = "1rem"
    loginContainer.style.left = "15rem"
    conWrapper.style.left = "1rem"
    conWrapper.style.right = "40rem"
})

toLogIn.addEventListener("click", () => {
    loginContainer.style.opacity = "1"
    signinContainer.style.opacity = "0"
    signinContainer.style.zIndex = "0"
    loginContainer.style.zIndex = "999"
    signinContainer.style.left = "20rem"
    signinContainer.style.right = "1rem"
    loginContainer.style.right = "15rem"
    loginContainer.style.left = "1rem"
    conWrapper.style.right = "1rem"
    conWrapper.style.left = "40rem"
})

function handleToggleContainer(element) {
    signinContainer.style.opacity = "1"
    loginContainer.style.opacity = "0"
    signinContainer.style.zIndex = "999"
    loginContainer.style.zIndex = "0"
    signinContainer.style.left = "40rem"
    signinContainer.style.right = "1rem"
    loginContainer.style.right = "1rem"
    loginContainer.style.left = "15rem"
    conWrapper.style.left = "1rem"
    conWrapper.style.right = "40rem"
}

function handlePassToggle(elementIcon, elementInput){ 
    if (!isshowpass) {
        elementIcon.className = closeEye
        elementInput.type = "text"
        isshowpass = true
        
    } else {
        elementIcon.className = openEye
        elementInput.type = "password"
        isshowpass = false
    }
}

function isValid(val) {
    const password = val
    const minLength = 8;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const numberPattern = /\d/;
    const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < minLength || !uppercasePattern.test(password) || !lowercasePattern.test(password) || !numberPattern.test(password) || !specialCharacterPattern.test(password)) {
        return false
    } 
    return true
}

function passwordValidation(element, inputelement) {
    const password = inputelement
    console.log(isValid(password));
    if(!isValid(password)){
        element.textContent = "The password must contain alteast 8 character including atleast one Capital and One number"
    }
    else {
        element.textContent = ""
    }
}
passloginInput.addEventListener("input", ()=> {passwordValidation(passvallogin, passloginInput)})
loginPassIcon.addEventListener("click", () => handlePassToggle(loginPassIcon,passloginInput))
signinPassIcon.addEventListener("click", () => handlePassToggle(signinPassIcon,passSigninInput))


// Frontend registration example
async function registerUser() {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: usernameInput,
          email: emailInput,
          password: passwordInput
        })
      });
  
      const result = await response.json();
      if (response.ok) {
        // Registration successful
        alert('Registered successfully');
      } else {
        // Handle error
        alert(result.error);
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  }