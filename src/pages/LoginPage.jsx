import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    login(name);
  }

  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;