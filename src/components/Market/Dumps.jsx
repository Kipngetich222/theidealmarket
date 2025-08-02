import { useCart } from "../../context/CartContext";
import Table from "../UI/Table";
import { useNavigate } from "react-router-dom";

const dumpsData = [
  {
    id: "dp-1",
    bin: "484718",
    type: "Visa",
    track: "1 & 2",
    balance: "$2,000 - $5,000",
    country: "USA",
    price: "$200",
    status: "Available",
  },
  {
    id: "dp-2",
    bin: "522963",
    type: "Mastercard",
    track: "1 & 2",
    balance: "$3,000 - $7,000",
    country: "Canada",
    price: "$250",
    status: "Available",
  },
  {
    id: "dp-3",
    bin: "377456",
    type: "Amex",
    track: "1 & 2",
    balance: "$5,000 - $10,000",
    country: "UK",
    price: "$350",
    status: "Sold Out",
  },
  {
    id: "dp-4",
    bin: "601142",
    type: "Discover",
    track: "1 & 2",
    balance: "$1,500 - $4,000",
    country: "USA",
    price: "$180",
    status: "Available",
  },
  {
    id: "dp-5",
    bin: "352823",
    type: "JCB",
    track: "1 & 2",
    balance: "$4,000 - $8,000",
    country: "Japan",
    price: "$300",
    status: "Available",
  },
  {
    id: "dp-6",
    bin: "453276",
    type: "Visa",
    track: "1 & 2",
    balance: "$5,000 - $12,000",
    country: "USA",
    price: "$400",
    status: "Available",
  },
  {
    id: "dp-7",
    bin: "541893",
    type: "Mastercard",
    track: "1 & 2",
    balance: "$7,000 - $15,000",
    country: "UK",
    price: "$500",
    status: "Available",
  },
  {
    id: "dp-8",
    bin: "371245",
    type: "Amex",
    track: "1 & 2",
    balance: "$10,000 - $25,000",
    country: "USA",
    price: "$700",
    status: "Sold Out",
  },
  {
    id: "dp-9",
    bin: "601189",
    type: "Discover",
    track: "1 & 2",
    balance: "$3,000 - $8,000",
    country: "Canada",
    price: "$350",
    status: "Available",
  },
  {
    id: "dp-10",
    bin: "402400",
    type: "Visa",
    track: "1 & 2",
    balance: "$4,000 - $9,000",
    country: "USA",
    price: "$320",
    status: "Available",
  },
  {
    id: "dp-11",
    bin: "526792",
    type: "Mastercard",
    track: "1 & 2",
    balance: "$6,000 - $14,000",
    country: "Germany",
    price: "$450",
    status: "Available",
  },
  {
    id: "dp-12",
    bin: "342156",
    type: "Amex",
    track: "1 & 2",
    balance: "$8,000 - $20,000",
    country: "France",
    price: "$600",
    status: "Available",
  },
  {
    id: "dp-13",
    bin: "601135",
    type: "Discover",
    track: "1 & 2",
    balance: "$2,500 - $6,000",
    country: "USA",
    price: "$280",
    status: "Available",
  },
  {
    id: "dp-14",
    bin: "491683",
    type: "Visa",
    track: "1 & 2",
    balance: "$3,500 - $8,500",
    country: "Canada",
    price: "$380",
    status: "Available",
  },
  {
    id: "dp-15",
    bin: "552432",
    type: "Mastercard",
    track: "1 & 2",
    balance: "$9,000 - $22,000",
    country: "UK",
    price: "$650",
    status: "Sold Out",
  },
];

const headers = [
  "Bin",
  "Type",
  "Track",
  "Balance",
  "Country",
  "Price",
  "Status",
  "Action",
];

export default function Dumps() {
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
        Dumps
      </h1>
      <Table
        headers={headers}
        data={dumpsData.map((item) => ({
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
