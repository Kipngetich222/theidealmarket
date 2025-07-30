import { motion } from "framer-motion";

export default function StatusBadge({ status }) {
  const isAvailable = status === "Available";

  return (
    <motion.span
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
        isAvailable
          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      }`}
    >
      {isAvailable ? (
        <motion.span
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"
        />
      ) : (
        <motion.span
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block h-2 w-2 rounded-full bg-red-500 mr-2"
        />
      )}
      {status}
    </motion.span>
  );
}
