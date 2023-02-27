const form = document.getElementById("form");
const tableBody = document.getElementById("table-body");

const tableData = JSON.parse(localStorage.getItem("tableData")) || [];
for (const entry of tableData) {
    const Row = tableBody.insertRow();
    const nameValue = Row.insertCell();
    const emailValue = Row.insertCell();
    const passwordValue = Row.insertCell();
    const dobValue = Row.insertCell();
    const termsValue = Row.insertCell();
    nameValue.textContent = entry.name;
    emailValue.textContent = entry.email;
    passwordValue.textContent = entry.password;
    dobValue.textContent = entry.dob;
    termsValue.textContent = entry.terms;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const terms = document.getElementById("terms").checked;

    if (!name || !email || !password || !dob || !terms) {
        alert("Please fill all the empty fields");
        return false;
    }

    const dobDate = new Date(dob);
    const dobYear = dobDate.getFullYear();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - dobYear;
    if (age < 18 || age > 55) {
        alert("Age must be between 18 and 55");
        return false;
    }

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailCheck)) {
        alert("Enter a valid email address");
        return false;
    }

    const entry = { name, email, password, dob, terms };

    const Row = tableBody.insertRow();
    const nameValue = Row.insertCell();
    const emailValue = Row.insertCell();
    const passwordValue = Row.insertCell();
    const dobValue = Row.insertCell();
    const termsValue = Row.insertCell();
    nameValue.textContent = name;
    emailValue.textContent = email;
    passwordValue.textContent = password;
    dobValue.textContent = dob;
    termsValue.textContent = terms;
    tableData.push(entry);
    localStorage.setItem("tableData", JSON.stringify(tableData));
    form.reset();
    return false;
});