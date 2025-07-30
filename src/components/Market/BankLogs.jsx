import Table from "../UI/Table";
import { useNavigate } from "react-router-dom";

const bankLogsData = [
  {
    name: "Chase Bank Log",
    vendor: "EliteVendor",
    includes: "Online Access, Email Access",
    balance: "$5,000 - $15,000",
    price: "$500",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Bank of America Log",
    vendor: "TrustedSeller",
    includes: "Fullz Info, Email Access",
    balance: "$10,000 - $25,000",
    price: "$750",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Wells Fargo Log",
    vendor: "DarkMarketPro",
    includes: "Online Access, Phone Control",
    balance: "$8,000 - $20,000",
    price: "$600",
    status: "Sold Out",
    action: "Buy Now",
  },
  {
    name: "Citibank Log",
    vendor: "PrimeVendor",
    includes: "Fullz Info, Email, Phone",
    balance: "$15,000 - $30,000",
    price: "$900",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "HSBC Bank Log",
    vendor: "GlobalSeller",
    includes: "Online Access, Email",
    balance: "$20,000 - $50,000",
    price: "$1,200",
    status: "Available",
    action: "Buy Now",
  },
];

const headers = [
  "Logs Name",
  "Vendor",
  "Includes",
  "Balance",
  "Price",
  "Status",
  "Action",
];

export default function BankLogs() {
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
        Bank Logs
      </h1>
      <Table
        headers={headers}
        data={bankLogsData}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
}
