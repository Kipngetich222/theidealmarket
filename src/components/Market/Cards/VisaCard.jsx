import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const visaData = [
  {
    name: "Visa Platinum",
    vendor: "CardMaster",
    includes: "Full Info, CVV",
    balance: "$5,000 - $15,000",
    price: "$200",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "Visa Signature",
    vendor: "EliteCards",
    includes: "Fullz Info, BIN",
    balance: "$10,000 - $50,000",
    price: "$350",
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

export default function VisaCard() {
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
        Visa Cards
      </h1>
      <Table headers={headers} data={visaData} onBuyClick={handleBuyClick} />
    </div>
  );
}
