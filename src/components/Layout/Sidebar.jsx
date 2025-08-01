// import { useState, useEffect } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiHome,
//   FiShield,
//   FiDollarSign,
//   FiCreditCard,
//   FiPocket,
//   FiUser,
//   FiMenu,
//   FiX,
//   FiLogOut,
//   FiChevronDown,
//   FiChevronRight,
// } from "react-icons/fi";
// import { useAuth } from "../../context/AuthContext";

// export default function SideNavbar() {
//   const { user, logout } = useAuth();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
//   const [expandedSections, setExpandedSections] = useState({
//     bankLogs: false,
//     cards: false,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 768);
//       if (window.innerWidth >= 768) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (isMobileMenuOpen && isMobileView) {
//       setIsMobileMenuOpen(false);
//     }
//   }, [location.pathname]);

//   const toggleSection = (section) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   const mainNavItems = [
//     { to: "/", icon: <FiHome />, text: "Dashboard" },
//     { to: "/account", icon: <FiUser />, text: "Account" },
//   ];

//   const renderBankLogsMenu = (mobile = false) => (
//     <>
//       <button
//         onClick={() => toggleSection("bankLogs")}
//         className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md ${
//           mobile
//             ? "text-gray-700 hover:bg-gray-100"
//             : "text-gray-700 hover:text-gray-900"
//         }`}
//       >
//         <div className="flex items-center">
//           <FiShield className="mr-3" />
//           <span>Bank Logs</span>
//         </div>
//         {expandedSections.bankLogs ? <FiChevronDown /> : <FiChevronRight />}
//       </button>

//       {expandedSections.bankLogs && (
//         <div className="ml-8 space-y-1">
//           <h4 className="text-xs font-semibold text-gray-500 mt-2 mb-1">
//             USA BANKS
//           </h4>
//           <NavLink
//             to="/banklogs/boa"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             Bank of America
//           </NavLink>
//           <NavLink
//             to="/banklogs/chase"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             Chase Bank
//           </NavLink>
//           <NavLink
//             to="/banklogs/citi"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             Citibank
//           </NavLink>
//           <NavLink
//             to="/banklogs/wellsfargo"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             Wells Fargo
//           </NavLink>
//           <NavLink
//             to="/banklogs/huntington"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             Huntington
//           </NavLink>
//           <NavLink
//             to="/banklogs/tdbank"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             TD Bank USA
//           </NavLink>
//           <NavLink
//             to="/banklogs/suntrust"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             SunTrust
//           </NavLink>

//           <h4 className="text-xs font-semibold text-gray-500 mt-2 mb-1">
//             CANADA BANKS
//           </h4>
//           <NavLink
//             to="/banklogs/canada/bmo"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             BMO
//           </NavLink>
//           <NavLink
//             to="/banklogs/canada/rbc"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             RBC
//           </NavLink>
//           <NavLink
//             to="/banklogs/canada/td"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             TD Canada
//           </NavLink>

//           <h4 className="text-xs font-semibold text-gray-500 mt-2 mb-1">
//             UK BANKS
//           </h4>
//           <NavLink
//             to="/banklogs/uk/barclays"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             Barclays
//           </NavLink>
//           <NavLink
//             to="/banklogs/uk/hsbc"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             HSBC
//           </NavLink>
//           <NavLink
//             to="/banklogs/uk/halifax"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             Halifax
//           </NavLink>
//           <NavLink
//             to="/banklogs/uk/lloyds"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             Lloyds
//           </NavLink>
//         </div>
//       )}
//     </>
//   );

//   const renderCardsMenu = (mobile = false) => (
//     <>
//       <button
//         onClick={() => toggleSection("cards")}
//         className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md ${
//           mobile
//             ? "text-gray-700 hover:bg-gray-100"
//             : "text-gray-700 hover:text-gray-900"
//         }`}
//       >
//         <div className="flex items-center">
//           <FiCreditCard className="mr-3" />
//           <span>Cards</span>
//         </div>
//         {expandedSections.cards ? <FiChevronDown /> : <FiChevronRight />}
//       </button>

//       {expandedSections.cards && (
//         <div className="ml-8 space-y-1">
//           <NavLink
//             to="/cards/visa"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             Visa Cards
//           </NavLink>
//           <NavLink
//             to="/cards/mastercard"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             MasterCard
//           </NavLink>
//           <NavLink
//             to="/cards/amex"
//             className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
//           >
//             Amex Cards
//           </NavLink>
//         </div>
//       )}
//     </>
//   );

