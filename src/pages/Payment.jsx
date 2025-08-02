// // pages/Payment.jsx
// import { useState, useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { FiArrowLeft, FiCopy, FiCheck, FiTrash2 } from 'react-icons/fi'
// import { FaBitcoin, FaEthereum } from 'react-icons/fa'
// import { SiTether, SiSolana } from 'react-icons/si'
// import { FaTelegram } from 'react-icons/fa'
// import { useCart } from '../context/CartContext'
// import { useAuth } from '../context/AuthContext'
// import AnimatedButton from '../components/UI/AnimatedButton'

// export default function Payment() {
//   const { cartItems, removeFromCart, clearCart } = useCart()
//   const { user, addFunds } = useAuth()
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [selectedMethod, setSelectedMethod] = useState('bitcoin')
//   const [copied, setCopied] = useState(false)
//   const [txId, setTxId] = useState('')
//   const [isVerifying, setIsVerifying] = useState(false)
//   const [verificationResult, setVerificationResult] = useState(null)
//   const [fundAmount, setFundAmount] = useState('')
//   const [isAddingFunds, setIsAddingFunds] = useState(false)

//   const walletAddresses = {
//     bitcoin: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
//     ethereum: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
//     usdt: 'TNPZqGqPqT5LH6J6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6',
//     solana: 'HN5hBZ6L3zFk3ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6ZJ6'
//   }

//   // Initialize cart with item from navigation or empty
//   useEffect(() => {
//     if (location.state?.item) {
//       // Add to cart handled by cart context
//     }
//   }, [location.state])

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text)
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2000)
//   }

//   const verifyTransaction = async () => {
//     if (!txId.trim()) return
//     setIsVerifying(true)
//     // Simulate verification
//     await new Promise(resolve => setTimeout(resolve, 2000))
//     setIsVerifying(false)
//     // Random result for demo
//     const isVerified = Math.random() > 0.3
//     setVerificationResult(isVerified)
//   }

//   const handlePaymentSent = () => {
//     // For cart purchases, we would process the items
//     // For fund additions, handle differently
//     if (isAddingFunds) {
//       const amount = parseFloat(fundAmount)
//       if (amount > 0) {
//         addFunds(amount)
//         clearCart()
//         navigate('/payment-confirmation', { 
//           state: { 
//             method: selectedMethod,
//             amount: amount,
//             items: [{ name: "Account Funding", price: `$${amount.toFixed(2)}` }]
//           }
//         })
//       }
//     } else {
//       // Handle cart purchases
//       const totalAmount = cartItems.reduce((sum, item) => {
//         const price = parseFloat(item.price.replace('$', '').replace(',', ''))
//         return sum + price
//       }, 0)
      
//       if (totalAmount > 0) {
//         addFunds(-totalAmount) // Deduct from balance
//         navigate('/payment-confirmation', { 
//           state: { 
//             method: selectedMethod,
//             amount: totalAmount,
//             items: cartItems
//           }
//         })
//         clearCart()
//       }
//     }
//   }

//   const totalAmount = cartItems.reduce((sum, item) => {
//     const price = parseFloat(item.price.replace('$', '').replace(',', ''))
//     return sum + price
//   }, 0)

//   return (
//     <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-16 mb-16">
//       <div className="p-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center text-primary-600 hover:text-primary-800 mb-6"
//         >
//           <FiArrowLeft className="mr-2" />
//           Back to Marketplace
//         </button>

//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="md:w-1/2">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               Payment Details
//             </h2>

