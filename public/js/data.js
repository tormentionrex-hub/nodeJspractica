export function getUsers() {
  // getUsers
  // Obtengo usuarios desde localStorage ("users"). Siempre retorna un arreglo. Puede filtrar por email.
  // Retorno: [{ name, email, password }]
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function saveUsers(users) {
  // saveUser
  // Guardo uarios en localStorage ("users"). Puede reemplazar duplicados por email.
  // Parámetros: users = [{ name, email, password }], replaceDuplicates = true
  // Retorno: arreglo final de usuarios guardados
  localStorage.setItem("users", JSON.stringify(users));
}





// Notas:
// - Ambas funciones trabajan con arreglos de objetos.
// - Útiles para pruebas locales