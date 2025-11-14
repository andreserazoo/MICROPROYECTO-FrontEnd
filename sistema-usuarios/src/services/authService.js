import users from "../data/users.json";

export function loginUser(email, password) {
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return { success: false, message: "Credenciales incorrectas" };
  }

  return { success: true, message: "Login exitoso", user };
}
