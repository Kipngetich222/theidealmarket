// pages/Terms.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Terms and Conditions
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <section id="terms" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Terms of Service</h2>
          <p className="mb-4">
            Welcome to theIdealmarket.shop. By accessing or using our website,
            you agree to be bound by these Terms of Service.
          </p>

          <h3 className="font-medium mb-2">1. Account Registration</h3>
          <p className="mb-4">
            You must provide accurate and complete information when creating an
            account. You are responsible for maintaining the confidentiality of
            your account credentials.
          </p>

          <h3 className="font-medium mb-2">2. Prohibited Activities</h3>
          <p className="mb-4">
            You agree not to engage in any illegal activities or violate any
            laws while using our services. This includes but is not limited to
            fraud, money laundering, or any other financial crimes.
          </p>

          <h3 className="font-medium mb-2">3. Refund Policy</h3>
          <p className="mb-4">
            Refunds are processed within 3-5 business days. Only unused funds
            can be refunded. Purchases are final and non-refundable unless
            otherwise stated.
          </p>
        </section>

        <section id="privacy" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            We are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your information.
          </p>

          <h3 className="font-medium mb-2">1. Information Collection</h3>
          <p className="mb-4">
            We collect personal information you provide when creating an
            account, making transactions, or contacting support. This may
            include your email address and transaction details.
          </p>

          <h3 className="font-medium mb-2">2. Use of Information</h3>
          <p className="mb-4">
            Your information is used to provide and improve our services,
            process transactions, and communicate with you. We do not sell your
            personal information to third parties.
          </p>

          <h3 className="font-medium mb-2">3. Data Security</h3>
          <p className="mb-4">
            We implement security measures to protect your information. However,
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <div className="mt-8">
          <Link
            to="/"
            className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
