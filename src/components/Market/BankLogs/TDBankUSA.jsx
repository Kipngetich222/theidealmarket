import { useCart } from "../../../context/CartContext";
import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const tdBankData = [
  {
    id: "td-1",
    name: "TD Bank Premium Account",
    vendor: "NorthEastBanker",
    includes: "Full Access, Statements",
    balance: "$8,000 - $35,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "td-2",
    name: "TD Bank Business Account",
    vendor: "TDBiz",
    includes: "Documents, Online Access",
    balance: "$15,000 - $60,000",
    price: "$650",
    status: "Available",
  },
  {
    id: "td-3",
    name: "TD Bank Convenience Account",
    vendor: "EasyBanker",
    includes: "Basic Access",
    balance: "$1,000 - $5,000",
    price: "$200",
    status: "Available",
  },
  {
    id: "td-4",
    name: "TD Bank Government Account",
    vendor: "GovTD",
    includes: "Verified, High Balance",
    balance: "$20,000 - $100,000",
    price: "$1,000",
    status: "Available",
  },
  {
    id: "td-5",
    name: "TD Bank Student Account",
    vendor: "EduTD",
    includes: "Verified Student",
    balance: "$500 - $3,000",
    price: "$150",
    status: "Available",
  },
  {
    id: "td-6",
    name: "TD Bank Aged Account",
    vendor: "OldTD",
    includes: "5+ Years Old",
    balance: "$10,000 - $50,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "td-7",
    name: "TD Bank High Limit",
    vendor: "LimitTD",
    includes: "$100k+ Daily Limit",
    balance: "$25,000 - $150,000",
    price: "$1,200",
    status: "Available",
  },
  {
    id: "td-8",
    name: "TD Bank Fullz Package",
    vendor: "FullzTD",
    includes: "SSN+DL+Selfie",
    balance: "$5,000 - $25,000",
    price: "$400",
    status: "Sold Out",
  },
  {
    id: "td-9",
    name: "TD Bank Elite Account",
    vendor: "EliteTD",
    includes: "Full Access, Phone Number",
    balance: "$7,000 - $35,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "td-10",
    name: "TD Bank Business Elite",
    vendor: "BizEliteTD",
    includes: "Documents, High Limit",
    balance: "$50,000 - $200,000",
    price: "$1,500",
    status: "Available",
  },
  {
    id: "td-11",
    name: "TD Bank Savings Account",
    vendor: "SaveTD",
    includes: "High Yield Savings",
    balance: "$10,000 - $50,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "td-12",
    name: "TD Bank Private Client",
    vendor: "PrivateTD",
    includes: "Full Access, Investments",
    balance: "$75,000 - $300,000",
    price: "$1,800",
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


export default function TDBankUSA() {
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
        TD Bank USA Accounts
      </h1>
      <Table
        headers={headers}
        data={tdBankData.map((item) => ({
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