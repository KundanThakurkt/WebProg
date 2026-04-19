function validateName() {
    let name = document.getElementById("name").value;
    let regex = /^[A-Za-z ]+$/;

    if (!regex.test(name) || name.trim() === "") {
        alert("Invalid Name");
    }
}

function validateDOB() {
    let dob = document.getElementById("dob").value;
    let regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!regex.test(dob)) {
        alert("Invalid DOB format");
        return;
    }

    let parts = dob.split("/");
    let birthDate = new Date(parts[2], parts[1]-1, parts[0]);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    document.getElementById("age").value = age;
}

function validateMobile() {
    let mobile = document.getElementById("mobile").value;
    let regex = /^[1-9][0-9]*$/;

    if (!regex.test(mobile)) {
        alert("Invalid Mobile Number");
        document.getElementById("mobile").value = "";
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;

    if (!email.includes("@") || email.startsWith("@") || 
       !(email.endsWith(".com") || email.endsWith(".in"))) {
        alert("Invalid Email");
        document.getElementById("email").value = "";
    }
}

class Student {
    constructor(name, dob, age, mobile, email) {
        this.name = name;
        this.dob = dob;
        this.age = age;
        this.mobile = mobile;
        this.email = email;
    }
}

function submitForm() {
    let student = new Student(
        name.value,
        dob.value,
        age.value,
        mobile.value,
        email.value
    );

    document.cookie = mobile.value + "=" + JSON.stringify(student);

    alert("Form submitted successfully");

    window.location.href = "retrieve.html";
}
