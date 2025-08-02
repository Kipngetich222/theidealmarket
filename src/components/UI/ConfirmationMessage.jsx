// components/Account/ConfirmationMessage.jsx

import { motion } from "framer-motion";
import { FiCheckCircle, FiDollarSign, FiShoppingBag } from "react-icons/fi";
import { format } from "date-fns";

export default function ConfirmationMessage({ confirmation, onMarkAsRead }) {
  const isPurchase = confirmation.type === "Purchase";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg mb-4 ${
        confirmation.read ? "bg-gray-50" : "bg-blue-50"
      }`}
    >
      <div className="flex items-start">
        <div
          className={`p-2 rounded-full ${
            isPurchase
              ? "bg-green-100 text-green-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {isPurchase ? (
            <FiShoppingBag size={18} />
          ) : (
            <FiDollarSign size={18} />
          )}
        </div>
        <div className="ml-3 flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-800">
              {isPurchase ? "Purchase Confirmation" : "Funds Added"}
            </h3>
            {!confirmation.read && (
              <button
                onClick={() => onMarkAsRead(confirmation.id)}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Mark as read
              </button>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {isPurchase
              ? "Your purchase was successful"
              : "Your account has been credited"}
          </p>
          <p className="text-sm font-medium mt-1">
            Amount: ${confirmation.amount.toFixed(2)}
          </p>
          {isPurchase && confirmation.items && (
            <div className="mt-2 border-t pt-2">
              <p className="text-xs font-medium text-gray-500">Items:</p>
              <ul className="text-xs text-gray-600">
                {confirmation.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>
                      $
                      {(
                        parseFloat(item.price.replace(/[^0-9.-]+/g, "")) *
                        item.quantity
                      ).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-2">
            {format(new Date(confirmation.date), "MMM d, yyyy - h:mm a")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
