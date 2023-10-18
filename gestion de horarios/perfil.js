var editProfileBtn = document.getElementById("editProfile");
var saveProfileBtn = document.getElementById("saveProfile");
var emailField = document.getElementById("email");
var locationField = document.getElementById("location");
var birthdateField = document.getElementById("birthdate");

document.addEventListener("DOMContentLoaded", function () {
    loadProfileData();
});

editProfileBtn.addEventListener("click", function() {
    
    editProfileBtn.style.display = "none";
    
    saveProfileBtn.style.display = "block";
    
    emailField.removeAttribute("readonly");
    locationField.removeAttribute("readonly");
    birthdateField.removeAttribute("readonly");
    birthdateField.type = "date"; 
});


saveProfileBtn.addEventListener("click", function () {
    
    saveProfileData();
    
    editProfileBtn.style.display = "block";
    
    saveProfileBtn.style.display = "none";
    
    emailField.setAttribute("readonly", "readonly");
    locationField.setAttribute("readonly", "readonly");
    birthdateField.setAttribute("readonly", "readonly");
    birthdateField.type = "text";
});


function loadProfileData() {
    var savedEmail = localStorage.getItem("email");
    var savedLocation = localStorage.getItem("location");
    var savedBirthdate = localStorage.getItem("birthdate");

    
    if (savedEmail) {
        emailField.value = savedEmail;
    }
    if (savedLocation) {
        locationField.value = savedLocation;
    }
    if (savedBirthdate) {
        birthdateField.value = savedBirthdate;
    }
}


function saveProfileData() {
    var emailValue = emailField.value;
    var locationValue = locationField.value;
    var birthdateValue = birthdateField.value;

    
    localStorage.setItem("email", emailValue);
    localStorage.setItem("location", locationValue);
    localStorage.setItem("birthdate", birthdateValue);
}
