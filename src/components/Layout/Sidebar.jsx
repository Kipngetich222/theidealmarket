// // components/Layout/SideNavbar.jsx
// import { useState, useEffect } from 'react'
// import { NavLink, useLocation } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { 
//   FiHome, FiShield, FiDollarSign, 
//   FiCreditCard, FiPocket, FiUser,
//   FiMenu, FiX, FiLogOut, FiMail,
//   FiArrowLeft, FiCheckCircle
// } from 'react-icons/fi'
// import { useAuth } from '../../context/AuthContext'

// export default function SideNavbar() {
//   const { user, logout } = useAuth()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const location = useLocation()
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 768)
//       if (window.innerWidth >= 768) {
//         setIsMobileMenuOpen(false)
//       }
//     }

//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   // Close mobile menu when route changes
//   useEffect(() => {
//     if (isMobileMenuOpen && isMobileView) {
//       setIsMobileMenuOpen(false)
//     }
//   }, [location.pathname])

//   const navItems = [
//     { to: "/", icon: <FiHome />, text: "Dashboard" },
//     { to: "/banklogs", icon: <FiShield />, text: "Bank Logs" },
//     { to: "/cashapp", icon: <FiDollarSign />, text: "CashApp" },
//     { to: "/paypal", icon: <FiCreditCard />, text: "PayPal" },
//     { to: "/dumps", icon: <FiPocket />, text: "Dumps" },
//     { to: "/paxful", icon: <FiDollarSign />, text: "Paxful" },
//     { to: "/account", icon: <FiUser />, text: "Account" },
//   ]

//   const adminItems = user?.isAdmin ? [
//     { to: "/admin", icon: <FiUser />, text: "Admin" }
//   ] : []

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       {isMobileView && (
//         <div className="fixed top-4 left-4 z-40">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="p-2 rounded-md bg-white dark:bg-dark-700 shadow-lg"
//           >
//             {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </motion.button>
//         </div>
//       )}

//       {/* Desktop Sidebar */}
//       {!isMobileView && (
//         <div className="hidden md:flex md:flex-col w-64 h-screen fixed border-r border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-700">
//           <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-dark-600">
//             <span className="text-xl font-bold text-primary-600 dark:text-primary-400">theIdealmarket</span>
//             <span className="text-xs ml-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded">
//               .shop
//             </span>
//           </div>
//           <nav className="flex-1 overflow-y-auto p-4 space-y-2">
//             {navItems.map((item) => (
//               <NavItem key={item.to} {...item} />
//             ))}
//             {adminItems.map((item) => (
//               <NavItem key={item.to} {...item} />
//             ))}
//           </nav>
//           <div className="p-4 border-t border-gray-200 dark:border-dark-600">
//             <button
//               onClick={logout}
//               className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
//             >
//               <FiLogOut className="mr-2" />
//               Logout
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Mobile Sidebar */}
//       <AnimatePresence>
//         {isMobileView && isMobileMenuOpen && (
//           <motion.div
//             initial={{ x: -300 }}
//             animate={{ x: 0 }}
//             exit={{ x: -300 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//             className="fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-dark-700 shadow-lg"
//           >
//             <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-dark-600">
//               <span className="text-xl font-bold text-primary-600 dark:text-primary-400">theIdealmarket</span>
//               <button
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="p-1 rounded-md text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//               >
//                 <FiX size={24} />
//               </button>
//             </div>
//             <nav className="flex-1 overflow-y-auto p-4 space-y-2">
//               {navItems.map((item) => (
//                 <NavItem key={item.to} {...item} />
//               ))}
//               {adminItems.map((item) => (
//                 <NavItem key={item.to} {...item} />
//               ))}
//             </nav>
//             <div className="p-4 border-t border-gray-200 dark:border-dark-600">
//               <button
//                 onClick={logout}
//                 className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
//               >
//                 <FiLogOut className="mr-2" />
//                 Logout
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Horizontal Navbar for medium screens */}
//       {!isMobileView && (
//         <div className="md:hidden lg:flex fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-700 border-t border-gray-200 dark:border-dark-600">
//           <nav className="flex overflow-x-auto py-2 px-4 space-x-2">
//             {navItems.map((item) => (
//               <NavItem key={item.to} {...item} isHorizontal />
//             ))}
//             {adminItems.map((item) => (
//               <NavItem key={item.to} {...item} isHorizontal />
//             ))}
//             <button
//               onClick={logout}
//               className="flex items-center px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md whitespace-nowrap"
//             >
//               <FiLogOut className="mr-2" />
//               Logout
//             </button>
//           </nav>
//         </div>
//       )}
//     </>
//   )
// }

// function NavItem({ to, icon, text, isHorizontal = false }) {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) => 
//         `flex items-center ${isHorizontal ? 'px-3 py-2' : 'p-3'} rounded-md text-sm font-medium ${
//           isActive 
//             ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-300' 
//             : 'text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-600 dark:hover:text-white'
//         }`
//       }
//     >
//       <span className="mr-2">{icon}</span>
//       {!isHorizontal && text}
//     </NavLink>
//   )
// }

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiShield,
  FiDollarSign,
  FiCreditCard,
  FiPocket,
  FiUser,
  FiMenu,
  FiX,
  FiLogOut,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

export default function SideNavbar() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen && isMobileView) {
      setIsMobileMenuOpen(false);
    }
  }, [location.pathname]);

  const navItems = [
    { to: "/", icon: <FiHome />, text: "Dashboard" },
    { to: "/banklogs", icon: <FiShield />, text: "Bank Logs" },
    { to: "/cashapp", icon: <FiDollarSign />, text: "CashApp" },
    { to: "/paypal", icon: <FiCreditCard />, text: "PayPal" },
    { to: "/dumps", icon: <FiPocket />, text: "Dumps" },
    { to: "/paxful", icon: <FiDollarSign />, text: "Paxful" },
    { to: "/account", icon: <FiUser />, text: "Account" },
  ];

  return (
    <>
      {/* Fixed Top Navbar for all screens */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md h-16 flex items-center px-4">
        {/* Mobile Menu Button (only shows on mobile) */}
        {isMobileView && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        )}

        {/* Site Name/Logo */}
        <div className="flex-1 flex justify-center md:justify-start ml-4 md:ml-0">
          <span className="text-xl font-bold text-primary-600">
            theIdealmarket
          </span>
          {/* <span className="text-xs ml-1 bg-primary-100 text-primary-800 px-2 py-1 rounded">
            .shop
          </span> */}
        </div>

        {/* Desktop Navigation Links (shows on tablet and larger) */}
        {!isMobileView && (
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "text-primary-600 border-b-2 border-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  }`
                }
              >
                {item.text}
              </NavLink>
            ))}
          </div>
        )}

        {/* Logout Button (shows on tablet and larger) */}
        {!isMobileView && (
          <button
            onClick={logout}
            className="ml-4 flex items-center text-red-600 hover:text-red-800"
          >
            <FiLogOut className="mr-1" />
            Logout
          </button>
        )}
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileView && isMobileMenuOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg pt-16"
          >
            <div className="h-full overflow-y-auto py-4">
              <nav className="space-y-1 px-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? "bg-primary-100 text-primary-600"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`
                    }
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.text}
                  </NavLink>
                ))}
                <button
                  onClick={logout}
                  className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-800 rounded-md"
                >
                  <FiLogOut className="mr-3" />
                  Logout
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}