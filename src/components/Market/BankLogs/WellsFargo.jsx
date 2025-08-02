import { useCart } from "../../../context/CartContext";
import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const wellsFargoData = [
  {
    id: "wf-1",
    name: "Wells Fargo Platinum Account",
    vendor: "WestCoastBanker",
    includes: "Full Access, Statements",
    balance: "$10,000 - $50,000",
    price: "$550",
    status: "Available",
  },
  {
    id: "wf-2",
    name: "Wells Fargo Business Account",
    vendor: "WellsBiz",
    includes: "Documents, Online Access",
    balance: "$20,000 - $100,000",
    price: "$800",
    status: "Available",
  },
  {
    id: "wf-3",
    name: "Wells Fargo Basic Account",
    vendor: "SimpleWells",
    includes: "Online Banking",
    balance: "$2,000 - $10,000",
    price: "$300",
    status: "Sold Out",
  },
  {
    id: "wf-4",
    name: "Wells Fargo Private Client",
    vendor: "PrivateWells",
    includes: "Full Access, Investments",
    balance: "$100,000 - $500,000",
    price: "$2,500",
    status: "Available",
  },
  {
    id: "wf-5",
    name: "Wells Fargo Student Account",
    vendor: "EduWells",
    includes: "Verified Student",
    balance: "$500 - $3,000",
    price: "$150",
    status: "Available",
  },
  {
    id: "wf-6",
    name: "Wells Fargo Aged Account",
    vendor: "OldWells",
    includes: "5+ Years Old",
    balance: "$15,000 - $75,000",
    price: "$700",
    status: "Available",
  },
  {
    id: "wf-7",
    name: "Wells Fargo High Limit",
    vendor: "LimitWells",
    includes: "$150k+ Daily Limit",
    balance: "$50,000 - $250,000",
    price: "$1,500",
    status: "Available",
  },
  {
    id: "wf-8",
    name: "Wells Fargo Fullz Package",
    vendor: "FullzWells",
    includes: "SSN+DL+Selfie",
    balance: "$7,000 - $35,000",
    price: "$450",
    status: "Sold Out",
  },
  {
    id: "wf-9",
    name: "Wells Fargo Elite Account",
    vendor: "EliteWells",
    includes: "Full Access, Phone Number",
    balance: "$10,000 - $50,000",
    price: "$550",
    status: "Available",
  },
  {
    id: "wf-10",
    name: "Wells Fargo Business Elite",
    vendor: "BizEliteWells",
    includes: "Documents, High Limit",
    balance: "$75,000 - $300,000",
    price: "$1,800",
    status: "Available",
  },
  {
    id: "wf-11",
    name: "Wells Fargo Savings Account",
    vendor: "SaveWells",
    includes: "High Yield Savings",
    balance: "$15,000 - $75,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "wf-12",
    name: "Wells Fargo Government Account",
    vendor: "GovWells",
    includes: "Verified, High Balance",
    balance: "$25,000 - $150,000",
    price: "$1,000",
    status: "Available",
  },
  {
    id: "wf-13",
    name: "Wells Fargo Crypto Enabled",
    vendor: "CryptoWells",
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


export default function WellsFargo() {
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
        Wells Fargo Accounts
      </h1>
      <Table
        headers={headers}
        data={wellsFargoData.map((item) => ({
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