//             <div className="bg-gray-50 rounded-lg p-4 mb-6">
//               {isAddingFunds ? (
//                 <>
//                   <h3 className="font-medium text-gray-700 mb-2">
//                     Add Funds to Account
//                   </h3>
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Amount to Add (USD)
//                     </label>
//                     <input
//                       type="number"
//                       value={fundAmount}
//                       onChange={(e) => setFundAmount(e.target.value)}
//                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
//                       placeholder="Enter amount"
//                       min="1"
//                       step="0.01"
//                     />
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <h3 className="font-medium text-gray-700 mb-2">
//                     Your Cart ({cartItems.length})
//                   </h3>
//                   {cartItems.length > 0 ? (
//                     <ul className="divide-y divide-gray-200">
//                       {cartItems.map((item) => (
//                         <li key={item.id} className="py-3">
//                           <div className="flex justify-between items-start">
//                             <div>
//                               <p className="font-medium text-gray-800">
//                                 {item.name}
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 {item.vendor}
//                               </p>
//                             </div>
//                             <div className="flex items-center">
//                               <span className="font-bold text-gray-900 mr-4">
//                                 {item.price}
//                               </span>
//                               <button
//                                 onClick={() => removeFromCart(item.id)}
//                                 className="text-red-500 hover:text-red-700"
//                               >
//                                 <FiTrash2 />
//                               </button>
//                             </div>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="text-gray-500">Your cart is empty</p>
//                   )}

//                   <div className="mt-4 pt-4 border-t border-gray-200">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600 font-medium">Total:</span>
//                       <span className="font-bold text-gray-900">
//                         ${totalAmount.toFixed(2)}
//                       </span>
//                     </div>
//                   </div>
//                 </>
//               )}

//               <div className="mt-4 ">
//                 <AnimatedButton
//                   onClick={() => setIsAddingFunds(!isAddingFunds)}
//                   className="text-primary-600 hover:text-primary-800 text-sm"
//                 >
//                   {isAddingFunds
//                     ? "← Back to Cart"
//                     : "Add Funds to Account here"}
//                 </AnimatedButton>
//               </div>
//             </div>

            
//             <div className="mb-6">
//               <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
//                 Select Payment Method:
//               </h3>

//               <div className="grid grid-cols-2 gap-3">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setSelectedMethod("bitcoin")}
//                   className={`flex items-center justify-center p-3 rounded-lg border-2 ${
//                     selectedMethod === "bitcoin"
//                       ? "border-bitcoin bg-bitcoin/10"
//                       : "border-gray-300 dark:border-dark-500"
//                   }`}
//                 >
//                   <FaBitcoin
//                     className={`text-2xl mr-2 ${
//                       selectedMethod === "bitcoin"
//                         ? "text-bitcoin"
//                         : "text-gray-500 dark:text-gray-400"
//                     }`}
//                   />
//                   <span
//                     className={
//                       selectedMethod === "bitcoin"
//                         ? "font-medium text-bitcoin"
//                         : "text-gray-700 dark:text-gray-300"
//                     }
//                   >
//                     Bitcoin
//                   </span>
//                 </motion.button>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setSelectedMethod("ethereum")}
//                   className={`flex items-center justify-center p-3 rounded-lg border-2 ${
//                     selectedMethod === "ethereum"
//                       ? "border-ethereum bg-ethereum/10"
//                       : "border-gray-300 dark:border-dark-500"
//                   }`}
//                 >
//                   <FaEthereum
//                     className={`text-2xl mr-2 ${
//                       selectedMethod === "ethereum"
//                         ? "text-ethereum"
//                         : "text-gray-500 dark:text-gray-400"
//                     }`}
//                   />
//                   <span
//                     className={
//                       selectedMethod === "ethereum"
//                         ? "font-medium text-ethereum"
//                         : "text-gray-700 dark:text-gray-300"
//                     }
//                   >
//                     Ethereum
//                   </span>
//                 </motion.button>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setSelectedMethod("usdt")}
//                   className={`flex items-center justify-center p-3 rounded-lg border-2 ${
//                     selectedMethod === "usdt"
//                       ? "border-usdt bg-usdt/10"
//                       : "border-gray-300 dark:border-dark-500"
//                   }`}
//                 >
//                   <SiTether
//                     className={`text-2xl mr-2 ${
//                       selectedMethod === "usdt"
//                         ? "text-usdt"
//                         : "text-gray-500 dark:text-gray-400"
//                     }`}
//                   />
//                   <span
//                     className={
//                       selectedMethod === "usdt"
//                         ? "font-medium text-usdt"
//                         : "text-gray-700 dark:text-gray-300"
//                     }
//                   >
//                     USDT
//                   </span>
//                 </motion.button>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setSelectedMethod("solana")}
//                   className={`flex items-center justify-center p-3 rounded-lg border-2 ${
//                     selectedMethod === "solana"
//                       ? "border-solana bg-solana/10"
//                       : "border-gray-300 dark:border-dark-500"
//                   }`}
//                 >
//                   <SiSolana
//                     className={`text-2xl mr-2 ${
//                       selectedMethod === "solana"
//                         ? "text-solana"
//                         : "text-gray-500 dark:text-gray-400"
//                     }`}
//                   />
//                   <span
//                     className={
//                       selectedMethod === "solana"
//                         ? "font-medium text-solana"
//                         : "text-gray-700 dark:text-gray-300"
//                     }
//                   >
//                     Solana
//                   </span>
//                 </motion.button>
//               </div>
//             </div>

