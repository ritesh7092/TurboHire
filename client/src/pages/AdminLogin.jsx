import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        navigate("/customer");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>

      <p className="mt-4 text-sm text-center">
        <a href="/login" className="text-blue-500 hover:underline">
          Customer Login
        </a>
      </p>
    </div>
  );
};

export default AdminLogin;


