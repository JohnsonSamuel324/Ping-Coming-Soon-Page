// Good Regex testing website: https://regexr.com/
var regex = /^([a-zA-Z0-9.]+)@([a-zA-Z]+)\.([a-zA-Z]+)(\.[a-zA-Z])?$/;
var errorText = document.getElementById("text-input-error");
var formError = document.getElementById("form-signup");
var inputError = document.getElementById("input-email");

function validateEmail() {
    if (!regex.test(document.getElementById("input-email").value)) {
        errorText.style.display = "block";
        formError.classList.add("error");
        inputError.style.borderColor = "red";
    }
}

function removeErrors() {
    errorText.style.display = "none";
    formError.classList.remove("error");
    inputError.style.borderColor = "black";
}