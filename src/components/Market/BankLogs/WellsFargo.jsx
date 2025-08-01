import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const wellsFargoData = [
  {
    name: "Wells Fargo Platinum Account",
    vendor: "WestCoastBanker",
    includes: "Full Access, Statements",
    balance: "$10,000 - $50,000",
    price: "$550",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Wells Fargo Business Account",
    vendor: "WellsBiz",
    includes: "Documents, Online Access",
    balance: "$20,000 - $100,000",
    price: "$800",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Wells Fargo Basic Account",
    vendor: "SimpleWells",
    includes: "Online Banking",
    balance: "$2,000 - $10,000",
    price: "$300",
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

export default function WellsFargo() {
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
        Wells Fargo Accounts
      </h1>
      <Table
        headers={headers}
        data={wellsFargoData}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
}