//   return (
//     <>
//       {/* Fixed Top Navbar for all screens */}
//       <nav className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md h-16 flex items-center px-4">
//         {/* Mobile Menu Button (only shows on mobile) */}
//         {isMobileView && (
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
//           >
//             <FiMenu className="h-6 w-6" />
//           </button>
//         )}

//         {/* Site Name/Logo */}
//         <div className="flex-1 flex justify-center md:justify-start ml-4 md:ml-0">
//           <span className="text-xl font-bold text-primary-600">
//             theIdealmarket
//           </span>
//         </div>

//         {/* Desktop Navigation Links (shows on tablet and larger) */}
//         {!isMobileView && (
//           <div className="hidden md:flex space-x-4">
//             {mainNavItems.map((item) => (
//               <NavLink
//                 key={item.to}
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `px-3 py-2 text-sm font-medium ${
//                     isActive
//                       ? "text-primary-600 border-b-2 border-primary-600"
//                       : "text-gray-700 hover:text-primary-600"
//                   }`
//                 }
//               >
//                 {item.text}
//               </NavLink>
//             ))}
//             <div className="relative group">
//               <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
//                 Bank Logs
//               </button>
//               <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-50">
//                 {renderBankLogsMenu()}
//               </div>
//             </div>
//             <div className="relative group">
//               <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
//                 Cards
//               </button>
//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-50">
//                 {renderCardsMenu()}
//               </div>
//             </div>
//             <NavLink
//               to="/cashapp"
//               className={({ isActive }) =>
//                 `px-3 py-2 text-sm font-medium ${
//                   isActive
//                     ? "text-primary-600 border-b-2 border-primary-600"
//                     : "text-gray-700 hover:text-primary-600"
//                 }`
//               }
//             >
//               CashApp
//             </NavLink>
//             <NavLink
//               to="/paypal"
//               className={({ isActive }) =>
//                 `px-3 py-2 text-sm font-medium ${
//                   isActive
//                     ? "text-primary-600 border-b-2 border-primary-600"
//                     : "text-gray-700 hover:text-primary-600"
//                 }`
//               }
//             >
//               PayPal
//             </NavLink>
//             <NavLink
//               to="/dumps"
//               className={({ isActive }) =>
//                 `px-3 py-2 text-sm font-medium ${
//                   isActive
//                     ? "text-primary-600 border-b-2 border-primary-600"
//                     : "text-gray-700 hover:text-primary-600"
//                 }`
//               }
//             >
//               Dumps
//             </NavLink>
//             <NavLink
//               to="/paxful"
//               className={({ isActive }) =>
//                 `px-3 py-2 text-sm font-medium ${
//                   isActive
//                     ? "text-primary-600 border-b-2 border-primary-600"
//                     : "text-gray-700 hover:text-primary-600"
//                 }`
//               }
//             >
//               Paxful
//             </NavLink>
//           </div>
//         )}

//         {/* Logout Button (shows on tablet and larger) */}
//         {!isMobileView && (
//           <button
//             onClick={logout}
//             className="ml-4 flex items-center text-red-600 hover:text-red-800"
//           >
//             <FiLogOut className="mr-1" />
//             Logout
//           </button>
//         )}
//       </nav>

//       {/* Mobile Sidebar */}
//       <AnimatePresence>
//         {isMobileView && isMobileMenuOpen && (
//           <motion.div
//             initial={{ x: -300 }}
//             animate={{ x: 0 }}
//             exit={{ x: -300 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg pt-16"
//           >
//             <div className="h-full overflow-y-auto py-4">
//               <nav className="space-y-1 px-2">
//                 {mainNavItems.map((item) => (
//                   <NavLink
//                     key={item.to}
//                     to={item.to}
//                     className={({ isActive }) =>
//                       `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
//                         isActive
//                           ? "bg-primary-100 text-primary-600"
//                           : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                       }`
//                     }
//                   >
//                     <span className="mr-3">{item.icon}</span>
//                     {item.text}
//                   </NavLink>
//                 ))}

//                 {renderBankLogsMenu(true)}
//                 {renderCardsMenu(true)}

