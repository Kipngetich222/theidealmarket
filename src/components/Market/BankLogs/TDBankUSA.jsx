import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const tdBankData = [
  {
    name: "TD Bank Premium Account",
    vendor: "NorthEastBanker",
    includes: "Full Access, Statements",
    balance: "$8,000 - $35,000",
    price: "$450",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "TD Bank Business Account",
    vendor: "TDBiz",
    includes: "Documents, Online Access",
    balance: "$15,000 - $60,000",
    price: "$650",
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

export default function TDBankUSA() {
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
        TD Bank USA Accounts
      </h1>
      <Table headers={headers} data={tdBankData} onBuyClick={handleBuyClick} />
    </div>
  );
}
