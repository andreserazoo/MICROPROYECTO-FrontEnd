import users from "../data/users.json";

export function registerUser(newUser) {
  const exists = users.find(u => u.email === newUser.email);

  if (exists) {
    return { success: false, message: "El correo ya está registrado" };
  }

  users.push(newUser);

  return { success: true, message: "Usuario registrado", user: newUser };
}