//                 <NavLink
//                   to="/cashapp"
//                   className={({ isActive }) =>
//                     `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
//                       isActive
//                         ? "bg-primary-100 text-primary-600"
//                         : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     }`
//                   }
//                 >
//                   <FiDollarSign className="mr-3" />
//                   CashApp
//                 </NavLink>
//                 <NavLink
//                   to="/paypal"
//                   className={({ isActive }) =>
//                     `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
//                       isActive
//                         ? "bg-primary-100 text-primary-600"
//                         : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     }`
//                   }
//                 >
//                   <FiCreditCard className="mr-3" />
//                   PayPal
//                 </NavLink>
//                 <NavLink
//                   to="/dumps"
//                   className={({ isActive }) =>
//                     `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
//                       isActive
//                         ? "bg-primary-100 text-primary-600"
//                         : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     }`
//                   }
//                 >
//                   <FiPocket className="mr-3" />
//                   Dumps
//                 </NavLink>
//                 <NavLink
//                   to="/paxful"
//                   className={({ isActive }) =>
//                     `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
//                       isActive
//                         ? "bg-primary-100 text-primary-600"
//                         : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     }`
//                   }
//                 >
//                   <FiDollarSign className="mr-3" />
//                   Paxful
//                 </NavLink>
//                 <button
//                   onClick={logout}
//                   className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-800 rounded-md"
//                 >
//                   <FiLogOut className="mr-3" />
//                   Logout
//                 </button>
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
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
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

