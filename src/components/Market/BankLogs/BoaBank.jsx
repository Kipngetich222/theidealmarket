import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const boaData = [
  {
    name: "BOA Account (Premium)",
    vendor: "BankKing",
    includes: "Online Access, Fullz Info",
    balance: "$5,000 - $15,000",
    price: "$300",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "BOA Account (Business)",
    vendor: "BizAccess",
    includes: "Full Access, Documents",
    balance: "$10,000 - $50,000",
    price: "$500",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "BOA Account (Basic)",
    vendor: "QuickBank",
    includes: "Online Access",
    balance: "$1,000 - $5,000",
    price: "$200",
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

export default function BoaBank() {
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
        Bank of America Accounts
      </h1>
      <Table headers={headers} data={boaData} onBuyClick={handleBuyClick} />
    </div>
  );
}
