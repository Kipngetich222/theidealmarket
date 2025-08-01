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