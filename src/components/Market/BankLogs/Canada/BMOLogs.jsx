import { useCart } from "../../../../context/CartContext";
import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const bmoData = [
  {
    id: "bmo-1",
    name: "BMO Premium Account",
    vendor: "CanadaBanker",
    includes: "Full Access, Statements",
    balance: "CAD $10,000 - $50,000",
    price: "$500 CAD",
    status: "Available",
  },
  {
    id: "bmo-2",
    name: "BMO Business Account",
    vendor: "BMOBiz",
    includes: "Documents, Online Access",
    balance: "CAD $20,000 - $80,000",
    price: "$700 CAD",
    status: "Available",
  },
  {
    id: "bmo-3",
    name: "BMO Student Account",
    vendor: "EduBMO",
    includes: "Verified Student",
    balance: "CAD $1,000 - $5,000",
    price: "$200 CAD",
    status: "Available",
  },
  {
    id: "bmo-4",
    name: "BMO Aged Account",
    vendor: "OldBMO",
    includes: "5+ Years Old",
    balance: "CAD $15,000 - $75,000",
    price: "$700 CAD",
    status: "Available",
  },
  {
    id: "bmo-5",
    name: "BMO High Limit",
    vendor: "LimitBMO",
    includes: "$100k+ Daily Limit",
    balance: "CAD $50,000 - $200,000",
    price: "$1,200 CAD",
    status: "Available",
  },
  {
    id: "bmo-6",
    name: "BMO Fullz Package",
    vendor: "FullzBMO",
    includes: "SIN+DL+Selfie",
    balance: "CAD $5,000 - $25,000",
    price: "$400 CAD",
    status: "Sold Out",
  },
  {
    id: "bmo-7",
    name: "BMO Elite Account",
    vendor: "EliteBMO",
    includes: "Full Access, Phone Number",
    balance: "CAD $7,000 - $35,000",
    price: "$450 CAD",
    status: "Available",
  },
  {
    id: "bmo-8",
    name: "BMO Business Elite",
    vendor: "BizEliteBMO",
    includes: "Documents, High Limit",
    balance: "CAD $75,000 - $300,000",
    price: "$1,500 CAD",
    status: "Available",
  },
  {
    id: "bmo-9",
    name: "BMO Savings Account",
    vendor: "SaveBMO",
    includes: "High Yield Savings",
    balance: "CAD $10,000 - $50,000",
    price: "$450 CAD",
    status: "Available",
  },
  {
    id: "bmo-10",
    name: "BMO Private Client",
    vendor: "PrivateBMO",
    includes: "Full Access, Investments",
    balance: "CAD $100,000 - $500,000",
    price: "$2,000 CAD",
    status: "Available",
  },
  {
    id: "bmo-11",
    name: "BMO Government Account",
    vendor: "GovBMO",
    includes: "Verified, High Balance",
    balance: "CAD $25,000 - $150,000",
    price: "$1,000 CAD",
    status: "Available",
  },
  {
    id: "bmo-12",
    name: "BMO Crypto Enabled",
    vendor: "CryptoBMO",
    includes: "BTC/ETH Access",
    balance: "CAD $10,000 - $50,000",
    price: "$600 CAD",
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


export default function BMOLogs() {
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
        Bank of Montreal (BMO) Accounts
      </h1>
      <Table
        headers={headers}
        data={bmoData.map((item) => ({
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