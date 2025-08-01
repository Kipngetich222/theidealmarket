import { useAuth } from "../context/AuthContext";
import BalanceCard from "../components/Dashboard/BalanceCard";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiDollarSign,
  FiClock,
  FiLogOut,
} from "react-icons/fi";

export default function Account() {
  const { user, logout } = useAuth();

  return (
    <div className="bg-white dark:bg-dark-700 rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Account Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <FiUser className="mr-2" />
              Personal Information
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Username
                </p>
                <p className="font-medium text-gray-800 dark:text-white">
                  {user?.username || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="font-medium text-gray-800 dark:text-white">
                  {user?.email || "N/A"}
                </p>
              </div>
            </div>
          </div>

          <BalanceCard />
        </div>

        <div>
          <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <FiClock className="mr-2" />
              Recent Transactions
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-dark-500 pb-3">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    Account Funding
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2025-06-15
                  </p>
                </div>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  +$500.00
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 dark:border-dark-500 pb-3">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    Bank Log Purchase
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2025-06-14
                  </p>
                </div>
                <span className="text-red-600 dark:text-red-400 font-medium">
                  -$200.00
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 dark:border-dark-500 pb-3">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    Account Funding
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2025-06-10
                  </p>
                </div>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  +$300.00
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    CashApp Purchase
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2025-06-08
                  </p>
                </div>
                <span className="text-red-600 dark:text-red-400 font-medium">
                  -$150.00
                </span>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-4 flex items-center">
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
  );
}
