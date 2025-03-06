import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
import Booking from "./pages/Booking";
import Cars from "./pages/Cars";
import Customers from "./pages/Customers";
import Variant from "./pages/Variant";
import CarBackground from "./assets/CarBackground.mp4";
import AdminLogin from "./pages/AdminLogin";

const ProtectedRoute = ({ element }) => {
  const authToken = localStorage.getItem("authToken");
  return authToken ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={CarBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <Routes>
            <Route path="/" element={<Navigate to="/booking" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
            {/* <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
            <Route path="/Booking" element={<ProtectedRoute element={<Booking />} />} />
            <Route path="/Cars" element={<ProtectedRoute element={<Cars />} />} />
            <Route path="/Customer" element={<ProtectedRoute element={<Customers />} />} />
            <Route path="/Variant" element={<ProtectedRoute element={<Variant />} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;















// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import Booking from "./pages/Booking";
// import Cars from "./pages/Cars";
// import Customers from "./pages/Customers";
// import Variant from "./pages/Variant";
// import CarBackground from "./assets/CarBackground.mp4";

// const ProtectedRoute = ({ element }) => {
//   const authToken = localStorage.getItem("authToken");
//   return authToken ? element : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <>
//       {/* Background Video */}
//       <div className="video-container">
//         <video autoPlay loop muted className="video-bg">
//           <source src={CarBackground} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Main Content */}
//       <div className="content">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Navigate to="/booking"/>} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />
//           <Route path="/Booking" element={<ProtectedRoute element={<Booking />} />} />
//           <Route path="/Cars" element={<ProtectedRoute element={<Cars />} />} />
//           <Route path="/Customers" element={<ProtectedRoute element={<Customers />} />} />
//           <Route path="/Variant" element={<ProtectedRoute element={<Variant />} />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;






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
