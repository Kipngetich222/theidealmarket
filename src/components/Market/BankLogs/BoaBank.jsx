import { useCart } from "../../../context/CartContext";
import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const boaData = [
  {
    id: "boa-1",
    name: "BOA Account (Premium)",
    vendor: "BankKing",
    includes: "Online Access, Fullz Info",
    balance: "$5,000 - $15,000",
    price: "$300",
    status: "Available",
  },
  {
    id: "boa-2",
    name: "BOA Account (Business)",
    vendor: "BizAccess",
    includes: "Full Access, Documents",
    balance: "$10,000 - $50,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "boa-3",
    name: "BOA Account (Basic)",
    vendor: "QuickBank",
    includes: "Online Access",
    balance: "$1,000 - $5,000",
    price: "$200",
    status: "Sold Out",
  },
  {
    id: "boa-4",
    name: "BOA Platinum Account",
    vendor: "PlatinumBank",
    includes: "Full Access, Statements",
    balance: "$15,000 - $75,000",
    price: "$700",
    status: "Available",
  },
  {
    id: "boa-5",
    name: "BOA Government Account",
    vendor: "GovBank",
    includes: "Verified, High Balance",
    balance: "$20,000 - $100,000",
    price: "$900",
    status: "Available",
  },
  {
    id: "boa-6",
    name: "BOA Student Account",
    vendor: "EduBank",
    includes: "Verified Student",
    balance: "$500 - $3,000",
    price: "$150",
    status: "Available",
  },
  {
    id: "boa-7",
    name: "BOA Aged Account",
    vendor: "OldBank",
    includes: "5+ Years Old",
    balance: "$10,000 - $50,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "boa-8",
    name: "BOA High Limit",
    vendor: "LimitBank",
    includes: "$100k+ Daily Limit",
    balance: "$25,000 - $150,000",
    price: "$1,200",
    status: "Available",
  },
  {
    id: "boa-9",
    name: "BOA Fullz Package",
    vendor: "FullzBank",
    includes: "SSN+DL+Selfie",
    balance: "$5,000 - $25,000",
    price: "$400",
    status: "Sold Out",
  },
  {
    id: "boa-10",
    name: "BOA Elite Account",
    vendor: "EliteBank",
    includes: "Full Access, Phone Number",
    balance: "$7,000 - $35,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "boa-11",
    name: "BOA Business Elite",
    vendor: "BizElite",
    includes: "Documents, High Limit",
    balance: "$50,000 - $200,000",
    price: "$1,500",
    status: "Available",
  },
  {
    id: "boa-12",
    name: "BOA Crypto Enabled",
    vendor: "CryptoBank",
    includes: "BTC/ETH Access",
    balance: "$10,000 - $50,000",
    price: "$600",
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


export default function BoaBank() {
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
        Bank of America Accounts
      </h1>
      <Table
        headers={headers}
        data={boaData.map((item) => ({
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