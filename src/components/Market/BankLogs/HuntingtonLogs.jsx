import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const huntingtonData = [
  {
    name: "Huntington Premier Account",
    vendor: "MidwestBanker",
    includes: "Full Access, Statements",
    balance: "$5,000 - $25,000",
    price: "$350",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Huntington Business Account",
    vendor: "BizHunt",
    includes: "Documents, Online Access",
    balance: "$10,000 - $40,000",
    price: "$500",
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

export default function HuntingtonLogs() {
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
        Huntington Bank Accounts
      </h1>
      <Table
        headers={headers}
        data={huntingtonData}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
}
