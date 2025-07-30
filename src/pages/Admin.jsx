import { useState } from "react";
import {
  FiUsers,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
  FiActivity,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="bg-white dark:bg-dark-700 rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Admin Dashboard
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Navigation
            </h2>
            <nav className="space-y-2">
              <AdminNavItem
                icon={<FiActivity />}
                text="Dashboard"
                active={activeTab === "dashboard"}
                onClick={() => setActiveTab("dashboard")}
              />
              <AdminNavItem
                icon={<FiUsers />}
                text="User Management"
                active={activeTab === "users"}
                onClick={() => setActiveTab("users")}
              />
              <AdminNavItem
                icon={<FiDollarSign />}
                text="Transactions"
                active={activeTab === "transactions"}
                onClick={() => setActiveTab("transactions")}
              />
              <AdminNavItem
                icon={<FiBarChart2 />}
                text="Statistics"
                active={activeTab === "stats"}
                onClick={() => setActiveTab("stats")}
              />
              <AdminNavItem
                icon={<FiSettings />}
                text="Settings"
                active={activeTab === "settings"}
                onClick={() => setActiveTab("settings")}
              />
            </nav>
          </div>
        </div>

        <div className="md:w-3/4">
          {activeTab === "dashboard" && <AdminDashboardTab />}
          {activeTab === "users" && <AdminUsersTab />}
          {activeTab === "transactions" && <AdminTransactionsTab />}
          {activeTab === "stats" && <AdminStatsTab />}
          {activeTab === "settings" && <AdminSettingsTab />}
        </div>
      </div>
    </div>
  );
}

