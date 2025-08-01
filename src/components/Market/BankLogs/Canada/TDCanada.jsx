import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const tdCanadaData = [
  {
    name: "TD Canada All-Inclusive",
    vendor: "CanadaBanker",
    includes: "Full Access, Investment",
    balance: "CAD $12,000 - $60,000",
    price: "$600 CAD",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "TD Canada Business",
    vendor: "TDBizCanada",
    includes: "Documents, Online Access",
    balance: "CAD $20,000 - $90,000",
    price: "$800 CAD",
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

export default function TDCanada() {
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
        TD Canada Trust Accounts
      </h1>
      <Table
        headers={headers}
        data={tdCanadaData}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
}
