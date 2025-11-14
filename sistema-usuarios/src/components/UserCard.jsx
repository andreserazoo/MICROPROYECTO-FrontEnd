export default function UserCard({ user }) {
  return (
    <div style={{
      border: "1px solid #444",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px"
    }}>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
