// // Simplified Navbar.jsx
// import { Link } from 'react-router-dom'
// import { useAuth } from '../../context/AuthContext'
// import { FiLogOut } from 'react-icons/fi'

// export default function Navbar() {
//   const { user, logout } = useAuth()

//   return (
//     <nav className="bg-white dark:bg-dark-700 border-b border-gray-200 dark:border-dark-600">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
//               theIdealMarket<span className="text-xs ml-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded">.shop</span>
//             </Link>
//           </div>
          
//           <div className="flex items-center">
//             {user && (
//               <button
//                 onClick={logout}
//                 className="flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
//               >
//                 <FiLogOut className="mr-2" />
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }