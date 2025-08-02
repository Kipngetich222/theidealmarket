import { useCart } from "../../context/CartContext";
import Table from "../UI/Table";
import { useNavigate } from "react-router-dom";

const cashAppData = [
  {
    id: "ca-1",
    name: "CashApp Account (Verified)",
    vendor: "CashKing",
    includes:
      "Cash app BTC enable, fully verified, email access, Max transaction limit per day is high",
    balance: "$1,000 - $3,000",
    price: "$150",
    status: "Available",
  },
  {
    id: "ca-2",
    name: "CashApp Account (Unverified)",
    vendor: "QuickCash",
    includes:
      "Cash app BTC enable, fully verified, email access, Max transaction limit per day is high",
    balance: "$500 - $1,500",
    price: "$80",
    status: "Available",
  },
  {
    id: "ca-3",
    name: "CashApp Bitcoin Wallet",
    vendor: "CryptoDealer",
    includes:
      "Cash app BTC enable, fully verified, email access, Max transaction limit per day is high",
    balance: "0.05 - 0.1 BTC",
    price: "$200",
    status: "Sold Out",
  },
  {
    id: "ca-4",
    name: "CashApp Business Account",
    vendor: "BizSeller",
    includes:
      "Cash app BTC enable, fully verified, email access, Max transaction limit per day is high",
    balance: "$2,000 - $5,000",
    price: "$250",
    status: "Available",
  },
  {
    id: "ca-5",
    name: "CashApp Premium Account",
    vendor: "CashPro",
    includes:
      "Cash app BTC enable, fully verified, email access, Max transaction limit per day is high",
    balance: "$3,000 - $7,000",
    price: "$300",
    status: "Available",
  },
  {
    id: "ca-6",
    name: "CashApp BTC Wallet (Large)",
    vendor: "BitcoinKing",
    includes:
      "Cash app BTC enable, fully verified, email access, Max transaction limit per day is high",
    balance: "0.2 - 0.5 BTC",
    price: "$800",
    status: "Available",
  },
  {
    id: "ca-7",
    name: "CashApp Aged Account",
    vendor: "OldMoney",
    includes:
      "Cash app BTC enable, fully verified, email access, Max transaction limit per day is high",
    balance: "$5,000 - $10,000",
    price: "$400",
    status: "Available",
  },
  {
    id: "ca-8",
    name: "CashApp High Limit",
    vendor: "Limitless",
    includes:
      "Cash app BTC enable, fully verified, email access, Max transaction limit per day is high",
    balance: "$10,000 - $20,000",
    price: "$500",
    status: "Sold Out",
  },
  {
    id: "ca-9",
    name: "CashApp Fullz Package",
    vendor: "FullzMaster",
    includes:
      "Cash app BTC enable, fully verified, email access, Max transaction limit per day is high",
    balance: "$2,500 - $7,500",
    price: "$350",
    status: "Available",
  },
  {
    id: "ca-10",
    name: "CashApp Government Account",
    vendor: "GovSeller",
    includes:
      "Cash app BTC enable, fully verified, email access, Max transaction limit per day is high",
    balance: "$15,000 - $30,000",
    price: "$700",
    status: "Available",
  },
];

const headers = [
  { label: "Logs Name", key: "name" },
  { label: "Vendor", key: "vendor" },
  { label: "Includes", key: "includes" },
  { label: "Balance", key: "balance" },
  { label: "Price", key: "price" },
  { label: "Status", key: "status" },
  { label: "Action", key: "action" },
];


export default function CashApp() {
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
        CashApp Accounts
      </h1>
      <Table
        headers={headers}
        data={cashAppData.map((item) => ({
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