//             {selectedMethod === "bitcoin" && (
//               <div className="mb-6">
//                 <label
//                   htmlFor="txId"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//                 >
//                   Bitcoin Transaction ID (Optional)
//                 </label>
//                 <div className="flex">
//                   <input
//                     id="txId"
//                     type="text"
//                     value={txId}
//                     onChange={(e) => setTxId(e.target.value)}
//                     placeholder="Enter TXID to verify payment"
//                     className="flex-1 bg-white dark:bg-dark-600 border border-gray-300 dark:border-dark-500 rounded-l-md px-3 py-2 text-sm text-gray-900 dark:text-white"
//                   />
//                   <button
//                     onClick={verifyTransaction}
//                     disabled={!txId.trim() || isVerifying}
//                     className={`px-3 py-2 rounded-r-md text-sm ${
//                       !txId.trim() || isVerifying
//                         ? "bg-gray-300 dark:bg-dark-500 text-gray-500 dark:text-gray-400 cursor-not-allowed"
//                         : "bg-primary-600 hover:bg-primary-700 text-white"
//                     }`}
//                   >
//                     {isVerifying ? "Verifying..." : "Verify"}
//                   </button>
//                 </div>
//                 {verificationResult !== null && (
//                   <p
//                     className={`mt-2 text-sm ${
//                       verificationResult
//                         ? "text-green-600 dark:text-green-400"
//                         : "text-red-600 dark:text-red-400"
//                     }`}
//                   >
//                     {verificationResult
//                       ? "✅ Payment verified successfully!"
//                       : "❌ Could not verify payment. Please check the TXID or try again later."}
//                   </p>
//                 )}
//               </div>
//             )}

//             <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
//               <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
//                 Important Notice
//               </h3>
//               <p className="text-sm text-yellow-700 dark:text-yellow-300">
//                 Send only {selectedMethod.toUpperCase()} to this address.
//                 Sending other assets may result in permanent loss.
//               </p>
//             </div>

//             {/* -------------------------------------------------------------------------------------------------- */}
//           </div>

//           <div className="md:w-1/2">
//             <div className="bg-gray-50 rounded-lg p-6">
//               <h3 className="font-bold text-gray-800 mb-4">Send Payment To:</h3>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Wallet Address:
//                 </label>
//                 <div className="flex">
//                   <input
//                     type="text"
//                     readOnly
//                     value={walletAddresses[selectedMethod]}
//                     className="flex-1 bg-white border border-gray-300 rounded-l-md px-3 py-2 text-sm text-gray-900"
//                   />
//                   <AnimatedButton
//                     onClick={() =>
//                       copyToClipboard(walletAddresses[selectedMethod])
//                     }
//                     className="rounded-r-md"
//                   >
//                     {copied ? <FiCheck /> : <FiCopy />}
//                   </AnimatedButton>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Amount to Send:
//                 </label>
//                 <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2">
//                   <span className="text-gray-500 mr-2">$</span>
//                   <input
//                     type="text"
//                     readOnly
//                     value={
//                       isAddingFunds
//                         ? fundAmount || "0.00"
//                         : totalAmount.toFixed(2)
//                     }
//                     className="flex-1 bg-transparent text-gray-900 outline-none"
//                   />
//                 </div>
//               </div>

