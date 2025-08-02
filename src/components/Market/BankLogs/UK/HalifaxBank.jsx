import { useCart } from "../../../../context/CartContext";
import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const halifaxData = [
  {
    id: "hf-1",
    name: "Halifax Reward Account",
    vendor: "UKBanker",
    includes: "Full Access, Statements",
    balance: "£8,000 - £40,000",
    price: "£450",
    status: "Available",
  },
  {
    id: "hf-2",
    name: "Halifax Business Account",
    vendor: "HalifaxBiz",
    includes: "Documents, Online Access",
    balance: "£15,000 - £60,000",
    price: "£600",
    status: "Available",
  },
  {
    id: "hf-3",
    name: "Halifax Student Account",
    vendor: "EduHalifax",
    includes: "Verified Student",
    balance: "£1,000 - £5,000",
    price: "£200",
    status: "Available",
  },
  {
    id: "hf-4",
    name: "Halifax Aged Account",
    vendor: "OldHalifax",
    includes: "5+ Years Old",
    balance: "£10,000 - £50,000",
    price: "£500",
    status: "Available",
  },
  {
    id: "hf-5",
    name: "Halifax High Limit",
    vendor: "LimitHalifax",
    includes: "£75k+ Daily Limit",
    balance: "£40,000 - £150,000",
    price: "£1,000",
    status: "Available",
  },
  {
    id: "hf-6",
    name: "Halifax Fullz Package",
    vendor: "FullzHalifax",
    includes: "NIN+DL+Selfie",
    balance: "£4,000 - £20,000",
    price: "£350",
    status: "Sold Out",
  },
  {
    id: "hf-7",
    name: "Halifax Elite Account",
    vendor: "EliteHalifax",
    includes: "Full Access, Phone Number",
    balance: "£6,000 - £30,000",
    price: "£400",
    status: "Available",
  },
  {
    id: "hf-8",
    name: "Halifax Business Elite",
    vendor: "BizEliteHalifax",
    includes: "Documents, High Limit",
    balance: "£50,000 - £200,000",
    price: "£1,200",
    status: "Available",
  },
  {
    id: "hf-9",
    name: "Halifax Savings Account",
    vendor: "SaveHalifax",
    includes: "High Yield Savings",
    balance: "£10,000 - £50,000",
    price: "£450",
    status: "Available",
  },
  {
    id: "hf-10",
    name: "Halifax Private Client",
    vendor: "PrivateHalifax",
    includes: "Full Access, Investments",
    balance: "£75,000 - £300,000",
    price: "£1,500",
    status: "Available",
  },
  {
    id: "hf-11",
    name: "Halifax Government Account",
    vendor: "GovHalifax",
    includes: "Verified, High Balance",
    balance: "£20,000 - £100,000",
    price: "£800",
    status: "Available",
  },
  {
    id: "hf-12",
    name: "Halifax Crypto Enabled",
    vendor: "CryptoHalifax",
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


export default function HalifaxBank() {
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
        Halifax Bank Accounts
      </h1>
      <Table
        headers={headers}
        data={halifaxData.map((item) => ({
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