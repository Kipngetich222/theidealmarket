import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether, SiSolana } from "react-icons/si";
import { FiX, FiCopy, FiCheck } from "react-icons/fi";

export default function PaymentModal({ isOpen, onClose, amount }) {
  const [selectedMethod, setSelectedMethod] = useState("bitcoin");
  const [copied, setCopied] = useState(false);

  const walletAddresses = {
    bitcoin: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
    ethereum: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    usdt: "TNPZqGqPqT5LH6J6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6",
    solana: "HN5hBZ6L3zFk3ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white dark:bg-dark-700 rounded-lg shadow-xl max-w-md w-full"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  Add Funds
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Amount to Deposit (USD)
                </label>
                <input
                  type="number"
                  value={amount}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-md bg-gray-100 dark:bg-dark-600 text-gray-900 dark:text-white"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedMethod("bitcoin")}
                    className={`flex items-center justify-center p-3 rounded-lg border-2 ${
                      selectedMethod === "bitcoin"
                        ? "border-bitcoin bg-bitcoin/10"
                        : "border-gray-300 dark:border-dark-500"
                    }`}
                  >
                    <FaBitcoin
                      className={`text-2xl mr-2 ${
                        selectedMethod === "bitcoin"
                          ? "text-bitcoin"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    />
                    <span
                      className={
                        selectedMethod === "bitcoin"
                          ? "font-medium text-bitcoin"
                          : "text-gray-700 dark:text-gray-300"
                      }
                    >
                      Bitcoin
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedMethod("ethereum")}
                    className={`flex items-center justify-center p-3 rounded-lg border-2 ${
                      selectedMethod === "ethereum"
                        ? "border-ethereum bg-ethereum/10"
                        : "border-gray-300 dark:border-dark-500"
                    }`}
                  >
                    <FaEthereum
                      className={`text-2xl mr-2 ${
                        selectedMethod === "ethereum"
                          ? "text-ethereum"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    />
                    <span
                      className={
                        selectedMethod === "ethereum"
                          ? "font-medium text-ethereum"
                          : "text-gray-700 dark:text-gray-300"
                      }
                    >
                      Ethereum
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedMethod("usdt")}
                    className={`flex items-center justify-center p-3 rounded-lg border-2 ${
                      selectedMethod === "usdt"
                        ? "border-usdt bg-usdt/10"
                        : "border-gray-300 dark:border-dark-500"
                    }`}
                  >
                    <SiTether
                      className={`text-2xl mr-2 ${
                        selectedMethod === "usdt"
                          ? "text-usdt"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    />
                    <span
                      className={
                        selectedMethod === "usdt"
                          ? "font-medium text-usdt"
                          : "text-gray-700 dark:text-gray-300"
                      }
                    >
                      USDT
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedMethod("solana")}
                    className={`flex items-center justify-center p-3 rounded-lg border-2 ${
                      selectedMethod === "solana"
                        ? "border-solana bg-solana/10"
                        : "border-gray-300 dark:border-dark-500"
                    }`}
                  >
                    <SiSolana
                      className={`text-2xl mr-2 ${
                        selectedMethod === "solana"
                          ? "text-solana"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    />
                    <span
                      className={
                        selectedMethod === "solana"
                          ? "font-medium text-solana"
                          : "text-gray-700 dark:text-gray-300"
                      }
                    >
                      Solana
                    </span>
                  </motion.button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Wallet Address
                </label>
                <div className="flex">
                  <input
                    type="text"
                    readOnly
                    value={walletAddresses[selectedMethod]}
                    className="flex-1 bg-white dark:bg-dark-600 border border-gray-300 dark:border-dark-500 rounded-l-md px-3 py-2 text-sm text-gray-900 dark:text-white"
                  />
                  <button
                    onClick={() =>
                      copyToClipboard(walletAddresses[selectedMethod])
                    }
                    className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-r-md text-sm"
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                  </button>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Send only {selectedMethod.toUpperCase()} to this address.
                  Sending other assets may result in permanent loss.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
              >
                I've Sent the Payment
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
