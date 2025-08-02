import { useCart } from "../../context/CartContext";
import Table from "../UI/Table";
import { useNavigate } from "react-router-dom";

const paxfulData = [
  {
    id: "px-1",
    name: "Paxful Account (Verified)",
    vendor: "PaxKing",
    includes: "Email Access, Fullz Info",
    balance: "$500 - $2,000",
    price: "$120",
    status: "Available",
  },
  {
    id: "px-2",
    name: "Paxful BTC Wallet",
    vendor: "CryptoMaster",
    includes: "Full Access",
    balance: "0.02 - 0.05 BTC",
    price: "$150",
    status: "Available",
  },
  {
    id: "px-3",
    name: "Paxful Account (Unverified)",
    vendor: "QuickPax",
    includes: "Email Access",
    balance: "$200 - $800",
    price: "$60",
    status: "Sold Out",
  },
  {
    id: "px-4",
    name: "Paxful Business Account",
    vendor: "BizPax",
    includes: "Full Access, Documents",
    balance: "$1,000 - $3,000",
    price: "$200",
    status: "Available",
  },
  {
    id: "px-5",
    name: "Paxful Aged Account",
    vendor: "OldPax",
    includes: "2+ Years Old",
    balance: "$1,500 - $4,000",
    price: "$250",
    status: "Available",
  },
  {
    id: "px-6",
    name: "Paxful High Limit",
    vendor: "LimitPax",
    includes: "$50k+ Weekly Limit",
    balance: "$3,000 - $7,000",
    price: "$350",
    status: "Available",
  },
  {
    id: "px-7",
    name: "Paxful Fullz Package",
    vendor: "FullzPax",
    includes: "SSN+DL+Selfie",
    balance: "$2,000 - $5,000",
    price: "$300",
    status: "Sold Out",
  },
  {
    id: "px-8",
    name: "Paxful Government Account",
    vendor: "GovPax",
    includes: "Verified, High Balance",
    balance: "$5,000 - $15,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "px-9",
    name: "Paxful BTC Wallet (Large)",
    vendor: "BitPax",
    includes: "Full Access",
    balance: "0.1 - 0.3 BTC",
    price: "$600",
    status: "Available",
  },
  {
    id: "px-10",
    name: "Paxful Premium Account",
    vendor: "PaxPro",
    includes: "Full Access, Phone Number",
    balance: "$2,500 - $6,000",
    price: "$400",
    status: "Available",
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

export default function Paxful() {
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
        Paxful Accounts
      </h1>
      <Table
        headers={headers}
        data={paxfulData.map((item) => ({
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