import { useCart } from "../../../../context/CartContext";
import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const lloydsData = [
  {
    id: "ll-1",
    name: "Lloyds Club Account",
    vendor: "UKBanker",
    includes: "Full Access, Statements",
    balance: "£12,000 - £60,000",
    price: "£600",
    status: "Available",
  },
  {
    id: "ll-2",
    name: "Lloyds Business Account",
    vendor: "LloydsBiz",
    includes: "Documents, Online Access",
    balance: "£20,000 - £90,000",
    price: "£800",
    status: "Available",
  },
  {
    id: "ll-3",
    name: "Lloyds Student Account",
    vendor: "EduLloyds",
    includes: "Verified Student",
    balance: "£1,000 - £5,000",
    price: "£200",
    status: "Available",
  },
  {
    id: "ll-4",
    name: "Lloyds Aged Account",
    vendor: "OldLloyds",
    includes: "5+ Years Old",
    balance: "£15,000 - £75,000",
    price: "£700",
    status: "Available",
  },
  {
    id: "ll-5",
    name: "Lloyds High Limit",
    vendor: "LimitLloyds",
    includes: "£100k+ Daily Limit",
    balance: "£50,000 - £200,000",
    price: "£1,200",
    status: "Available",
  },
  {
    id: "ll-6",
    name: "Lloyds Fullz Package",
    vendor: "FullzLloyds",
    includes: "NIN+DL+Selfie",
    balance: "£5,000 - £25,000",
    price: "£400",
    status: "Sold Out",
  },
  {
    id: "ll-7",
    name: "Lloyds Elite Account",
    vendor: "EliteLloyds",
    includes: "Full Access, Phone Number",
    balance: "£7,000 - £35,000",
    price: "£450",
    status: "Available",
  },
  {
    id: "ll-8",
    name: "Lloyds Business Elite",
    vendor: "BizEliteLloyds",
    includes: "Documents, High Limit",
    balance: "£75,000 - £300,000",
    price: "£1,500",
    status: "Available",
  },
  {
    id: "ll-9",
    name: "Lloyds Savings Account",
    vendor: "SaveLloyds",
    includes: "High Yield Savings",
    balance: "£10,000 - £50,000",
    price: "£450",
    status: "Available",
  },
  {
    id: "ll-10",
    name: "Lloyds Private Client",
    vendor: "PrivateLloyds",
    includes: "Full Access, Investments",
    balance: "£100,000 - £500,000",
    price: "£2,000",
    status: "Available",
  },
  {
    id: "ll-11",
    name: "Lloyds Government Account",
    vendor: "GovLloyds",
    includes: "Verified, High Balance",
    balance: "£25,000 - £150,000",
    price: "£1,000",
    status: "Available",
  },
  {
    id: "ll-12",
    name: "Lloyds Crypto Enabled",
    vendor: "CryptoLloyds",
    includes: "BTC/ETH Access",
    balance: "£10,000 - £50,000",
    price: "£600",
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


export default function LollydsBank() {
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
        Lloyds Bank Accounts
      </h1>
      <Table
        headers={headers}
        data={lloydsData.map((item) => ({
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