import { useCart } from "../../../context/CartContext";
import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const citiData = [
  {
    id: "ct-1",
    name: "CitiGold Account",
    vendor: "PremiumBanker",
    includes: "Full Access, Investment",
    balance: "$10,000 - $50,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "ct-2",
    name: "Citi Basic Account",
    vendor: "SimpleAccess",
    includes: "Online Banking",
    balance: "$1,500 - $7,000",
    price: "$250",
    status: "Sold Out",
  },
  {
    id: "ct-3",
    name: "Citi Priority Account",
    vendor: "PriorityBanker",
    includes: "Full Access, Statements",
    balance: "$15,000 - $75,000",
    price: "$700",
    status: "Available",
  },
  {
    id: "ct-4",
    name: "Citi Government Account",
    vendor: "GovBanker",
    includes: "Verified, High Balance",
    balance: "$20,000 - $100,000",
    price: "$900",
    status: "Available",
  },
  {
    id: "ct-5",
    name: "Citi Student Account",
    vendor: "EduBanker",
    includes: "Verified Student",
    balance: "$500 - $3,000",
    price: "$150",
    status: "Available",
  },
  {
    id: "ct-6",
    name: "Citi Aged Account",
    vendor: "OldBanker",
    includes: "5+ Years Old",
    balance: "$10,000 - $50,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "ct-7",
    name: "Citi High Limit",
    vendor: "LimitBanker",
    includes: "$100k+ Daily Limit",
    balance: "$25,000 - $150,000",
    price: "$1,200",
    status: "Available",
  },
  {
    id: "ct-8",
    name: "Citi Fullz Package",
    vendor: "FullzBanker",
    includes: "SSN+DL+Selfie",
    balance: "$5,000 - $25,000",
    price: "$400",
    status: "Sold Out",
  },
  {
    id: "ct-9",
    name: "Citi Elite Account",
    vendor: "EliteBanker",
    includes: "Full Access, Phone Number",
    balance: "$7,000 - $35,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "ct-10",
    name: "Citi Business Elite",
    vendor: "BizElite",
    includes: "Documents, High Limit",
    balance: "$50,000 - $200,000",
    price: "$1,500",
    status: "Available",
  },
  {
    id: "ct-11",
    name: "Citi Crypto Enabled",
    vendor: "CryptoBanker",
    includes: "BTC/ETH Access",
    balance: "$10,000 - $50,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "ct-12",
    name: "Citi Private Bank",
    vendor: "PrivateBanker",
    includes: "Full Access, Investments",
    balance: "$100,000 - $500,000",
    price: "$2,500",
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

export default function CitiBank() {
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
        Citibank Accounts
      </h1>
      <Table
        headers={headers}
        data={citiData.map((item) => ({
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