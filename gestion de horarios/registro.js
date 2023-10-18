function validateForm() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        document.getElementById("error-message").innerHTML = "Todos los campos son obligatorios.";
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("error-message").innerHTML = "Correo electrónico no válido.";
        return false;
    }

    // Valida que las contraseñas coincidan
    if (password !== confirmPassword) {
        document.getElementById("error-message").innerHTML = "Las contraseñas no coinciden.";
        return false;
    }

    // Si la validación es exitosa, el formulario se envía
    return true;
}
