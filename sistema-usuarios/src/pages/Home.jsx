import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Bienvenido</h2>

      {user ? (
        <p>Sesión iniciada como: <strong>{user.name}</strong></p>
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
}
