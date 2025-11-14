import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";
import UserCard from "../components/UserCard";

export default function Admin() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div>
      <h2>Panel Administrador</h2>
      <p>Bienvenido, {user.name}</p>

      <h3>Lista de usuarios registrados</h3>

      {users.length === 0 && <p>No hay usuarios registrados.</p>}

      {users.map((u, index) => (
        <UserCard key={index} user={u} />
      ))}
    </div>
  );
}
