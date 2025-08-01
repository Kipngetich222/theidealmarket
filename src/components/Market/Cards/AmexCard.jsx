import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const amexData = [
  {
    name: "Amex Platinum",
    vendor: "CardMaster",
    includes: "Full Info, CVV",
    balance: "$10,000 - $50,000",
    price: "$400",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Amex Gold",
    vendor: "EliteCards",
    includes: "Fullz Info, BIN",
    balance: "$5,000 - $25,000",
    price: "$300",
    status: "Sold Out",
    action: "Buy Now",
  },
];

const headers = [
  "Card Type",
  "Vendor",
  "Includes",
  "Balance",
  "Price",
  "Status",
  "Action",
];

export default function AmexCard() {
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
        American Express Cards
      </h1>
      <Table headers={headers} data={amexData} onBuyClick={handleBuyClick} />
    </div>
  );
}