//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
//                 <h3 className="font-medium text-blue-800 mb-2">
//                   Payment Instructions
//                 </h3>
//                 <ol className="text-sm text-blue-700 list-decimal pl-5 space-y-1">
//                   <li>Copy the wallet address above</li>
//                   <li>Send exact amount from your wallet</li>
//                   <li>Wait for blockchain confirmation (usually 10-30 mins)</li>
//                   <li>Your account will be credited automatically</li>
//                 </ol>
//               </div>

//               <AnimatedButton
//                 onClick={handlePaymentSent}
//                 disabled={
//                   isAddingFunds
//                     ? !fundAmount || parseFloat(fundAmount) <= 0
//                     : cartItems.length === 0
//                 }
//                 className="w-full py-3 px-4"
//               >
//                 {isAddingFunds ? "Add Funds" : "Complete Purchase"}
//               </AnimatedButton>

             
//               <div className="mt-4 justify-center flex">
//                 <motion.a
//                   href="https://t.me/idealmarket_support"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center bg-[#0088CC] text-white px-3 py-1 rounded text-sm font-medium"
//                 >
//                   <FaTelegram className="mr-1" />
//                   Need help? Contact on Telegram
//                 </motion.a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// pages/Payment.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FiArrowLeft, FiCopy, FiCheck, 
  FiTrash2, FiPlus, FiMinus 
} from 'react-icons/fi'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'
import { SiTether, SiSolana } from 'react-icons/si'
import { FaTelegram } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import AnimatedButton from '../components/UI/AnimatedButton'

