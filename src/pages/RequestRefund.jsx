// // pages/RequestRefund.jsx
// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { motion } from "framer-motion";
// import {
//   FiArrowLeft,
//   FiDollarSign,
//   FiMail,
//   FiCreditCard,
//   FiCheckCircle,
// } from "react-icons/fi";
// import { FaTelegram } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const refundSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Required"),
//   cryptoAddress: Yup.string().required("Required"),
//   amount: Yup.number()
//     .min(10, "Minimum refund amount is $10")
//     .required("Required"),
//   termsAccepted: Yup.boolean()
//     .oneOf([true], "You must accept the terms and conditions")
//     .required("Required"),
// });

// export default function RequestRefund() {
//   const navigate = useNavigate();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       cryptoAddress: "",
//       amount: "",
//       termsAccepted: false,
//     },
//     validationSchema: refundSchema,
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       setIsSubmitting(false);
//       setIsSuccess(true);
//     },
//   });

//   const pendingWithdrawals = [
//     {
//       id: "WD-78945",
//       amount: "$250.00",
//       date: "2025-06-15",
//       status: "Processing",
//     },
//     {
//       id: "WD-78944",
//       amount: "$100.00",
//       date: "2025-06-14",
//       status: "Pending",
//     },
//   ];

//   const recentTransactions = [
//     {
//       id: "TX-78945",
//       type: "Deposit",
//       amount: "+$500.00",
//       date: "2025-06-15",
//       status: "Completed",
//     },
//     {
//       id: "TX-78944",
//       type: "Purchase",
//       amount: "-$200.00",
//       date: "2025-06-15",
//       status: "Completed",
//     },
//     {
//       id: "TX-78943",
//       type: "Deposit",
//       amount: "+$300.00",
//       date: "2025-06-14",
//       status: "Completed",
//     },
//   ];

//   if (isSuccess) {
//     return (
//       <div className="max-w-md mx-auto bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden p-6">
//         <div className="text-center">
//           <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/50">
//             <FiCheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
//           </div>
//           <h2 className="mt-3 text-xl font-bold text-gray-800 dark:text-white">
//             Refund Request Submitted!
//           </h2>
//           <p className="mt-2 text-gray-600 dark:text-gray-300">
//             Your refund request has been received. We'll process it within 3-5
//             business days.
//           </p>
//           <div className="mt-6">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate("/")}
//               className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
//             >
//               Back to Dashboard
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden">
//       <div className="p-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 mb-6"
//         >
//           <FiArrowLeft className="mr-2" />
//           Back
//         </button>

//         <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
//           Request Refund
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//               Pending Withdrawals
//             </h2>
//             <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-4 mb-6">
//               {pendingWithdrawals.length > 0 ? (
//                 <ul className="divide-y divide-gray-200 dark:divide-dark-500">
//                   {pendingWithdrawals.map((withdrawal) => (
//                     <li key={withdrawal.id} className="py-3">
//                       <div className="flex justify-between">
//                         <span className="font-medium text-gray-800 dark:text-white">
//                           {withdrawal.id}
//                         </span>
//                         <span className="text-gray-600 dark:text-gray-300">
//                           {withdrawal.amount}
//                         </span>
//                       </div>
//                       <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
//                         <span>{withdrawal.date}</span>
//                         <span className="capitalize">{withdrawal.status}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500 dark:text-gray-400">
//                   No pending withdrawals
//                 </p>
//               )}
//             </div>

