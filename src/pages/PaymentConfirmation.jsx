// pages/PaymentConfirmation.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiAlertTriangle } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

export default function PaymentConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { method, amount, items } = location.state || {};

  if (!location.state) {
    navigate("/");
    return null;
  }

  const paymentMethods = {
    bitcoin: { name: "Bitcoin", color: "bg-bitcoin/10 text-bitcoin" },
    ethereum: { name: "Ethereum", color: "bg-ethereum/10 text-ethereum" },
    usdt: { name: "USDT (TRC20)", color: "bg-usdt/10 text-usdt" },
    solana: { name: "Solana", color: "bg-solana/10 text-solana" },
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden p-6">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/50">
          <FiCheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
          Payment Received!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          We've received your payment of{" "}
          <span className="font-bold">${amount}</span> via{" "}
          {paymentMethods[method]?.name}.
        </p>

        <div className="mt-6 bg-gray-50 dark:bg-dark-600 rounded-lg p-4">
          <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
            Purchased Items
          </h3>
          <ul className="divide-y divide-gray-200 dark:divide-dark-500">
            {items.map((item, index) => (
              <li key={index} className="py-2">
                <div className="flex justify-between">
                  <span className="text-gray-800 dark:text-white">
                    {item.name}
                  </span>
                  <span className="font-medium">{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-dark-500">
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${amount}</span>
            </div>
          </div>
        </div>

        {/* <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <FiClock className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Processing Time
              </h3>
              <div className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  Your purchase will be processed within 1-3 hours. You'll
                  receive a confirmation message once completed.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <FiClock className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Processing Time
              </h3>
              <div className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  Your purchase will be processed within 1-3 hours. You'll
                  receive a confirmation message in your account within 5-10
                  minutes.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <FiClock className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Processing Time
              </h3>
              <div className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  Your purchase confirmation will appear in your account page
                  within 5 minutes. You'll receive a notification when it's
                  ready.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <FiAlertTriangle className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                Need Help?
              </h3>
              <div className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                <p>
                  If you have any issues with your purchase, please contact our
                  support team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Back to Dashboard
          </motion.button>

          <motion.a
            href="https://t.me/idealmarket_support"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-full bg-[#0088CC] hover:bg-[#0077B5] text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            <FaTelegram className="mr-2" />
            Contact Support on Telegram
          </motion.a>
        </div>
      </div>
    </div>
  );
}
