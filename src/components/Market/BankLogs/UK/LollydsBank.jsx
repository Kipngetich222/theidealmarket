import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const lloydsData = [
  {
    name: "Lloyds Club Account",
    vendor: "UKBanker",
    includes: "Full Access, Statements",
    balance: "£12,000 - £60,000",
    price: "£600",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Lloyds Business Account",
    vendor: "LloydsBiz",
    includes: "Documents, Online Access",
    balance: "£20,000 - £90,000",
    price: "£800",
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

export default function LollydsBank() {
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
        Lloyds Bank Accounts
      </h1>
      <Table headers={headers} data={lloydsData} onBuyClick={handleBuyClick} />
    </div>
  );
}
