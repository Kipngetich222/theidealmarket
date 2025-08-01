import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const chaseData = [
  {
    name: "Chase Sapphire Account",
    vendor: "EliteBanker",
    includes: "Full Access, CC Details",
    balance: "$8,000 - $20,000",
    price: "$450",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Chase Business Account",
    vendor: "CorporateSeller",
    includes: "Documents, Online Access",
    balance: "$15,000 - $75,000",
    price: "$700",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Chase Personal Account",
    vendor: "QuickAccess",
    includes: "Online Banking",
    balance: "$2,000 - $10,000",
    price: "$250",
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

export default function ChaseBank() {
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
        Chase Bank Accounts
      </h1>
      <Table headers={headers} data={chaseData} onBuyClick={handleBuyClick} />
    </div>
  );
}
