import { useState, useContext } from "react";
import { registerUser } from "../services/userService";
import { UserContext } from "../context/UserContext";

export default function Register() {
  const { login } = useContext(UserContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = registerUser(form);

    setMsg(result.message);

    if (result.success) {
      login(result.user); // iniciar sesión automático
    }
  };

  return (
    <div>
      <h2>Registro</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}>
        
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Correo"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />

        <button type="submit">Registrarse</button>
      </form>

      <p>{msg}</p>
    </div>
  );
}
