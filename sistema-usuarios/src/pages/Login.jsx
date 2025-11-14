import { useState, useContext } from "react";
import { loginUser } from "../services/authService";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginUser(email, password);
    setMsg(result.message);

    if (result.success) {
      login(result.user);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}>
        
        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>

      <p>{msg}</p>
    </div>
  );
}