export default function Payment() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()
  const { user, addFunds } = useAuth()
  const navigate = useNavigate()
  
  const [selectedMethod, setSelectedMethod] = useState('bitcoin')
  const [copied, setCopied] = useState(false)
  const [txId, setTxId] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState(null)
  const [fundAmount, setFundAmount] = useState('')
  const [isAddingFunds, setIsAddingFunds] = useState(false)

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

  const verifyTransaction = async () => {
    if (!txId.trim()) return
    setIsVerifying(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsVerifying(false)
    setVerificationResult(Math.random() > 0.3)
  }

  const handleCompletePurchase = () => {
    if (isAddingFunds) {
      const amount = parseFloat(fundAmount)
      if (amount > 0 && user) {
        addFunds(amount)
        navigate('/payment-confirmation', { 
          state: { 
            method: selectedMethod,
            amount: amount,
            items: [{ 
              name: "Account Funding", 
              price: `$${amount.toFixed(2)}`,
              quantity: 1
            }]
          }
        })
      }
    } else {
      if (cart.items.length > 0 && user) {
        // Deduct from balance and clear cart
        addFunds(-cart.total)
        navigate('/payment-confirmation', { 
          state: { 
            method: selectedMethod,
            amount: cart.total,
            items: cart.items
          }
        })
        clearCart()
      }
    }
  }

  const formatPrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, "")).toFixed(2)
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-16 mb-16">
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary-600 hover:text-primary-800 mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back to Marketplace
        </button>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Details</h2>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              {isAddingFunds ? (
                <>
                  <h3 className="font-medium text-gray-700 mb-2">Add Funds to Account</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Amount to Add (USD)
                    </label>
                    <input
                      type="number"
                      value={fundAmount}
                      onChange={(e) => setFundAmount(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Enter amount"
                      min="1"
                      step="0.01"
                    />
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-medium text-gray-700 mb-2">
                    Your Cart ({cart.items.reduce((sum, item) => sum + item.quantity, 0)})
                  </h3>
                  {cart.items.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                      {cart.items.map((item) => (
                        <li key={item.id} className="py-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-gray-800">{item.name}</p>
                              <p className="text-sm text-gray-600">{item.vendor}</p>
                            </div>
                            <div className="flex items-center">
                              <div className="flex items-center mr-4">
                                <button 
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-gray-500 hover:text-primary-600 p-1"
                                >
                                  <FiMinus size={16} />
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button 
                                  onClick={() => addToCart(item)}
                                  className="text-gray-500 hover:text-primary-600 p-1"
                                >
                                  <FiPlus size={16} />
                                </button>
                              </div>
                              <span className="font-bold text-gray-900 mr-4">
                                ${(formatPrice(item.price) * item.quantity).toFixed(2)}
                              </span>
                              <button
                                onClick={() => removeFromCart(item.id, true)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <FiTrash2 />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Your cart is empty</p>
                  )}
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">Total:</span>
                      <span className="font-bold text-gray-900">${cart.total.toFixed(2)}</span>
                    </div>
                  </div>
                </>
              )}
              
              <div className="mt-4">
                <button
                  onClick={() => setIsAddingFunds(!isAddingFunds)}
                  className="text-primary-600 hover:text-primary-800 text-sm"
                >
                  {isAddingFunds ? '← Back to Cart' : 'Add Funds Instead'}
                </button>
              </div>
            </div>
            
            {/* Payment method selection and verification UI remains same */}
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

            {selectedMethod === "bitcoin" && (
              <div className="mb-6">
                <label
                  htmlFor="txId"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
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
                        ? "bg-gray-300 dark:bg-dark-500 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                        : "bg-primary-600 hover:bg-primary-700 text-white"
                    }`}
                  >
                    {isVerifying ? "Verifying..." : "Verify"}
                  </button>
                </div>
                {verificationResult !== null && (
                  <p
                    className={`mt-2 text-sm ${
                      verificationResult
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {verificationResult
                      ? "✅ Payment verified successfully!"
                      : "❌ Could not verify payment. Please check the TXID or try again later."}
                  </p>
                )}
              </div>
            )}

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                Important Notice
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Send only {selectedMethod.toUpperCase()} to this address.
                Sending other assets may result in permanent loss.
              </p>
            </div>

            {/* -------------------------------------------------------------------------------------------------- */}
          
            {/* ... */}
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">Send Payment To:</h3>
              
              {/* Wallet address and amount UI remains same */}
              <div className="mb-6">
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Wallet Address:
                              </label>
                              <div className="flex">
                                <input
                                  type="text"
                                  readOnly
                                  value={walletAddresses[selectedMethod]}
                                  className="flex-1 bg-white border border-gray-300 rounded-l-md px-3 py-2 text-sm text-gray-900"
                                />
                                <AnimatedButton
                                  onClick={() =>
                                    copyToClipboard(walletAddresses[selectedMethod])
                                  }
                                  className="rounded-r-md"
                                >
                                  {copied ? <FiCheck /> : <FiCopy />}
                                </AnimatedButton>
                              </div>
                            </div>
              
                            <div className="mb-6">
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Amount to Send:
                              </label>
                              <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2">
                                <span className="text-gray-500 mr-2">$</span>
                                <input
                                  type="text"
                                  readOnly
                                  value={
                                    isAddingFunds
                                      ? fundAmount || "0.00"
                                      : cart.total.toFixed(2)
                                  }
                                  className="flex-1 bg-transparent text-gray-900 outline-none"
                                />
                              </div>
                            </div>
              
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                              <h3 className="font-medium text-blue-800 mb-2">
                                Payment Instructions
                              </h3>
                              <ol className="text-sm text-blue-700 list-decimal pl-5 space-y-1">
                                <li>Copy the wallet address above</li>
                                <li>Send exact amount from your wallet</li>
                                <li>Wait for blockchain confirmation (usually 10-30 mins)</li>
                                <li>Your account will be credited automatically</li>
                              </ol>
                            </div>
              
              {/* ... */}
              
              <AnimatedButton
                onClick={handleCompletePurchase}
                disabled={
                  isAddingFunds 
                    ? !fundAmount || parseFloat(fundAmount) <= 0 
                    : cart.items.length === 0 || !user
                }
                className="w-full py-3 px-4"
              >
                {isAddingFunds ? 'Add Funds' : 'Complete Purchase'}
              </AnimatedButton>
              
              <div className="mt-4 text-center">
                <AnimatedButton
                  href="https://t.me/idealmarket_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#0088CC] hover:bg-[#0077B5] px-4 py-2"
                >
                  <FaTelegram className="mr-2" />
                  Need Help? Contact on Telegram
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}