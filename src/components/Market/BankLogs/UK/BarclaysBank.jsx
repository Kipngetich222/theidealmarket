import { useCart } from "../../../../context/CartContext";
import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const barclaysData = [
  {
    id: "br-1",
    name: "Barclays Premier Account",
    vendor: "UKBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$10,000 - $50,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "br-2",
    name: "Barclays Business Account",
    vendor: "BarclaysBiz",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$20,000 - $80,000",
    price: "$700",
    status: "Available",
  },
  {
    id: "br-3",
    name: "Barclays Student Account",
    vendor: "EduBarclays",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$1,000 - $5,000",
    price: "$200",
    status: "Available",
  },
  {
    id: "br-4",
    name: "Barclays Aged Account",
    vendor: "OldBarclays",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$15,000 - $75,000",
    price: "$700",
    status: "Available",
  },
  {
    id: "br-5",
    name: "Barclays High Limit",
    vendor: "LimitBarclays",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$50,000 - $200,000",
    price: "$1,200",
    status: "Available",
  },
  {
    id: "br-6",
    name: "Barclays Fullz Package",
    vendor: "FullzBarclays",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$5,000 - $25,000",
    price: "$400",
    status: "Sold Out",
  },
  {
    id: "br-7",
    name: "Barclays Elite Account",
    vendor: "EliteBarclays",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$7,000 - $35,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "br-8",
    name: "Barclays Business Elite",
    vendor: "BizEliteBarclays",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$75,000 - $300,000",
    price: "$1,500",
    status: "Available",
  },
  {
    id: "br-9",
    name: "Barclays Savings Account",
    vendor: "SaveBarclays",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$10,000 - $50,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "br-10",
    name: "Barclays Private Client",
    vendor: "PrivateBarclays",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$100,000 - $500,000",
    price: "$2,000",
    status: "Available",
  },
  {
    id: "br-11",
    name: "Barclays Government Account",
    vendor: "GovBarclays",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$25,000 - $150,000",
    price: "$1,000",
    status: "Available",
  },
  {
    id: "br-12",
    name: "Barclays Crypto Enabled",
    vendor: "CryptoBarclays",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
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


export default function BarclaysBank() {
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
        Barclays Bank Accounts
      </h1>
      <Table
        headers={headers}
        data={barclaysData.map((item) => ({
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