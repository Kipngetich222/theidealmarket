import { motion } from "framer-motion";
import { FiInfo, FiAlertTriangle, FiCreditCard } from "react-icons/fi";

export default function Guidelines() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-dark-700 rounded-lg shadow p-6"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Marketplace Guidelines
      </h2>

      <div className="space-y-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300">
              <FiInfo className="h-5 w-5" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              Account Funding
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              To make purchases, you need to fund your account first. Click on
              "Add Funds" and follow the instructions to deposit using Bitcoin,
              Ethereum, USDT, or Solana.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-md bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300">
              <FiAlertTriangle className="h-5 w-5" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              Refund Policy
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Refunds are processed within 3-5 business days. Only unused funds
              can be refunded. Purchases are final and non-refundable.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-md bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
              <FiCreditCard className="h-5 w-5" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              Payment Methods
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              We accept Bitcoin (BTC), Ethereum (ETH), USDT (TRC20), and Solana
              (SOL). All transactions are secure and encrypted.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
