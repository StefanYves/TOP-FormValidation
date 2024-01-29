import "./styles.css";

const email = document.getElementById("mail");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const emailError = document.getElementById("error-message");
const countryError = document.getElementById("error-country");
const zipError = document.getElementById("error-zip");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordc");
const passwordErrorc = document.getElementById("error-passwordc");
const passwordError = document.getElementById("error-password");

email.addEventListener("input", () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Enter a valid email address!";
  } else {
    emailError.textContent = "";
  }
});

country.addEventListener("input", function () {
  validateCountry();
});

zipcode.addEventListener("input", function () {
  validateZipcode();
});

function validateCountry() {
  if (country.value.trim() === "") {
    countryError.textContent = "Input cannot be empty!";
  } else {
    countryError.textContent = "";
  }
}

function validateZipcode() {
  const zipcodePattern = /^\d{5}$/;
  if (!zipcodePattern.test(zipcode.value)) {
    zipError.textContent = "Enter a valid 5-digit zipcode";
  } else {
    zipError.textContent = "";
  }
}

password.addEventListener("input", function () {
  validatePassword();
});

passwordConfirmation.addEventListener("input", function () {
  validatePasswordConfirmation();
});

function validatePassword() {
  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
  } else {
    passwordError.textContent = "";
  }
}

function validatePasswordConfirmation() {
  if (passwordConfirmation.value !== password.value) {
    passwordErrorc.textContent = "Passwords do not match";
  } else {
    passwordErrorc.textContent = "";
  }
}
