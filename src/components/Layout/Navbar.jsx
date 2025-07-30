// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { motion } from "framer-motion";
// import {
//   FiLogOut,
//   FiUser,
//   FiHome,
//   FiDollarSign,
//   FiCreditCard,
//   FiPocket,
//   FiShield,
// } from "react-icons/fi";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white dark:bg-dark-700 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center">
//               <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
//                 theIdealmarket
//               </span>
//               <span className="text-xs ml-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded">
//                 .shop
//               </span>
//             </Link>
//           </div>

//           <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
//             <NavLink to="/" icon={<FiHome />} text="Dashboard" />
//             <NavLink to="/banklogs" icon={<FiShield />} text="Bank Logs" />
//             <NavLink to="/cashapp" icon={<FiDollarSign />} text="CashApp" />
//             <NavLink to="/paypal" icon={<FiCreditCard />} text="PayPal" />
//             <NavLink to="/dumps" icon={<FiPocket />} text="Dumps" />
//             <NavLink to="/paxful" icon={<FiDollarSign />} text="Paxful" />
//             <NavLink to="/account" icon={<FiUser />} text="Account" />

//             {user && (
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleLogout}
//                 className="flex items-center px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
//               >
//                 <FiLogOut className="mr-2" />
//                 Logout
//               </motion.button>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="-mr-2 flex items-center md:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Menu icon */}
//               <svg
//                 className="block h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className="md:hidden" id="mobile-menu">
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <MobileNavLink to="/" icon={<FiHome />} text="Dashboard" />
//           <MobileNavLink to="/banklogs" icon={<FiShield />} text="Bank Logs" />
//           <MobileNavLink to="/cashapp" icon={<FiDollarSign />} text="CashApp" />
//           <MobileNavLink to="/paypal" icon={<FiCreditCard />} text="PayPal" />
//           <MobileNavLink to="/dumps" icon={<FiPocket />} text="Dumps" />
//           <MobileNavLink to="/paxful" icon={<FiDollarSign />} text="Paxful" />
//           <MobileNavLink to="/account" icon={<FiUser />} text="Account" />

//           {user && (
//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
//             >
//               <FiLogOut className="mr-2" />
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// function NavLink({ to, icon, text }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-md"
//     >
//       <span className="mr-2">{icon}</span>
//       {text}
//     </Link>
//   );
// }

// function MobileNavLink({ to, icon, text }) {
//   return (
//     <Link
//       to={to}
//       className="flex items-center px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-md"
//     >
//       <span className="mr-2">{icon}</span>
//       {text}
//     </Link>
//   );
// }


// Simplified Navbar.jsx
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { FiLogOut } from 'react-icons/fi'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white dark:bg-dark-700 border-b border-gray-200 dark:border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
              theIdealmarket<span className="text-xs ml-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded">.shop</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            {user && (
              <button
                onClick={logout}
                className="flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
              >
                <FiLogOut className="mr-2" />
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}