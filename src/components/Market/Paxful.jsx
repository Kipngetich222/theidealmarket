import { useCart } from "../../context/CartContext";
import Table from "../UI/Table";
import { useNavigate } from "react-router-dom";

const paxfulData = [
  {
    id: "px-1",
    name: "Chime Account (Verified)",
    vendor: "PaxKing",
    includes:
      "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license",
    balance: "$500 - $2,000",
    price: "$120",
    status: "Available",
  },
  {
    id: "px-2",
    name: "Chime BTC Wallet",
    vendor: "CryptoMaster",
    includes:
      "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license",
    balance: "0.02 - 0.05 BTC",
    price: "$150",
    status: "Available",
  },
  {
    id: "px-3",
    name: "Chime Account (Unverified)",
    vendor: "QuickPax",
    includes:
      "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license",
    balance: "$200 - $800",
    price: "$60",
    status: "Sold Out",
  },
  {
    id: "px-4",
    name: "Chime Business Account",
    vendor: "BizPax",
    includes:
      "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license",
    balance: "$1,000 - $3,000",
    price: "$200",
    status: "Available",
  },
  {
    id: "px-5",
    name: "Chime Aged Account",
    vendor: "OldPax",
    includes:
      "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license",
    balance: "$1,500 - $4,000",
    price: "$250",
    status: "Available",
  },
  {
    id: "px-6",
    name: "Chime High Limit",
    vendor: "LimitPax",
    includes:
      "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license",
    balance: "$3,000 - $7,000",
    price: "$350",
    status: "Available",
  },
  {
    id: "px-7",
    name: "Chime Fullz Package",
    vendor: "FullzPax",
    includes:
      "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license",
    balance: "$2,000 - $5,000",
    price: "$300",
    status: "Sold Out",
  },
  {
    id: "px-8",
    name: "Chime Government Account",
    vendor: "GovPax",
    includes:
      "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license",
    balance: "$5,000 - $15,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "px-9",
    name: "Chime BTC Wallet (Large)",
    vendor: "BitPax",
    includes:
      "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license",
    balance: "0.1 - 0.3 BTC",
    price: "$600",
    status: "Available",
  },
  {
    id: "px-10",
    name: "Chime Premium Account",
    vendor: "PaxPro",
    includes:
      "Online Access,Email Access, DOB,Cookies,Q&A Gender,Ssn, Address, Acct&Rn license",
    balance: "$2,500 - $6,000",
    price: "$400",
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


export default function Paxful() {
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
        Chime Accounts
      </h1>
      <Table
        headers={headers}
        data={paxfulData.map((item) => ({
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