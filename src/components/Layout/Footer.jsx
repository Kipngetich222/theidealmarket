import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="text-sm text-gray-500">
              © 2025 theIdealmarket.shop. All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6 items-center">
            <a
              href="/terms#terms"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms
            </a>
            <a
              href="/terms#privacy"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy
            </a>
            <motion.a
              href="https://t.me/idealmarket_support"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-[#0088CC] text-white px-3 py-1 rounded text-sm font-medium"
            >
              <FaTelegram className="mr-1" />
              Contact on Telegram
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}