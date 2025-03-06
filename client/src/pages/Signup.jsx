import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!username || !password || !confirmPassword || !email || !role) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (password.length < 5 || password.length > 10) {
      setErrorMessage("Password must be between 5 and 10 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email, role }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        setErrorMessage(data.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Signup failed", error);
      setErrorMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="User ID"
          className="w-full p-2 border rounded mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

        <input
          type="password"
          placeholder="Re-type Password"
          className="w-full p-2 border rounded mb-3"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <select
          className="w-full p-2 border rounded mb-3"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select User Type</option>
          <option value="Customer">Customer</option>
          <option value="Admin">Admin</option>
        </select>

        <button className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
      </form>

      <p className="mt-4 text-sm text-center">
        Already have an account? <a href="/login" className="text-blue-500">Login</a>
      </p>
    </div>
  );
};

export default Signup;














// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert("Signup successful! Please login.");
//         navigate("/login");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Signup failed", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border rounded mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border rounded mb-3"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
//       </form>
//       <p className="mt-4 text-sm text-center">
//         Already have an account? <a href="/login" className="text-blue-500">Login</a>
//       </p>
//     </div>
//   );
// };

// export default Signup;

