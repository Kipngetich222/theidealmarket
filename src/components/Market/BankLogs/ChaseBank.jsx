import { useCart } from "../../../context/CartContext";
import Table from "../../UI/Table";
import { useNavigate } from "react-router-dom";

const chaseData = [
  {
    id: "ch-1",
    name: "Chase Sapphire Account",
    vendor: "EliteBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$8,000 - $20,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "ch-2",
    name: "Chase Business Account",
    vendor: "CorporateSeller",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$15,000 - $75,000",
    price: "$700",
    status: "Available",
  },
  {
    id: "ch-3",
    name: "Chase Personal Account",
    vendor: "QuickAccess",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$2,000 - $10,000",
    price: "$250",
    status: "Available",
  },
  {
    id: "ch-4",
    name: "Chase Private Client",
    vendor: "PrivateBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$50,000 - $250,000",
    price: "$1,500",
    status: "Available",
  },
  {
    id: "ch-5",
    name: "Chase College Account",
    vendor: "EduBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$500 - $3,000",
    price: "$150",
    status: "Available",
  },
  {
    id: "ch-6",
    name: "Chase Aged Account",
    vendor: "OldBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$10,000 - $50,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "ch-7",
    name: "Chase High Limit",
    vendor: "LimitBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$25,000 - $150,000",
    price: "$1,200",
    status: "Available",
  },
  {
    id: "ch-8",
    name: "Chase Fullz Package",
    vendor: "FullzBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$5,000 - $25,000",
    price: "$400",
    status: "Sold Out",
  },
  {
    id: "ch-9",
    name: "Chase Elite Account",
    vendor: "EliteBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$7,000 - $35,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "ch-10",
    name: "Chase Business Elite",
    vendor: "BizElite",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$50,000 - $200,000",
    price: "$1,500",
    status: "Available",
  },
  {
    id: "ch-11",
    name: "Chase Crypto Enabled",
    vendor: "CryptoBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$10,000 - $50,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "ch-12",
    name: "Chase Government Account",
    vendor: "GovBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$20,000 - $100,000",
    price: "$900",
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


export default function ChaseBank() {
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
        Chase Bank Accounts
      </h1>
      <Table
        headers={headers}
        data={chaseData.map((item) => ({
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