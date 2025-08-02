import { useCart } from "../../../../context/CartContext";
import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const tdCanadaData = [
  {
    id: "tdc-1",
    name: "TD Canada All-Inclusive",
    vendor: "CanadaBanker",
    includes: "Full Access, Investment",
    balance: "CAD $12,000 - $60,000",
    price: "$600 CAD",
    status: "Available",
  },
  {
    id: "tdc-2",
    name: "TD Canada Business",
    vendor: "TDBizCanada",
    includes: "Documents, Online Access",
    balance: "CAD $20,000 - $90,000",
    price: "$800 CAD",
    status: "Available",
  },
  {
    id: "tdc-3",
    name: "TD Canada Student",
    vendor: "EduTDCanada",
    includes: "Verified Student",
    balance: "CAD $1,000 - $5,000",
    price: "$200 CAD",
    status: "Available",
  },
  {
    id: "tdc-4",
    name: "TD Canada Aged Account",
    vendor: "OldTDCanada",
    includes: "5+ Years Old",
    balance: "CAD $15,000 - $75,000",
    price: "$700 CAD",
    status: "Available",
  },
  {
    id: "tdc-5",
    name: "TD Canada High Limit",
    vendor: "LimitTDCanada",
    includes: "$100k+ Daily Limit",
    balance: "CAD $50,000 - $200,000",
    price: "$1,200 CAD",
    status: "Available",
  },
  {
    id: "tdc-6",
    name: "TD Canada Fullz Package",
    vendor: "FullzTDCanada",
    includes: "SIN+DL+Selfie",
    balance: "CAD $5,000 - $25,000",
    price: "$400 CAD",
    status: "Sold Out",
  },
  {
    id: "tdc-7",
    name: "TD Canada Elite Account",
    vendor: "EliteTDCanada",
    includes: "Full Access, Phone Number",
    balance: "CAD $7,000 - $35,000",
    price: "$450 CAD",
    status: "Available",
  },
  {
    id: "tdc-8",
    name: "TD Canada Business Elite",
    vendor: "BizEliteTDCanada",
    includes: "Documents, High Limit",
    balance: "CAD $75,000 - $300,000",
    price: "$1,500 CAD",
    status: "Available",
  },
  {
    id: "tdc-9",
    name: "TD Canada Savings Account",
    vendor: "SaveTDCanada",
    includes: "High Yield Savings",
    balance: "CAD $10,000 - $50,000",
    price: "$450 CAD",
    status: "Available",
  },
  {
    id: "tdc-10",
    name: "TD Canada Private Client",
    vendor: "PrivateTDCanada",
    includes: "Full Access, Investments",
    balance: "CAD $100,000 - $500,000",
    price: "$2,000 CAD",
    status: "Available",
  },
  {
    id: "tdc-11",
    name: "TD Canada Government Account",
    vendor: "GovTDCanada",
    includes: "Verified, High Balance",
    balance: "CAD $25,000 - $150,000",
    price: "$1,000 CAD",
    status: "Available",
  },
  {
    id: "tdc-12",
    name: "TD Canada Crypto Enabled",
    vendor: "CryptoTDCanada",
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


export default function TDCanada() {
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
        TD Canada Trust Accounts
      </h1>
      <Table
        headers={headers}
        data={tdCanadaData.map((item) => ({
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