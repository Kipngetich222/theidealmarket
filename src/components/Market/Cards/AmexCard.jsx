import { useCart } from "../../../context/CartContext";
import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const amexData = [
  {
    id: "am-1",
    name: "Amex Platinum",
    vendor: "CardMaster",
    includes: "Full Info, CVV",
    balance: "$10,000 - $50,000",
    price: "$400",
    status: "Available",
  },
  {
    id: "am-2",
    name: "Amex Gold",
    vendor: "EliteCards",
    includes: "Fullz Info, BIN",
    balance: "$5,000 - $25,000",
    price: "$300",
    status: "Sold Out",
  },
  {
    id: "am-3",
    name: "Amex Centurion",
    vendor: "BlackCard",
    includes: "Full Info, High Limit",
    balance: "$50,000 - $250,000",
    price: "$1,500",
    status: "Available",
  },
  {
    id: "am-4",
    name: "Amex Business Platinum",
    vendor: "BizCards",
    includes: "Full Info, CVV",
    balance: "$20,000 - $100,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "am-5",
    name: "Amex Delta SkyMiles",
    vendor: "TravelCards",
    includes: "Full Info, Miles",
    balance: "$5,000 - $25,000",
    price: "$350",
    status: "Available",
  },
  {
    id: "am-6",
    name: "Amex Blue Cash",
    vendor: "CashBackCards",
    includes: "Full Info, CVV",
    balance: "$3,000 - $15,000",
    price: "$250",
    status: "Available",
  },
  {
    id: "am-7",
    name: "Amex Green",
    vendor: "EcoCards",
    includes: "Full Info, CVV",
    balance: "$2,000 - $10,000",
    price: "$200",
    status: "Sold Out",
  },
  {
    id: "am-8",
    name: "Amex Business Gold",
    vendor: "BizGold",
    includes: "Full Info, CVV",
    balance: "$10,000 - $50,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "am-9",
    name: "Amex Hilton Honors",
    vendor: "HotelCards",
    includes: "Full Info, Points",
    balance: "$5,000 - $25,000",
    price: "$350",
    status: "Available",
  },
  {
    id: "am-10",
    name: "Amex Marriott Bonvoy",
    vendor: "HotelCards",
    includes: "Full Info, Points",
    balance: "$5,000 - $25,000",
    price: "$350",
    status: "Available",
  },
  {
    id: "am-11",
    name: "Amex Cash Magnet",
    vendor: "CashBackCards",
    includes: "Full Info, CVV",
    balance: "$3,000 - $15,000",
    price: "$250",
    status: "Available",
  },
  {
    id: "am-12",
    name: "Amex Everyday",
    vendor: "DailyCards",
    includes: "Full Info, CVV",
    balance: "$2,000 - $10,000",
    price: "$200",
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

export default function AmexCard() {
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
        American Express Cards
      </h1>
      <Table
        headers={headers}
        data={amexData.map((item) => ({
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