import { useCart } from "../../../context/CartContext";
import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const visaData = [
  {
    id: "vs-1",
    name: "Visa Platinum",
    vendor: "CardMaster",
    includes: "Full Info, CVV",
    balance: "$5,000 - $15,000",
    price: "$200",
    status: "Available",
  },
  {
    id: "vs-2",
    name: "Visa Signature",
    vendor: "EliteCards",
    includes: "Fullz Info, BIN",
    balance: "$10,000 - $50,000",
    price: "$350",
    status: "Available",
  },
  {
    id: "vs-3",
    name: "Visa Infinite",
    vendor: "InfiniteCards",
    includes: "Full Info, High Limit",
    balance: "$15,000 - $75,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "vs-4",
    name: "Visa Business",
    vendor: "BizCards",
    includes: "Full Info, CVV",
    balance: "$10,000 - $50,000",
    price: "$400",
    status: "Available",
  },
  {
    id: "vs-5",
    name: "Visa Gold",
    vendor: "GoldCards",
    includes: "Full Info, CVV",
    balance: "$3,000 - $15,000",
    price: "$250",
    status: "Available",
  },
  {
    id: "vs-6",
    name: "Visa Standard",
    vendor: "StandardCards",
    includes: "Full Info, CVV",
    balance: "$1,000 - $5,000",
    price: "$150",
    status: "Sold Out",
  },
  {
    id: "vs-7",
    name: "Visa Black",
    vendor: "BlackCards",
    includes: "Full Info, CVV",
    balance: "$20,000 - $100,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "vs-8",
    name: "Visa Titanium",
    vendor: "TitaniumCards",
    includes: "Full Info, CVV",
    balance: "$15,000 - $75,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "vs-9",
    name: "Visa Cash Back",
    vendor: "CashBackCards",
    includes: "Full Info, CVV",
    balance: "$3,000 - $15,000",
    price: "$220",
    status: "Available",
  },
  {
    id: "vs-10",
    name: "Visa Travel",
    vendor: "TravelCards",
    includes: "Full Info, Miles",
    balance: "$5,000 - $25,000",
    price: "$350",
    status: "Available",
  },
  {
    id: "vs-11",
    name: "Visa Business Platinum",
    vendor: "BizPlatinum",
    includes: "Full Info, CVV",
    balance: "$20,000 - $100,000",
    price: "$650",
    status: "Available",
  },
  {
    id: "vs-12",
    name: "Visa Business Gold",
    vendor: "BizGold",
    includes: "Full Info, CVV",
    balance: "$10,000 - $50,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "vs-13",
    name: "Visa Student",
    vendor: "StudentCards",
    includes: "Full Info, CVV",
    balance: "$500 - $2,500",
    price: "$120",
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

export default function VisaCard() {
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
        Visa Cards
      </h1>
      <Table
        headers={headers}
        data={visaData.map((item) => ({
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