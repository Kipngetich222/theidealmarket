import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const rbcData = [
  {
    name: "RBC Signature Account",
    vendor: "RoyalBanker",
    includes: "Full Access, Investment",
    balance: "CAD $15,000 - $75,000",
    price: "$650 CAD",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "RBC Business Account",
    vendor: "RBCBiz",
    includes: "Documents, Online Access",
    balance: "CAD $25,000 - $100,000",
    price: "$850 CAD",
    status: "Available",
    action: "Buy Now",
  },
];

const headers = [
  "Account Type",
  "Vendor",
  "Includes",
  "Balance",
  "Price",
  "Status",
  "Action",
];

export default function RBCLogs() {
  const navigate = useNavigate();

  const handleBuyClick = (item) => {
    if (item.status === "Sold Out") {
      alert("This item is currently sold out. Please check back later.");
      return;
    }
    navigate("/payment", { state: { item } });
  };

  return (
    <div className="bg-white dark:bg-dark-700 rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Royal Bank of Canada (RBC) Accounts
      </h1>
      <Table headers={headers} data={rbcData} onBuyClick={handleBuyClick} />
    </div>
  );
}
