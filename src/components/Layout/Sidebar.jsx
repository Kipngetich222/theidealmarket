import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiHome,
  FiShield,
  FiDollarSign,
  FiCreditCard,
  FiPocket,
  FiUser,
  FiSettings,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-700">
        <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
              theIdealmarket
            </span>
            <span className="text-xs ml-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded">
              .shop
            </span>
          </div>

          <nav className="mt-5 flex-1 px-2 space-y-1">
            <NavItem to="/" icon={<FiHome />} text="Dashboard" />
            <NavItem to="/banklogs" icon={<FiShield />} text="Bank Logs" />
            <NavItem to="/cashapp" icon={<FiDollarSign />} text="CashApp" />
            <NavItem to="/paypal" icon={<FiCreditCard />} text="PayPal" />
            <NavItem to="/dumps" icon={<FiPocket />} text="Dumps" />
            <NavItem to="/paxful" icon={<FiDollarSign />} text="Paxful" />
            <NavItem to="/account" icon={<FiUser />} text="Account" />

            {user?.isAdmin && (
              <>
                <div className="border-t border-gray-200 dark:border-dark-600 my-4"></div>
                <p className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Admin
                </p>
                <NavItem
                  to="/admin"
                  icon={<FiSettings />}
                  text="Admin Dashboard"
                />
                <NavItem
                  to="/admin/users"
                  icon={<FiUsers />}
                  text="User Management"
                />
                <NavItem
                  to="/admin/stats"
                  icon={<FiBarChart2 />}
                  text="Statistics"
                />
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, icon, text }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
          isActive
            ? "bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-300"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-dark-600 dark:hover:text-white"
        }`
      }
    >
      <span className="mr-3 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
        {icon}
      </span>
      {text}
    </NavLink>
  );
}
