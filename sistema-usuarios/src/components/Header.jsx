import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header style={{ padding: "20px", background: "#222", marginBottom: "20px" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Inicio</Link>

        {!user && (
          <>
            <Link to="/register">Registro</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/admin">Admin</Link>
            <button onClick={handleLogout} style={{ cursor: "pointer" }}>
              Cerrar sesión
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
