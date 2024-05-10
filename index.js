const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword  = document.querySelector("#confirm-password");

const name_error = document.querySelector("#name_error");
const email_error = document.querySelector("#email_error");
const pass_error = document.querySelector("#pass_error");
const confirm_pass_error = document.querySelector("#confirm_pass_error");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const password_check = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    if(name.value === "") {
        name_error.innerHTML = "Name is required";
    } else {
        name_error.innerHTML = "";
    }
    if(!email.value.match(email_check)) {
        email_error.innerHTML = "Valid email is required";
    } else {
        email_error.innerHTML = "";
    }
    if(!password.value.match(password_check)) {
        pass_error.innerHTML = "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.";
    } else {
        pass_error.innerHTML = "";
    }

    if(confirmPassword.value === "" || confirmPassword.value !== password.value) {
        confirm_pass_error.innerHTML = "Password did not match";
    } else {
        confirm_pass_error.innerHTML = "";
    }

    const output = document.querySelector("#message");
    output.innerHTML = `${name.value} ${email.value} ${password.value} ${confirmPassword.value}`;

})
