// pages/Account.jsx
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'
import { FiUser, FiMail, FiDollarSign, FiClock, FiLogOut } from 'react-icons/fi'
import BalanceCard from "../components/Dashboard/BalanceCard";

export default function Account() {
  const { user, logout } = useAuth()

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-16 mb-16">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Account Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <FiUser className="mr-2" />
              Personal Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Username</p>
                <p className="font-medium text-gray-800">{user?.username || 'N/A'}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">{user?.email || 'N/A'}</p>
              </div>
            </div>
          </div>
          
          <BalanceCard />
        </div>
        
        <div>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <FiClock className="mr-2" />
              Recent Transactions
            </h2>
            
            <div className="space-y-4">
              {user?.transactions?.length > 0 ? (
                user.transactions.slice(0, 5).map((tx) => (
                  <div key={tx.id} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <div>
                      <p className="font-medium text-gray-800">{tx.type}</p>
                      <p className="text-sm text-gray-500">{tx.date}</p>
                    </div>
                    <span className={`font-medium ${
                      tx.amount.startsWith('+') 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {tx.amount}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No recent transactions</p>
              )}
            </div>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
              <FiLogOut className="mr-2" />
              Account Actions
            </h2>
            
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={logout}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-medium"
              >
                Logout
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}