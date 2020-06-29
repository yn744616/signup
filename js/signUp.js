var state = false;
var state1 = false;

const passwordGlobal = document.querySelector("#password");
const confirmGlobal = document.querySelector("#confirmPassword");
const firstEye = document.querySelector("#eye");
const secondEye = document.querySelector("#eyeConfirm");

/**
 * When password input changes check its strength(length > 9)
 */
password.addEventListener('change', () => {
  strength();
});

/**
 * When confirm password input changes, check if it 
 * matches the password input
 */
confirmGlobal.addEventListener('change', () => {
  match();
});

/**
 * When user clicks the eye icon in passowrd input, 
 * show password
 */
firstEye.addEventListener('click', () => {
  show();
});

/**
 * When user clicks the eye icon in confirm passowrd input, 
 * show confirm password
 */
secondEye.addEventListener('click', () => {
  show1();
});

/************************************************ Functions ************************************************/

/**
 * Check the strength of the password. If the length of the password is
 * shorter than 10, signup button will be disabled. 
 * If The length of the password is 10 or longer, 
 * submit button will be enabled. 
 */
async function strength() {
  let val = passwordGlobal.value;
  let strength = document.getElementById("length");
  let count = 0;
  let cpassword = confirmGlobal.value;
  let match = document.getElementById("match");
  let count1 = 0;


  if (val.length <= 9 || val == "") count = 1;
  if (val.length > 9 && val.length < 12) count = 2;
  if (val.length > 12) count = 3;

  if (count == 1) {
    strength.innerHTML = "WEAK";
    strength.style.background = "#fa6775";
    strength.style.color = "#FFF";
    document.getElementById("submit").disabled = true;
  }
  if (count == 2) {
    strength.innerHTML = "GOOD";
    strength.style.background = "#336b87";
    strength.style.color = "#FFF";
    document.getElementById("submit").disabled = true;
  }
  if (count == 3) {
    strength.innerHTML = "STRONG";
    strength.style.background = "#89da59";
    strength.style.color = "#FFF";
    document.getElementById("submit").disabled = true;
  }

  if (val != cpassword) {
    count1 = 0;
  } else {
    if (val.length == 0) {
      count1 = 0;
    } else {
      count1 = 1;
    }
  }
  

  if (count1 == 0) {
    match.innerHTML = "Does not match";
    match.style.background = "#fa6775";
    match.style.color = "#FFF";
    document.getElementById("submit").disabled = true;
  } else {
    match.innerHTML = "Matches to password";
    match.style.background = "#89da59";
    match.style.color = "#FFF";
    document.getElementById("submit").disabled = false;
  }
}

/**
 * If password and confirm password match, signup button
 * will bt enabled.
 */
async function match() {
  let password = passwordGlobal.value;
  let cpassword = confirmGlobal.value;
  let match = document.getElementById("match");
  let count = 0;

  if (password !== cpassword) {
    count = 0;
  } else {
    if (password.length == 0) {
      count = 0;
    } else {
      count = 1;
    }
  }

  if (count == 0) {
    match.innerHTML = "Does not match to password";
    match.style.background = "#fa6775";
    match.style.color = "#FFF";
    document.getElementById("submit").disabled = true;
  } else {
    match.innerHTML = "Matches to password";
    match.style.background = "#89da59";
    match.style.color = "#FFF";
    document.getElementById("submit").disabled = false;
  }
}

/**
 * When user clicks on the eye icon in password input, 
 * show password
 */
function show() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("eye").style.color = "#7a797e";
    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("eye").style.color = "#2485CC";
    state = true;
  }
}

/**
 * When eye icon in confirm passowrd input 
 * is clicked, show cofirm password 
 */
function show1() {
  if (state1) {
    document.getElementById("confirmPassword").setAttribute("type", "password");
    document.getElementById("eyeConfirm").style.color = "#7a797e";
    state1 = false;
  } else {
    document.getElementById("confirmPassword").setAttribute("type", "text");
    document.getElementById("eyeConfirm").style.color = "#2485CC";
    state1 = true;
  }
}


