import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const citiData = [
  {
    name: "CitiGold Account",
    vendor: "PremiumBanker",
    includes: "Full Access, Investment",
    balance: "$10,000 - $50,000",
    price: "$600",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Citi Basic Account",
    vendor: "SimpleAccess",
    includes: "Online Banking",
    balance: "$1,500 - $7,000",
    price: "$250",
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

export default function CitiBank() {
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
        Citibank Accounts
      </h1>
      <Table headers={headers} data={citiData} onBuyClick={handleBuyClick} />
    </div>
  );
}
