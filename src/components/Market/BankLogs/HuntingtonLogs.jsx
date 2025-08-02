import { useCart } from "../../../context/CartContext";
import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const huntingtonData = [
  {
    id: "ht-1",
    name: "Huntington Premier Account",
    vendor: "MidwestBanker",
    includes: "Full Access, Statements",
    balance: "$5,000 - $25,000",
    price: "$350",
    status: "Available",
  },
  {
    id: "ht-2",
    name: "Huntington Business Account",
    vendor: "BizHunt",
    includes: "Documents, Online Access",
    balance: "$10,000 - $40,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "ht-3",
    name: "Huntington Perks Account",
    vendor: "PerksBanker",
    includes: "Full Access, Rewards",
    balance: "$7,000 - $30,000",
    price: "$400",
    status: "Available",
  },
  {
    id: "ht-4",
    name: "Huntington Government Account",
    vendor: "GovHunt",
    includes: "Verified, High Balance",
    balance: "$15,000 - $75,000",
    price: "$800",
    status: "Available",
  },
  {
    id: "ht-5",
    name: "Huntington Student Account",
    vendor: "EduHunt",
    includes: "Verified Student",
    balance: "$500 - $3,000",
    price: "$150",
    status: "Available",
  },
  {
    id: "ht-6",
    name: "Huntington Aged Account",
    vendor: "OldHunt",
    includes: "5+ Years Old",
    balance: "$8,000 - $40,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "ht-7",
    name: "Huntington High Limit",
    vendor: "LimitHunt",
    includes: "$75k+ Daily Limit",
    balance: "$20,000 - $100,000",
    price: "$1,000",
    status: "Available",
  },
  {
    id: "ht-8",
    name: "Huntington Fullz Package",
    vendor: "FullzHunt",
    includes: "SSN+DL+Selfie",
    balance: "$4,000 - $20,000",
    price: "$350",
    status: "Sold Out",
  },
  {
    id: "ht-9",
    name: "Huntington Elite Account",
    vendor: "EliteHunt",
    includes: "Full Access, Phone Number",
    balance: "$6,000 - $30,000",
    price: "$400",
    status: "Available",
  },
  {
    id: "ht-10",
    name: "Huntington Business Elite",
    vendor: "BizEliteHunt",
    includes: "Documents, High Limit",
    balance: "$40,000 - $150,000",
    price: "$1,200",
    status: "Available",
  },
  {
    id: "ht-11",
    name: "Huntington Savings Account",
    vendor: "SaveHunt",
    includes: "High Yield Savings",
    balance: "$10,000 - $50,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "ht-12",
    name: "Huntington Private Client",
    vendor: "PrivateHunt",
    includes: "Full Access, Investments",
    balance: "$50,000 - $250,000",
    price: "$1,500",
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

export default function HuntingtonLogs() {
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
        Huntington Bank Accounts
      </h1>
      <Table
        headers={headers}
        data={huntingtonData.map((item) => ({
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