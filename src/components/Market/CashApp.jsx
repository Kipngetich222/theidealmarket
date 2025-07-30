import Table from "../UI/Table";
import { useNavigate } from "react-router-dom";

const cashAppData = [
  {
    name: "CashApp Account (Verified)",
    vendor: "CashKing",
    includes: "Email Access, Fullz Info",
    balance: "$1,000 - $3,000",
    price: "$150",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "CashApp Account (Unverified)",
    vendor: "QuickCash",
    includes: "Email Access",
    balance: "$500 - $1,500",
    price: "$80",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "CashApp Bitcoin Wallet",
    vendor: "CryptoDealer",
    includes: "Full Access",
    balance: "0.05 - 0.1 BTC",
    price: "$200",
    status: "Sold Out",
    action: "Buy Now",
  },
  {
    name: "CashApp Business Account",
    vendor: "BizSeller",
    includes: "Full Access, Documents",
    balance: "$2,000 - $5,000",
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

export default function CashApp() {
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
        CashApp Accounts
      </h1>
      <Table headers={headers} data={cashAppData} onBuyClick={handleBuyClick} />
    </div>
  );
}
