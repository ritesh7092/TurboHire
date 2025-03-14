import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setIsLoggedIn(!!authToken);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TurboHire
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/customer" className="text-gray-700 hover:text-blue-600">
              Customer
            </Link>
            <Link to="/variant" className="text-gray-700 hover:text-blue-600">
              Variant
            </Link>
            <Link to="/cars" className="text-gray-700 hover:text-blue-600">
              Cars
            </Link>
            <Link to="/booking" className="text-gray-700 hover:text-blue-600">
              Booking
            </Link>

            {/* Show Logout if User is Logged In */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link to="/customer" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Customer
          </Link>
          <Link to="/variant" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Variant
          </Link>
          <Link to="/cars" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Cars
          </Link>
          <Link to="/booking" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Booking
          </Link>

          {/* Show Logout if User is Logged In */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;











// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold text-blue-600">
//             TurboHire
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <Link to="/" className="text-gray-700 hover:text-blue-600">
//               Customer
//             </Link>
//             <Link to="/tasks" className="text-gray-700 hover:text-blue-600">
//               Variant
//             </Link>
//             <Link to="/expenses" className="text-gray-700 hover:text-blue-600">
//               Cars
//             </Link>
//             <Link to="/booking" className="text-gray-700 hover:text-blue-600">
//               Booking
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-700 focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200">
//           <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//             Customer
//           </Link>
//           <Link to="/tasks" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//             Variant
//           </Link>
//           <Link to="/expenses" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//             Cars
//           </Link>
//           <Link to="/booking" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//             Booking
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
