import React, { useState } from "react";
import "./LoginSection.css";
import loginImage from "../images/Compostemos_10.png";

function LoginSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    if (username === "user" && password === "password") {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <img src={loginImage} alt="Login" className="login-image" />
      <div className="login-section">
        <h2>Inicia sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Ingresar</button>
      </div>
    </div>
  );
}

export default LoginSection;
