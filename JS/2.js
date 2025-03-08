function validateStudentId(studentId) {
    if (studentId === "") {
        alert("Student ID must be filled out");
        return false;
    }
    return true;
}

function validateName(name) {
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    return true;
}

function validateDob(dob) {
    if (dob === "") {
        alert("Date of Birth must be filled out");
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return false;
    }
    return true;
}

function validatePassword(password) {
    if (password === "") {
        alert("Password must be filled out");
        return false;
    }
    return true;
}

function validateConfirmPassword(password, confirmPassword) {
    if (confirmPassword === "") {
        alert("Confirm Password must be filled out");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}

function validateForm() {
    var studentId = document.myForm.studentId.value;
    var name = document.myForm.name.value;
    var dob = document.myForm.dob.value;
    var email = document.myForm.email.value;
    var password = document.myForm.password.value;
    var confirmPassword = document.myForm.confirmPassword.value;

    if (!validateStudentId(studentId)) return false;
    if (!validateName(name)) return false;
    if (!validateDob(dob)) return false;
    if (!validateEmail(email)) return false;
    if (!validatePassword(password)) return false;
    if (!validateConfirmPassword(password, confirmPassword)) return false;

    return true;
}