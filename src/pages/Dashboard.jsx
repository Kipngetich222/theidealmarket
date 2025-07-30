import BalanceCard from "../components/Dashboard/BalanceCard";
import Guidelines from "../components/Dashboard/Guidelines";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-dark-700 rounded-lg shadow p-6"
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Hello, {user?.username || "User"} 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Welcome back to your theIdealmarket dashboard
        </p>
      </motion.div>

      <BalanceCard />

      <Guidelines />
    </div>
  );
}
