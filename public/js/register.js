const nameInput = document.getElementById("registerName");
const emailInput = document.getElementById("registerEmail");
const passwordInput = document.getElementById("registerPassword");
const confirmPasswordInput = document.getElementById("registerConfirmPassword");

// Función de registro principal
// Se exporta y también se asigna a window para que funcione con el onclick del HTML
// ya que al usar type="module" el ámbito está aislado.
export function register() {
    //Obtener los valores de los inputs y limpiar espacios en blanco con trim al inicio/final
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;


    // 2. Validaciones básicas antes de procesar datos

    // Verificar que ningún campo esté vacío
    if (!name || !email || !password || !confirmPassword) {
        // Muestra una alerta de error usando la librería SweetAlert2
        Swal.fire("Error", "Todos los campos son obligatorios", "error");
        return; // Detiene la ejecución de la función
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        Swal.fire("Error", "Las contraseñas no coinciden", "error");
        return;
    }

    // 3. Gestión de almacenamiento local (LocalStorage)

    // Obtener la lista de usuarios guardados previamente.
    // Usamos la clave "users" para que coincida con lo que espera el login (data.js)
    let usuarios = JSON.parse(localStorage.getItem("users")) || [];

    // 4. Verificar si el correo ya fue registrado por otro usuario
    const usuarioExistente = usuarios.find(u => u.email === email);
    if (usuarioExistente) {
        Swal.fire("Error", "El correo ya está registrado", "error");
        return;
    }

    // 5. Guardar el nuevo usuario
    // Agregamos un objeto con los datos del nuevo usuario al arreglo
    usuarios.push({ name, email, password });

    // Guardamos el arreglo actualizado en localStorage "users".
    localStorage.setItem("users", JSON.stringify(usuarios));

    // 6. Confirmación y redirección
    // Mostrar mensaje de éxito y esperar a que el usuario cierre la alerta o pase un momento
    Swal.fire("Éxito", "Registro completado", "success").then(() => {
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = "/login";
    });
}

// Asignar la función al objeto global window para que el HTML pueda encontrarla
window.register = register;



