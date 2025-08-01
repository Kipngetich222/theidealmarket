import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const mastercardData = [
  {
    name: "MasterCard World Elite",
    vendor: "CardMaster",
    includes: "Full Info, CVV",
    balance: "$7,000 - $25,000",
    price: "$250",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "MasterCard Gold",
    vendor: "EliteCards",
    includes: "Fullz Info, BIN",
    balance: "$3,000 - $15,000",
    price: "$180",
    status: "Available",
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

export default function MasterCard() {
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
        MasterCard Cards
      </h1>
      <Table
        headers={headers}
        data={mastercardData}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
}
