import { useCart } from "../../../context/CartContext";
import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const mastercardData = [
  {
    id: "mc-1",
    name: "MasterCard World Elite",
    vendor: "CardMaster",
    includes: "Full Info, CVV",
    balance: "$7,000 - $25,000",
    price: "$250",
    status: "Available",
  },
  {
    id: "mc-2",
    name: "MasterCard Gold",
    vendor: "EliteCards",
    includes: "Fullz Info, BIN",
    balance: "$3,000 - $15,000",
    price: "$180",
    status: "Available",
  },
  {
    id: "mc-3",
    name: "MasterCard Black",
    vendor: "BlackCards",
    includes: "Full Info, High Limit",
    balance: "$20,000 - $100,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "mc-4",
    name: "MasterCard Business",
    vendor: "BizCards",
    includes: "Full Info, CVV",
    balance: "$10,000 - $50,000",
    price: "$400",
    status: "Available",
  },
  {
    id: "mc-5",
    name: "MasterCard Platinum",
    vendor: "PlatinumCards",
    includes: "Full Info, CVV",
    balance: "$5,000 - $25,000",
    price: "$300",
    status: "Available",
  },
  {
    id: "mc-6",
    name: "MasterCard Standard",
    vendor: "StandardCards",
    includes: "Full Info, CVV",
    balance: "$1,000 - $5,000",
    price: "$150",
    status: "Sold Out",
  },
  {
    id: "mc-7",
    name: "MasterCard World",
    vendor: "WorldCards",
    includes: "Full Info, CVV",
    balance: "$5,000 - $20,000",
    price: "$280",
    status: "Available",
  },
  {
    id: "mc-8",
    name: "MasterCard Titanium",
    vendor: "TitaniumCards",
    includes: "Full Info, CVV",
    balance: "$15,000 - $75,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "mc-9",
    name: "MasterCard Cash Back",
    vendor: "CashBackCards",
    includes: "Full Info, CVV",
    balance: "$3,000 - $15,000",
    price: "$220",
    status: "Available",
  },
  {
    id: "mc-10",
    name: "MasterCard Travel",
    vendor: "TravelCards",
    includes: "Full Info, Miles",
    balance: "$5,000 - $25,000",
    price: "$350",
    status: "Available",
  },
  {
    id: "mc-11",
    name: "MasterCard Business Gold",
    vendor: "BizGold",
    includes: "Full Info, CVV",
    balance: "$10,000 - $50,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "mc-12",
    name: "MasterCard Business Platinum",
    vendor: "BizPlatinum",
    includes: "Full Info, CVV",
    balance: "$20,000 - $100,000",
    price: "$650",
    status: "Available",
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
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyClick = (item) => {
    if (item.status === "Sold Out") {
      alert("This item is currently sold out. Please check back later.");
      return;
    }
    addToCart(item);
    navigate("/payment");
  };

  return (
    <div className="bg-white dark:bg-dark-700 rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        MasterCard Cards
      </h1>
      <Table
        headers={headers}
        data={mastercardData.map((item) => ({
          ...item,
          action: (
            <button
              onClick={() => handleBuyClick(item)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          ),
        }))}
      />
    </div>
  );
}