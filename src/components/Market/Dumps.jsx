import Table from "../UI/Table";
import { useNavigate } from "react-router-dom";

const dumpsData = [
  {
    bin: "484718",
    type: "Visa",
    track: "1 & 2",
    balance: "$2,000 - $5,000",
    country: "USA",
    price: "$200",
    status: "Available",
    action: "Buy Now",
  },
  {
    bin: "522963",
    type: "Mastercard",
    track: "1 & 2",
    balance: "$3,000 - $7,000",
    country: "Canada",
    price: "$250",
    status: "Available",
    action: "Buy Now",
  },
  {
    bin: "377456",
    type: "Amex",
    track: "1 & 2",
    balance: "$5,000 - $10,000",
    country: "UK",
    price: "$350",
    status: "Sold Out",
    action: "Buy Now",
  },
  {
    bin: "601142",
    type: "Discover",
    track: "1 & 2",
    balance: "$1,500 - $4,000",
    country: "USA",
    price: "$180",
    status: "Available",
    action: "Buy Now",
  },
  {
    bin: "352823",
    type: "JCB",
    track: "1 & 2",
    balance: "$4,000 - $8,000",
    country: "Japan",
    price: "$300",
    status: "Available",
    action: "Buy Now",
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
        Dumps
      </h1>
      <Table headers={headers} data={dumpsData} onBuyClick={handleBuyClick} />
    </div>
  );
}
