// pages/Payment.jsx
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiCopy, FiCheck, FiTrash2 } from 'react-icons/fi'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'
import { SiTether, SiSolana } from 'react-icons/si'
import { FaTelegram } from 'react-icons/fa'

export default function Payment() {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedMethod, setSelectedMethod] = useState('bitcoin')
  const [copied, setCopied] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [txId, setTxId] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState(null)

  // Initialize cart with item from navigation or empty
  useEffect(() => {
    if (location.state?.item) {
      setCartItems([{ ...location.state.item, id: Date.now() }])
    }
  }, [location.state])

  const walletAddresses = {
    bitcoin: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
    ethereum: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    usdt: 'TNPZqGqPqT5LH6J6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6',
    solana: 'HN5hBZ6L3zFk3ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6'
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const totalAmount = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', ''))
    return sum + price
  }, 0)

  const verifyTransaction = async () => {
    if (!txId.trim()) return
    setIsVerifying(true)
    // Simulate verification
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsVerifying(false)
    // Random result for demo
    const isVerified = Math.random() > 0.3
    setVerificationResult(isVerified)
  }

  const handlePaymentSent = () => {
    navigate('/payment-confirmation', { 
      state: { 
        method: selectedMethod,
        amount: totalAmount,
        items: cartItems
      }
    })
  }

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-dark-700 rounded-xl shadow-lg overflow-hidden">
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
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Payment Details</h2>
            
            <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Your Cart ({cartItems.length})</h3>
              
              {cartItems.length > 0 ? (
                <ul className="divide-y divide-gray-200 dark:divide-dark-500">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">{item.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.vendor}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold text-gray-900 dark:text-white mr-4">{item.price}</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
              )}
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-500">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Total:</span>
                  <span className="font-bold text-gray-900 dark:text-white">${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Select Payment Method:</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMethod('bitcoin')}
                  className={`flex items-center justify-center p-3 rounded-lg border-2 ${selectedMethod === 'bitcoin' ? 'border-bitcoin bg-bitcoin/10' : 'border-gray-300 dark:border-dark-500'}`}
                >
                  <FaBitcoin className={`text-2xl mr-2 ${selectedMethod === 'bitcoin' ? 'text-bitcoin' : 'text-gray-500 dark:text-gray-400'}`} />
                  <span className={selectedMethod === 'bitcoin' ? 'font-medium text-bitcoin' : 'text-gray-700 dark:text-gray-300'}>Bitcoin</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMethod('ethereum')}
                  className={`flex items-center justify-center p-3 rounded-lg border-2 ${selectedMethod === 'ethereum' ? 'border-ethereum bg-ethereum/10' : 'border-gray-300 dark:border-dark-500'}`}
                >
                  <FaEthereum className={`text-2xl mr-2 ${selectedMethod === 'ethereum' ? 'text-ethereum' : 'text-gray-500 dark:text-gray-400'}`} />
                  <span className={selectedMethod === 'ethereum' ? 'font-medium text-ethereum' : 'text-gray-700 dark:text-gray-300'}>Ethereum</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMethod('usdt')}
                  className={`flex items-center justify-center p-3 rounded-lg border-2 ${selectedMethod === 'usdt' ? 'border-usdt bg-usdt/10' : 'border-gray-300 dark:border-dark-500'}`}
                >
                  <SiTether className={`text-2xl mr-2 ${selectedMethod === 'usdt' ? 'text-usdt' : 'text-gray-500 dark:text-gray-400'}`} />
                  <span className={selectedMethod === 'usdt' ? 'font-medium text-usdt' : 'text-gray-700 dark:text-gray-300'}>USDT</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMethod('solana')}
                  className={`flex items-center justify-center p-3 rounded-lg border-2 ${selectedMethod === 'solana' ? 'border-solana bg-solana/10' : 'border-gray-300 dark:border-dark-500'}`}
                >
                  <SiSolana className={`text-2xl mr-2 ${selectedMethod === 'solana' ? 'text-solana' : 'text-gray-500 dark:text-gray-400'}`} />
                  <span className={selectedMethod === 'solana' ? 'font-medium text-solana' : 'text-gray-700 dark:text-gray-300'}>Solana</span>
                </motion.button>
              </div>
            </div>
            
            {selectedMethod === 'bitcoin' && (
              <div className="mb-6">
                <label htmlFor="txId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bitcoin Transaction ID (Optional)
                </label>
                <div className="flex">
                  <input
                    id="txId"
                    type="text"
                    value={txId}
                    onChange={(e) => setTxId(e.target.value)}
                    placeholder="Enter TXID to verify payment"
                    className="flex-1 bg-white dark:bg-dark-600 border border-gray-300 dark:border-dark-500 rounded-l-md px-3 py-2 text-sm text-gray-900 dark:text-white"
                  />
                  <button
                    onClick={verifyTransaction}
                    disabled={!txId.trim() || isVerifying}
                    className={`px-3 py-2 rounded-r-md text-sm ${
                      !txId.trim() || isVerifying
                        ? 'bg-gray-300 dark:bg-dark-500 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                    }`}
                  >
                    {isVerifying ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
                {verificationResult !== null && (
                  <p className={`mt-2 text-sm ${
                    verificationResult ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {verificationResult ? '✅ Payment verified successfully!' : '❌ Could not verify payment. Please check the TXID or try again later.'}
                  </p>
                )}
              </div>
            )}
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Important Notice</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Send only {selectedMethod.toUpperCase()} to this address. Sending other assets may result in permanent loss.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4">Send Payment To:</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Wallet Address:</label>
                <div className="flex">
                  <input
                    type="text"
                    readOnly
                    value={walletAddresses[selectedMethod]}
                    className="flex-1 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-500 rounded-l-md px-3 py-2 text-sm text-gray-900 dark:text-white"
                  />
                  <button
                    onClick={() => copyToClipboard(walletAddresses[selectedMethod])}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-r-md text-sm"
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount to Send:</label>
                <div className="flex items-center bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-500 rounded-md px-3 py-2">
                  <span className="text-gray-500 dark:text-gray-400 mr-2">$</span>
                  <input
                    type="text"
                    readOnly
                    value={totalAmount.toFixed(2)}
                    className="flex-1 bg-transparent text-gray-900 dark:text-white outline-none"
                  />
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Payment Instructions</h3>
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
                onClick={handlePaymentSent}
                disabled={cartItems.length === 0}
                className={`w-full py-3 px-4 rounded-lg font-medium transition duration-200 ${
                  cartItems.length > 0
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-200 dark:bg-dark-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                I've Sent the Payment
              </motion.button>
              
              <div className="mt-4 text-center">
                <motion.a
                  href="https://t.me/idealmarket_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-[#0088CC] text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  <FaTelegram className="mr-2" />
                  Need Help? Contact on Telegram
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