function AdminNavItem({ icon, text, active, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
        active
          ? "bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-300"
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-500"
      }`}
    >
      <span className="mr-3">{icon}</span>
      {text}
    </motion.button>
  );
}

function AdminDashboardTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Users"
          value="1,248"
          change="+12.5%"
          icon={<FiUsers className="h-6 w-6" />}
          color="primary"
        />
        <StatCard
          title="Transactions"
          value="$48,752"
          change="+8.3%"
          icon={<FiDollarSign className="h-6 w-6" />}
          color="green"
        />
        <StatCard
          title="Active Listings"
          value="87"
          change="-2.2%"
          icon={<FiActivity className="h-6 w-6" />}
          color="blue"
        />
      </div>

      <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <ActivityItem
            user="john_doe"
            action="purchased Bank of America Log"
            amount="$750"
            time="2 minutes ago"
          />
          <ActivityItem
            user="crypto_trader"
            action="deposited funds"
            amount="$1,200"
            time="15 minutes ago"
          />
          <ActivityItem
            user="new_user"
            action="created account"
            time="30 minutes ago"
          />
        </div>
      </div>
    </div>
  );
}

function AdminUsersTab() {
  return (
    <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        User Management
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-500">
          <thead className="bg-gray-100 dark:bg-dark-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Balance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-dark-600 divide-y divide-gray-200 dark:divide-dark-500">
            <UserRow
              username="john_doe"
              email="john@example.com"
              balance="$1,250"
              status="active"
            />
            <UserRow
              username="crypto_trader"
              email="trader@example.com"
              balance="$5,700"
              status="active"
            />
            <UserRow
              username="new_user"
              email="new@example.com"
              balance="$0"
              status="pending"
            />
            <UserRow
              username="banned_user"
              email="banned@example.com"
              balance="$0"
              status="banned"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminTransactionsTab() {
  return (
    <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Transaction History
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-500">
          <thead className="bg-gray-100 dark:bg-dark-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-dark-600 divide-y divide-gray-200 dark:divide-dark-500">
            <TransactionRow
              id="TX-78945"
              user="john_doe"
              type="Purchase"
              amount="-$750"
              date="2025-06-15"
              status="completed"
            />
            <TransactionRow
              id="TX-78944"
              user="crypto_trader"
              type="Deposit"
              amount="+$1,200"
              date="2025-06-15"
              status="completed"
            />
            <TransactionRow
              id="TX-78943"
              user="new_user"
              type="Deposit"
              amount="+$500"
              date="2025-06-14"
              status="pending"
            />
            <TransactionRow
              id="TX-78942"
              user="john_doe"
              type="Purchase"
              amount="-$200"
              date="2025-06-14"
              status="completed"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminStatsTab() {
  return (
    <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Market Statistics
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-dark-700 p-4 rounded-lg shadow">
          <h4 className="font-medium text-gray-800 dark:text-white mb-3">
            Most Popular Items
          </h4>
          <ul className="space-y-3">
            <StatItem name="Bank of America Log" value="142 purchases" />
            <StatItem name="CashApp Verified" value="98 purchases" />
            <StatItem name="PayPal Business" value="76 purchases" />
            <StatItem name="Dumps Track 1&2" value="65 purchases" />
          </ul>
        </div>
        <div className="bg-white dark:bg-dark-700 p-4 rounded-lg shadow">
          <h4 className="font-medium text-gray-800 dark:text-white mb-3">
            Revenue by Category
          </h4>
          <ul className="space-y-3">
            <StatItem name="Bank Logs" value="$28,450" />
            <StatItem name="CashApp" value="$12,300" />
            <StatItem name="PayPal" value="$9,800" />
            <StatItem name="Dumps" value="$7,200" />
          </ul>
        </div>
      </div>
    </div>
  );
}

function AdminSettingsTab() {
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    newRegistrations: true,
    depositEnabled: true,
    withdrawalEnabled: true,
  });

  const toggleSetting = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  return (
    <div className="bg-gray-50 dark:bg-dark-600 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        System Settings
      </h3>
      <div className="space-y-4">
        <SettingToggle
          name="Maintenance Mode"
          description="Enable to take the site offline for maintenance"
          enabled={settings.maintenanceMode}
          onChange={() => toggleSetting("maintenanceMode")}
        />
        <SettingToggle
          name="New Registrations"
          description="Allow new users to create accounts"
          enabled={settings.newRegistrations}
          onChange={() => toggleSetting("newRegistrations")}
        />
        <SettingToggle
          name="Deposit Funds"
          description="Allow users to deposit funds"
          enabled={settings.depositEnabled}
          onChange={() => toggleSetting("depositEnabled")}
        />
        <SettingToggle
          name="Withdraw Funds"
          description="Allow users to withdraw funds"
          enabled={settings.withdrawalEnabled}
          onChange={() => toggleSetting("withdrawalEnabled")}
        />
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon, color }) {
  const colors = {
    primary: {
      bg: "bg-primary-100 dark:bg-primary-900/50",
      text: "text-primary-600 dark:text-primary-300",
    },
    green: {
      bg: "bg-green-100 dark:bg-green-900/50",
      text: "text-green-600 dark:text-green-300",
    },
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/50",
      text: "text-blue-600 dark:text-blue-300",
    },
  };

  return (
    <div className={`${colors[color].bg} p-4 rounded-lg`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-full ${colors[color].bg}`}>{icon}</div>
      </div>
      <p className={`text-sm mt-2 ${colors[color].text}`}>
        {change} from last week
      </p>
    </div>
  );
}

function ActivityItem({ user, action, amount, time }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-300">
        <FiActivity className="h-5 w-5" />
      </div>
      <div className="ml-4">
        <div className="flex items-center">
          <p className="font-medium text-gray-800 dark:text-white">{user}</p>
          {amount && (
            <span
              className={`ml-2 text-sm font-medium ${
                amount.startsWith("+")
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {amount}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{action}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
}

function UserRow({ username, email, balance, status }) {
  const statusColors = {
    active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    pending:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    banned: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        {username}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {balance}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[status]}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300 mr-3">
          Edit
        </button>
        <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
          Ban
        </button>
      </td>
    </tr>
  );
}

function TransactionRow({ id, user, type, amount, date, status }) {
  const statusColors = {
    completed:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    pending:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    failed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {user}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {type}
      </td>
      <td
        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
          amount.startsWith("+")
            ? "text-green-600 dark:text-green-400"
            : "text-red-600 dark:text-red-400"
        }`}
      >
        {amount}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[status]}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </td>
    </tr>
  );
}

function StatItem({ name, value }) {
  return (
    <li className="flex justify-between items-center">
      <span className="text-gray-700 dark:text-gray-300">{name}</span>
      <span className="font-medium text-gray-900 dark:text-white">{value}</span>
    </li>
  );
}

function SettingToggle({ name, description, enabled, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-gray-800 dark:text-white">{name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
          enabled ? "bg-primary-600" : "bg-gray-200 dark:bg-dark-500"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