export default function SideNavbar() {
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      if (!mobile) {
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
    // Close dropdowns when navigating
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  const bankLogsItems = [
    {
      title: "USA BANKS",
      items: [
        { to: "/banklogs/boa", text: "Bank of America" },
        { to: "/banklogs/chase", text: "Chase Bank" },
        { to: "/banklogs/citi", text: "Citibank" },
        { to: "/banklogs/wellsfargo", text: "Wells Fargo" },
        { to: "/banklogs/huntington", text: "Huntington" },
        { to: "/banklogs/tdbank", text: "TD Bank USA" },
        { to: "/banklogs/suntrust", text: "SunTrust" },
      ],
    },
    {
      title: "CANADA BANKS",
      items: [
        { to: "/banklogs/canada/bmo", text: "BMO" },
        { to: "/banklogs/canada/rbc", text: "RBC" },
        { to: "/banklogs/canada/td", text: "TD Canada" },
      ],
    },
    {
      title: "UK BANKS",
      items: [
        { to: "/banklogs/uk/barclays", text: "Barclays" },
        { to: "/banklogs/uk/hsbc", text: "HSBC" },
        { to: "/banklogs/uk/halifax", text: "Halifax" },
        { to: "/banklogs/uk/lloyds", text: "Lloyds" },
      ],
    },
  ];

  const cardsItems = [
    { to: "/cards/visa", text: "Visa Cards" },
    { to: "/cards/mastercard", text: "MasterCard" },
    { to: "/cards/amex", text: "Amex Cards" },
  ];

  const renderDesktopNav = () => (
    <div className="hidden md:flex items-center space-x-4">
      {/* Dashboard */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-700 hover:text-primary-600"
          }`
        }
        onClick={closeAllDropdowns}
      >
        Dashboard
      </NavLink>

      {/* Bank Logs Dropdown */}
      <div className="relative">
        <button
          className={`px-3 py-2 text-sm font-medium flex items-center ${
            activeDropdown === "bankLogs" ||
            location.pathname.includes("/banklogs")
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-700 hover:text-primary-600"
          }`}
          onClick={() => toggleDropdown("bankLogs")}
        >
          Bank Logs
          <FiChevronDown
            className={`ml-1 transition-transform ${
              activeDropdown === "bankLogs" ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {activeDropdown === "bankLogs" && (
          <div
            className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 z-50 border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {bankLogsItems.map((group, index) => (
              <div key={index}>
                {group.title && (
                  <h4 className="text-xs font-semibold text-gray-500 mt-2 mb-1 px-2">
                    {group.title}
                  </h4>
                )}
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                    onClick={closeAllDropdowns}
                  >
                    {item.text}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cards Dropdown */}
      <div className="relative">
        <button
          className={`px-3 py-2 text-sm font-medium flex items-center ${
            activeDropdown === "cards" || location.pathname.includes("/cards")
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-700 hover:text-primary-600"
          }`}
          onClick={() => toggleDropdown("cards")}
        >
          Cards
          <FiChevronDown
            className={`ml-1 transition-transform ${
              activeDropdown === "cards" ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {activeDropdown === "cards" && (
          <div
            className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50 border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {cardsItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                onClick={closeAllDropdowns}
              >
                {item.text}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      {/* Other direct links */}
      <NavLink
        to="/cashapp"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-700 hover:text-primary-600"
          }`
        }
        onClick={closeAllDropdowns}
      >
        CashApp
      </NavLink>
      <NavLink
        to="/paypal"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-700 hover:text-primary-600"
          }`
        }
        onClick={closeAllDropdowns}
      >
        PayPal
      </NavLink>
      <NavLink
        to="/dumps"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-700 hover:text-primary-600"
          }`
        }
        onClick={closeAllDropdowns}
      >
        Dumps
      </NavLink>
      <NavLink
        to="/paxful"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-700 hover:text-primary-600"
          }`
        }
        onClick={closeAllDropdowns}
      >
        Paxful
      </NavLink>

      {/* Account - Placed near Logout */}
      <div className="flex-grow"></div>
      <NavLink
        to="/account"
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium ${
            isActive
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-700 hover:text-primary-600"
          }`
        }
        onClick={closeAllDropdowns}
      >
        Account
      </NavLink>

      <button
        onClick={logout}
        className="ml-2 flex items-center text-red-600 hover:text-red-800"
      >
        <FiLogOut className="mr-1" />
        Logout
      </button>
    </div>
  );

  return (
    <>
      {/* Fixed Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md h-16 flex items-center px-4">
        {/* Mobile Menu Button */}
        {isMobileView && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        )}

        {/* Site Name/Logo - Centered on mobile, left on desktop */}
        <div
          className={`flex-1 ${
            isMobileView ? "text-center" : "text-left"
          } ml-4 md:ml-0`}
        >
          <span className="text-xl font-bold text-primary-600">
            theIdealmarket
          </span>
        </div>

        {/* Logout Button - Only visible on mobile */}
        {isMobileView && (
          <button onClick={logout} className="text-red-600 hover:text-red-800">
            <FiLogOut className="h-6 w-6" />
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobileView && renderDesktopNav()}
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
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full overflow-y-auto py-4">
              <nav className="space-y-1 px-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-primary-100 text-primary-600"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`
                  }
                >
                  <FiHome className="mr-3" />
                  Dashboard
                </NavLink>

                {/* Bank Logs Section */}
                <div className="space-y-1">
                  <button
                    onClick={() => toggleDropdown("bankLogsMobile")}
                    className="group flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <div className="flex items-center">
                      <FiShield className="mr-3" />
                      <span>Bank Logs</span>
                    </div>
                    <FiChevronDown
                      className={`transition-transform ${
                        activeDropdown === "bankLogsMobile"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === "bankLogsMobile" && (
                    <div className="ml-4 space-y-1">
                      <h4 className="text-xs font-semibold text-gray-500 mt-2 mb-1 px-2">
                        USA BANKS
                      </h4>
                      {bankLogsItems[0].items.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                        >
                          {item.text}
                        </NavLink>
                      ))}

                      <h4 className="text-xs font-semibold text-gray-500 mt-2 mb-1 px-2">
                        CANADA BANKS
                      </h4>
                      {bankLogsItems[1].items.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                        >
                          {item.text}
                        </NavLink>
                      ))}

                      <h4 className="text-xs font-semibold text-gray-500 mt-2 mb-1 px-2">
                        UK BANKS
                      </h4>
                      {bankLogsItems[2].items.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                        >
                          {item.text}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>

                {/* Cards Section */}
                <div className="space-y-1">
                  <button
                    onClick={() => toggleDropdown("cardsMobile")}
                    className="group flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <div className="flex items-center">
                      <FiCreditCard className="mr-3" />
                      <span>Cards</span>
                    </div>
                    <FiChevronDown
                      className={`transition-transform ${
                        activeDropdown === "cardsMobile"
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === "cardsMobile" && (
                    <div className="ml-4 space-y-1">
                      {cardsItems.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                        >
                          {item.text}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other links */}
                <NavLink
                  to="/cashapp"
                  className={({ isActive }) =>
                    `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-primary-100 text-primary-600"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`
                  }
                >
                  <FiDollarSign className="mr-3" />
                  CashApp
                </NavLink>
                <NavLink
                  to="/paypal"
                  className={({ isActive }) =>
                    `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-primary-100 text-primary-600"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`
                  }
                >
                  <FiCreditCard className="mr-3" />
                  PayPal
                </NavLink>
                <NavLink
                  to="/dumps"
                  className={({ isActive }) =>
                    `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-primary-100 text-primary-600"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`
                  }
                >
                  <FiPocket className="mr-3" />
                  Dumps
                </NavLink>
                <NavLink
                  to="/paxful"
                  className={({ isActive }) =>
                    `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-primary-100 text-primary-600"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`
                  }
                >
                  <FiDollarSign className="mr-3" />
                  Paxful
                </NavLink>

                {/* Account - At the bottom near logout */}
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <NavLink
                    to="/account"
                    className={({ isActive }) =>
                      `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? "bg-primary-100 text-primary-600"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`
                    }
                  >
                    <FiUser className="mr-3" />
                    Account
                  </NavLink>
                  <button
                    onClick={logout}
                    className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-800 rounded-md"
                  >
                    <FiLogOut className="mr-3" />
                    Logout
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close sidebar and dropdowns */}
      {isMobileView && isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setActiveDropdown(null);
          }}
        />
      )}
    </>
  );
}