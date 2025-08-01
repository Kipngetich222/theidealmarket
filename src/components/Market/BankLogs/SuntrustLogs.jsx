import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const suntrustData = [
  {
    name: "SunTrust Premium Account",
    vendor: "SouthernBanker",
    includes: "Full Access, Statements",
    balance: "$7,000 - $30,000",
    price: "$400",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "SunTrust Basic Account",
    vendor: "SimpleSun",
    includes: "Online Banking",
    balance: "$1,000 - $5,000",
    price: "$200",
    status: "Sold Out",
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

export default function SuntrustLogs() {
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
        SunTrust Bank Accounts
      </h1>
      <Table
        headers={headers}
        data={suntrustData}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
}
