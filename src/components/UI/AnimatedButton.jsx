import { motion } from "framer-motion";

export default function AnimatedButton({
  children,
  onClick,
  disabled = false,
}) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-primary-600 hover:bg-primary-700"
      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
    >
      {children}
    </motion.button>
  );
}
