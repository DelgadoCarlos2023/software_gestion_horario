function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  clearErrorMessage();

  if (email.trim() === "") {
      displayErrorMessage("El campo de correo electrónico es obligatorio.");
      return false;
  }

  if (password.trim() === "") {
      displayErrorMessage("El campo de contraseña es obligatorio.");
      return false;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
      displayErrorMessage("Ingrese una dirección de correo electrónico válida.");
      return false;
  }

  // Validación de contraseña (mínimo 8 caracteres)
  if (password.length < 8) {
      displayErrorMessage("La contraseña debe tener al menos 8 caracteres.");
      return false;
  }

  return true;
}

function displayErrorMessage(message) {
  var errorMessage = document.getElementById("error-message");
  errorMessage.innerHTML = message;
  errorMessage.style.color = "red";
}

function clearErrorMessage() {
  var errorMessage = document.getElementById("error-message");
  errorMessage.innerHTML = "";
}
