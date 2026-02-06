import { getUsers } from "./data.js";

// Función de inicio de sesión
// Se asigna también a window.login para asegurar que el botón del HTML pueda llamarla
window.login = function () {
  // 1. Obtener valores del formulario y limpiar espacios
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  // 2. Validación básica: verificar campos vacíos
  if (!email || !password) {
    Swal.fire({
      icon: "warning",
      title: "Campos incompletos",
      text: "Por favor ingrese email y contraseña",
      confirmButtonColor: "#5b2d8b" // Color personalizado
    });
    return;
  }

  // 3. Obtener usuarios guardados (desde data.js / localStorage)
  const users = getUsers();
  let userFound = false;

  // 4. Buscar coincidencia de credenciales
  // Recorremos el arreglo de usuarios buscando uno que tenga el mismo email y password
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      userFound = true;

      // ¡Login Exitoso!
      Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: `Hola ${users[i].name}, disfruta la música 🎵`,
        confirmButtonColor: "#5b2d8b"
      }).then(() => {
        // Redirigir a la página principal
        window.location.href = "/";
      });

      break; // Detener el ciclo porque ya encontramos al usuario
    }
  }

  // 5. Manejo de error si no se encontró el usuario
  if (!userFound) {
    Swal.fire({
      icon: "error",
      title: "Error de acceso",
      text: "Email o contraseña incorrectos, o el usuario no existe",
      confirmButtonColor: "#5b2d8b"
    });
  }
};
