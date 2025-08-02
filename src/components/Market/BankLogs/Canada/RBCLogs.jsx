import { useCart } from "../../../../context/CartContext";
import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const rbcData = [
  {
    id: "rbc-1",
    name: "RBC Signature Account",
    vendor: "RoyalBanker",
    includes: "Full Access, Investment",
    balance: "CAD $15,000 - $75,000",
    price: "$650 CAD",
    status: "Available",
  },
  {
    id: "rbc-2",
    name: "RBC Business Account",
    vendor: "RBCBiz",
    includes: "Documents, Online Access",
    balance: "CAD $25,000 - $100,000",
    price: "$850 CAD",
    status: "Available",
  },
  {
    id: "rbc-3",
    name: "RBC Student Account",
    vendor: "EduRBC",
    includes: "Verified Student",
    balance: "CAD $1,000 - $5,000",
    price: "$200 CAD",
    status: "Available",
  },
  {
    id: "rbc-4",
    name: "RBC Aged Account",
    vendor: "OldRBC",
    includes: "5+ Years Old",
    balance: "CAD $20,000 - $100,000",
    price: "$800 CAD",
    status: "Available",
  },
  {
    id: "rbc-5",
    name: "RBC High Limit",
    vendor: "LimitRBC",
    includes: "$150k+ Daily Limit",
    balance: "CAD $75,000 - $300,000",
    price: "$1,500 CAD",
    status: "Available",
  },
  {
    id: "rbc-6",
    name: "RBC Fullz Package",
    vendor: "FullzRBC",
    includes: "SIN+DL+Selfie",
    balance: "CAD $7,000 - $35,000",
    price: "$450 CAD",
    status: "Sold Out",
  },
  {
    id: "rbc-7",
    name: "RBC Elite Account",
    vendor: "EliteRBC",
    includes: "Full Access, Phone Number",
    balance: "CAD $10,000 - $50,000",
    price: "$550 CAD",
    status: "Available",
  },
  {
    id: "rbc-8",
    name: "RBC Business Elite",
    vendor: "BizEliteRBC",
    includes: "Documents, High Limit",
    balance: "CAD $100,000 - $400,000",
    price: "$1,800 CAD",
    status: "Available",
  },
  {
    id: "rbc-9",
    name: "RBC Savings Account",
    vendor: "SaveRBC",
    includes: "High Yield Savings",
    balance: "CAD $15,000 - $75,000",
    price: "$600 CAD",
    status: "Available",
  },
  {
    id: "rbc-10",
    name: "RBC Private Client",
    vendor: "PrivateRBC",
    includes: "Full Access, Investments",
    balance: "CAD $150,000 - $750,000",
    price: "$2,500 CAD",
    status: "Available",
  },
  {
    id: "rbc-11",
    name: "RBC Government Account",
    vendor: "GovRBC",
    includes: "Verified, High Balance",
    balance: "CAD $30,000 - $200,000",
    price: "$1,200 CAD",
    status: "Available",
  },
  {
    id: "rbc-12",
    name: "RBC Crypto Enabled",
    vendor: "CryptoRBC",
    includes: "BTC/ETH Access",
    balance: "CAD $15,000 - $75,000",
    price: "$700 CAD",
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

export default function RBCLogs() {
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
        Royal Bank of Canada (RBC) Accounts
      </h1>
      <Table
        headers={headers}
        data={rbcData.map((item) => ({
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