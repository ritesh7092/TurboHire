import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Booking from "./pages/Booking";
import Cars from "./pages/Cars";
import Customers from "./pages/Customers";
import Variant from "./pages/Variant";
import CarBackground from "./assets/CarBackground.mp4";

const ProtectedRoute = ({ element }) => {
  const authToken = localStorage.getItem("authToken");
  return authToken ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay loop muted className="video-bg">
          <source src={CarBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/Booking" element={<ProtectedRoute element={<Booking />} />} />
          <Route path="/Cars" element={<ProtectedRoute element={<Cars />} />} />
          <Route path="/Customers" element={<ProtectedRoute element={<Customers />} />} />
          <Route path="/Variant" element={<ProtectedRoute element={<Variant />} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;






// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// // import Dashboard from "./pages/Dashboard";
// // import Tasks from "./pages/Tasks";
// // import Expenses from "./pages/Expenses";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";

// const ProtectedRoute = ({ element }) => {
//   const authToken = localStorage.getItem("authToken");
//   return authToken ? element : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="/Booking" element={<ProtectedRoute element={<Booking />} />} />
//         <Route path="/Cars" element={<ProtectedRoute element={<Cars />} />} />
//         <Route path="/Customers" element={<ProtectedRoute element={<Customers />} />} />
//         <Route path="/Variant" element={<ProtectedRoute element={<Variant />} />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