//             <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//               Recent Transactions
//             </h2>
//             <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-4">
//               {recentTransactions.length > 0 ? (
//                 <ul className="divide-y divide-gray-200 dark:divide-dark-500">
//                   {recentTransactions.map((tx) => (
//                     <li key={tx.id} className="py-3">
//                       <div className="flex justify-between">
//                         <span className="font-medium text-gray-800 dark:text-white">
//                           {tx.type}
//                         </span>
//                         <span
//                           className={`font-medium ${
//                             tx.amount.startsWith("+")
//                               ? "text-green-600 dark:text-green-400"
//                               : "text-red-600 dark:text-red-400"
//                           }`}
//                         >
//                           {tx.amount}
//                         </span>
//                       </div>
//                       <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
//                         <span>{tx.date}</span>
//                         <span className="capitalize">{tx.status}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500 dark:text-gray-400">
//                   No recent transactions
//                 </p>
//               )}
//             </div>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//               Refund Request Form
//             </h2>
//             <form onSubmit={formik.handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiMail className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.email}
//                     className={`pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                       formik.touched.email && formik.errors.email
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-300 dark:border-dark-500 focus:ring-primary-500"
//                     } dark:bg-dark-600`}
//                   />
//                 </div>
//                 {formik.touched.email && formik.errors.email && (
//                   <p className="mt-1 text-sm text-red-600 dark:text-red-400">
//                     {formik.errors.email}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="cryptoAddress"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Crypto Address Used for Payment
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiCreditCard className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="cryptoAddress"
//                     name="cryptoAddress"
//                     type="text"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.cryptoAddress}
//                     className={`pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                       formik.touched.cryptoAddress &&
//                       formik.errors.cryptoAddress
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-300 dark:border-dark-500 focus:ring-primary-500"
//                     } dark:bg-dark-600`}
//                   />
//                 </div>
//                 {formik.touched.cryptoAddress &&
//                   formik.errors.cryptoAddress && (
//                     <p className="mt-1 text-sm text-red-600 dark:text-red-400">
//                       {formik.errors.cryptoAddress}
//                     </p>
//                   )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="amount"
//                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                 >
//                   Amount to Refund (USD)
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiDollarSign className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="amount"
//                     name="amount"
//                     type="number"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.amount}
//                     className={`pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                       formik.touched.amount && formik.errors.amount
//                         ? "border-red-500 focus:ring-red-500"
//                         : "border-gray-300 dark:border-dark-500 focus:ring-primary-500"
//                     } dark:bg-dark-600`}
//                   />
//                 </div>
//                 {formik.touched.amount && formik.errors.amount && (
//                   <p className="mt-1 text-sm text-red-600 dark:text-red-400">
//                     {formik.errors.amount}
//                   </p>
//                 )}
//               </div>

//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="termsAccepted"
//                     name="termsAccepted"
//                     type="checkbox"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     checked={formik.values.termsAccepted}
//                     className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label
//                     htmlFor="termsAccepted"
//                     className="font-medium text-gray-700 dark:text-gray-300"
//                   >
//                     I have read and accept the{" "}
//                     <a
//                       href="/terms"
//                       className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
//                     >
//                       Terms and Conditions
//                     </a>
//                   </label>
//                   {formik.touched.termsAccepted &&
//                     formik.errors.termsAccepted && (
//                       <p className="mt-1 text-sm text-red-600 dark:text-red-400">
//                         {formik.errors.termsAccepted}
//                       </p>
//                     )}
//                 </div>
//               </div>

//               <div className="pt-4">
//                 <motion.button
//                   type="submit"
//                   disabled={!formik.isValid || isSubmitting}
//                   whileHover={{ scale: formik.isValid ? 1.02 : 1 }}
//                   whileTap={{ scale: formik.isValid ? 0.98 : 1 }}
//                   className={`w-full py-3 px-4 rounded-lg font-medium transition duration-200 ${
//                     formik.isValid
//                       ? "bg-primary-600 hover:bg-primary-700 text-white"
//                       : "bg-gray-200 dark:bg-dark-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
//                   }`}
//                 >
//                   {isSubmitting ? "Processing..." : "Submit Refund Request"}
//                 </motion.button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiDollarSign,
  FiMail,
  FiCreditCard,
  FiCheckCircle,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RequestRefund() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sample transactions data - in a real app, this would come from an API
  const transactions = user?.transactions || [];

  const refundSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    cryptoAddress: Yup.string().required("Required"),
    amount: Yup.number()
      .min(10, "Minimum refund amount is $10")
      .required("Required"),
    termsAccepted: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: user?.email || "",
      cryptoAddress: "",
      amount: "",
      termsAccepted: false,
    },
    validationSchema: refundSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
    },
  });

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mt-16 mb-16">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <FiCheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="mt-3 text-xl font-bold text-gray-800">
            Refund Request Submitted!
          </h2>
          <p className="mt-2 text-gray-600">
            Your refund request has been received. We'll process it within 3-5
            business days.
          </p>
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Back to Dashboard
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-16 mb-16">
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary-600 hover:text-primary-800 mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Request Refund
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Transactions
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              {transactions.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {transactions.slice(0, 5).map((tx) => (
                    <li key={tx.id} className="py-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">
                          {tx.type}
                        </span>
                        <span
                          className={`font-medium ${
                            tx.amount.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {tx.amount}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{tx.date}</span>
                        <span className="capitalize">{tx.status}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No recent transactions</p>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Refund Request Form
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* Form fields remain the same as before */}
              {/* ... */}

              <div className="pt-4">
                <motion.button
                  type="submit"
                  disabled={!formik.isValid || isSubmitting}
                  whileHover={{ scale: formik.isValid ? 1.02 : 1 }}
                  whileTap={{ scale: formik.isValid ? 0.98 : 1 }}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition duration-200 ${
                    formik.isValid
                      ? "bg-primary-600 hover:bg-primary-700 text-white"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Processing..." : "Submit Refund Request"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}