import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const bmoData = [
  {
    name: "BMO Premium Account",
    vendor: "CanadaBanker",
    includes: "Full Access, Statements",
    balance: "CAD $10,000 - $50,000",
    price: "$500 CAD",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "BMO Business Account",
    vendor: "BMOBiz",
    includes: "Documents, Online Access",
    balance: "CAD $20,000 - $80,000",
    price: "$700 CAD",
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

export default function BMOLogs() {
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
        Bank of Montreal (BMO) Accounts
      </h1>
      <Table headers={headers} data={bmoData} onBuyClick={handleBuyClick} />
    </div>
  );
}
