import { useCart } from "../../../../context/CartContext";
import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const hsbcData = [
  {
    id: "hs-1",
    name: "HSBC Premier Account",
    vendor: "UKBanker",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$15,000 - $75,000",
    price: "$650",
    status: "Available",
  },
  {
    id: "hs-2",
    name: "HSBC Business Account",
    vendor: "HSBCBiz",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$25,000 - $100,000",
    price: "$850",
    status: "Available",
  },
  {
    id: "hs-3",
    name: "HSBC Student Account",
    vendor: "EduHSBC",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$1,000 - $5,000",
    price: "$200",
    status: "Available",
  },
  {
    id: "hs-4",
    name: "HSBC Aged Account",
    vendor: "OldHSBC",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$20,000 - $100,000",
    price: "$800",
    status: "Available",
  },
  {
    id: "hs-5",
    name: "HSBC High Limit",
    vendor: "LimitHSBC",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$75,000 - $300,000",
    price: "$1,500",
    status: "Available",
  },
  {
    id: "hs-6",
    name: "HSBC Fullz Package",
    vendor: "FullzHSBC",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$7,000 - $35,000",
    price: "$450",
    status: "Sold Out",
  },
  {
    id: "hs-7",
    name: "HSBC Elite Account",
    vendor: "EliteHSBC",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$10,000 - $50,000",
    price: "$550",
    status: "Available",
  },
  {
    id: "hs-8",
    name: "HSBC Business Elite",
    vendor: "BizEliteHSBC",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$100,000 - $400,000",
    price: "$1,800",
    status: "Available",
  },
  {
    id: "hs-9",
    name: "HSBC Savings Account",
    vendor: "SaveHSBC",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$15,000 - $75,000",
    price: "$600",
    status: "Available",
  },
  {
    id: "hs-10",
    name: "HSBC Private Client",
    vendor: "PrivateHSBC",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$150,000 - $750,000",
    price: "$2,500",
    status: "Available",
  },
  {
    id: "hs-11",
    name: "HSBC Government Account",
    vendor: "GovHSBC",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$30,000 - $200,000",
    price: "$1,200",
    status: "Available",
  },
  {
    id: "hs-12",
    name: "HSBC Crypto Enabled",
    vendor: "CryptoHSBC",
    includes:
      "Online Access, Email Access, DOB, Cookies, Q&A Gender, SSN, Address, Acct & RN license NO, Zelle ON",
    balance: "$15,000 - $75,000",
    price: "$700",
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


export default function HSBCUK() {
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
        HSBC UK Accounts
      </h1>
      <Table
        headers={headers}
        data={hsbcData.map((item) => ({
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