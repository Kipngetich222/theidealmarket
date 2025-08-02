import { useCart } from "../../../context/CartContext";
import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const suntrustData = [
  {
    id: "st-1",
    name: "SunTrust Premium Account",
    vendor: "SouthernBanker",
    includes: "Full Access, Statements",
    balance: "$7,000 - $30,000",
    price: "$400",
    status: "Available",
  },
  {
    id: "st-2",
    name: "SunTrust Basic Account",
    vendor: "SimpleSun",
    includes: "Online Banking",
    balance: "$1,000 - $5,000",
    price: "$200",
    status: "Sold Out",
  },
  {
    id: "st-3",
    name: "SunTrust Business Account",
    vendor: "BizSun",
    includes: "Documents, Online Access",
    balance: "$10,000 - $50,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "st-4",
    name: "SunTrust Government Account",
    vendor: "GovSun",
    includes: "Verified, High Balance",
    balance: "$15,000 - $75,000",
    price: "$800",
    status: "Available",
  },
  {
    id: "st-5",
    name: "SunTrust Student Account",
    vendor: "EduSun",
    includes: "Verified Student",
    balance: "$500 - $3,000",
    price: "$150",
    status: "Available",
  },
  {
    id: "st-6",
    name: "SunTrust Aged Account",
    vendor: "OldSun",
    includes: "5+ Years Old",
    balance: "$8,000 - $40,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "st-7",
    name: "SunTrust High Limit",
    vendor: "LimitSun",
    includes: "$75k+ Daily Limit",
    balance: "$20,000 - $100,000",
    price: "$1,000",
    status: "Available",
  },
  {
    id: "st-8",
    name: "SunTrust Fullz Package",
    vendor: "FullzSun",
    includes: "SSN+DL+Selfie",
    balance: "$4,000 - $20,000",
    price: "$350",
    status: "Sold Out",
  },
  {
    id: "st-9",
    name: "SunTrust Elite Account",
    vendor: "EliteSun",
    includes: "Full Access, Phone Number",
    balance: "$6,000 - $30,000",
    price: "$400",
    status: "Available",
  },
  {
    id: "st-10",
    name: "SunTrust Business Elite",
    vendor: "BizEliteSun",
    includes: "Documents, High Limit",
    balance: "$40,000 - $150,000",
    price: "$1,200",
    status: "Available",
  },
  {
    id: "st-11",
    name: "SunTrust Savings Account",
    vendor: "SaveSun",
    includes: "High Yield Savings",
    balance: "$10,000 - $50,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "st-12",
    name: "SunTrust Private Client",
    vendor: "PrivateSun",
    includes: "Full Access, Investments",
    balance: "$50,000 - $250,000",
    price: "$1,500",
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


export default function SuntrustLogs() {
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
        SunTrust Bank Accounts
      </h1>
      <Table
        headers={headers}
        data={suntrustData.map((item) => ({
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