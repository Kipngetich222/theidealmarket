// components/Dashboard/BalanceCard.jsx
import { motion } from 'framer-motion'
import { FiDollarSign, FiPlus, FiRefreshCw } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function BalanceCard() {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium opacity-80">Available Balance</p>
            <h2 className="text-3xl font-bold mt-1">${user?.balance?.toFixed(2) || '0.00'}</h2>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            <FiDollarSign className="h-6 w-6" />
          </div>
        </div>
        
        <div className="mt-6 flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/payment')}
            className="flex-1 flex items-center justify-center bg-white/20 hover:bg-white/30 py-3 px-4 rounded-lg transition duration-200 font-medium"
          >
            <FiPlus className="mr-2" />
            Add Funds
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/request-refund')}
            className="flex-1 flex items-center justify-center bg-white/20 hover:bg-white/30 py-3 px-4 rounded-lg transition duration-200 font-medium"
          >
            <FiRefreshCw className="mr-2" />
            Request Refund
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}