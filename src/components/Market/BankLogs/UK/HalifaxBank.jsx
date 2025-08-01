import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const halifaxData = [
  {
    name: "Halifax Reward Account",
    vendor: "UKBanker",
    includes: "Full Access, Statements",
    balance: "£8,000 - £40,000",
    price: "£450",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Halifax Business Account",
    vendor: "HalifaxBiz",
    includes: "Documents, Online Access",
    balance: "£15,000 - £60,000",
    price: "£600",
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

export default function HalifaxBank() {
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
        Halifax Bank Accounts
      </h1>
      <Table headers={headers} data={halifaxData} onBuyClick={handleBuyClick} />
    </div>
  );
}
