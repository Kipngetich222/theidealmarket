import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCopy, FiCheck } from "react-icons/fi";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether, SiSolana } from "react-icons/si";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("bitcoin");
  const [copied, setCopied] = useState(false);

  const item = location.state?.item || {
    name: "Account Funding",
    price: "0.00",
  };

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
    <div className="max-w-4xl mx-auto bg-white dark:bg-dark-700 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back to Marketplace
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Payment Details
            </h2>

            <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                You're purchasing:
              </h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.name}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-500">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Price:
                  </span>
                  <span className="font-bold text-gray-900 dark:text-white">
                    ${item.price}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
                Select Payment Method:
              </h3>

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

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                Important Notice
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Send only {selectedMethod.toUpperCase()} to this address.
                Sending other assets may result in permanent loss.
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4">
                Send Payment To:
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Wallet Address:
                </label>
                <div className="flex">
                  <input
                    type="text"
                    readOnly
                    value={walletAddresses[selectedMethod]}
                    className="flex-1 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-500 rounded-l-md px-3 py-2 text-sm text-gray-900 dark:text-white"
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

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Amount to Send:
                </label>
                <div className="flex items-center bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-500 rounded-md px-3 py-2">
                  <span className="text-gray-500 dark:text-gray-400 mr-2">
                    $
                  </span>
                  <input
                    type="text"
                    readOnly
                    value={item.price}
                    className="flex-1 bg-transparent text-gray-900 dark:text-white outline-none"
                  />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                  Payment Instructions
                </h3>
                <ol className="text-sm text-blue-700 dark:text-blue-300 list-decimal pl-5 space-y-1">
                  <li>Copy the wallet address above</li>
                  <li>Send exact amount from your wallet</li>
                  <li>Wait for blockchain confirmation (usually 10-30 mins)</li>
                  <li>Your account will be credited automatically</li>
                </ol>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
              >
                I've Sent the Payment
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
