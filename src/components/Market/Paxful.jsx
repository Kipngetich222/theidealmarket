import Table from "../UI/Table";
import { useNavigate } from "react-router-dom";

const paxfulData = [
  {
    name: "Paxful Account (Verified)",
    vendor: "PaxKing",
    includes: "Email Access, Fullz Info",
    balance: "$500 - $2,000",
    price: "$120",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Paxful BTC Wallet",
    vendor: "CryptoMaster",
    includes: "Full Access",
    balance: "0.02 - 0.05 BTC",
    price: "$150",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Paxful Account (Unverified)",
    vendor: "QuickPax",
    includes: "Email Access",
    balance: "$200 - $800",
    price: "$60",
    status: "Sold Out",
    action: "Buy Now",
  },
  {
    name: "Paxful Business Account",
    vendor: "BizPax",
    includes: "Full Access, Documents",
    balance: "$1,000 - $3,000",
    price: "$200",
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

export default function Paxful() {
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
        Paxful Accounts
      </h1>
      <Table headers={headers} data={paxfulData} onBuyClick={handleBuyClick} />
    </div>
  );
}
