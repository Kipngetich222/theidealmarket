import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const barclaysData = [
  {
    name: "Barclays Premier Account",
    vendor: "UKBanker",
    includes: "Full Access, Statements",
    balance: "£10,000 - £50,000",
    price: "£500",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Barclays Business Account",
    vendor: "BarclaysBiz",
    includes: "Documents, Online Access",
    balance: "£20,000 - £80,000",
    price: "£700",
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

export default function BarclaysBank() {
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
        Barclays Bank Accounts
      </h1>
      <Table
        headers={headers}
        data={barclaysData}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
}
