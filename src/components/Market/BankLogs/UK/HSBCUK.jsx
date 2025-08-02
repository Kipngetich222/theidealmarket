import { useCart } from "../../../../context/CartContext";
import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const hsbcData = [
  {
    id: "hs-1",
    name: "HSBC Premier Account",
    vendor: "UKBanker",
    includes: "Full Access, Investment",
    balance: "£15,000 - £75,000",
    price: "£650",
    status: "Available",
  },
  {
    id: "hs-2",
    name: "HSBC Business Account",
    vendor: "HSBCBiz",
    includes: "Documents, Online Access",
    balance: "£25,000 - £100,000",
    price: "£850",
    status: "Available",
  },
  {
    id: "hs-3",
    name: "HSBC Student Account",
    vendor: "EduHSBC",
    includes: "Verified Student",
    balance: "£1,000 - £5,000",
    price: "£200",
    status: "Available",
  },
  {
    id: "hs-4",
    name: "HSBC Aged Account",
    vendor: "OldHSBC",
    includes: "5+ Years Old",
    balance: "£20,000 - £100,000",
    price: "£800",
    status: "Available",
  },
  {
    id: "hs-5",
    name: "HSBC High Limit",
    vendor: "LimitHSBC",
    includes: "£150k+ Daily Limit",
    balance: "£75,000 - £300,000",
    price: "£1,500",
    status: "Available",
  },
  {
    id: "hs-6",
    name: "HSBC Fullz Package",
    vendor: "FullzHSBC",
    includes: "NIN+DL+Selfie",
    balance: "£7,000 - £35,000",
    price: "£450",
    status: "Sold Out",
  },
  {
    id: "hs-7",
    name: "HSBC Elite Account",
    vendor: "EliteHSBC",
    includes: "Full Access, Phone Number",
    balance: "£10,000 - £50,000",
    price: "£550",
    status: "Available",
  },
  {
    id: "hs-8",
    name: "HSBC Business Elite",
    vendor: "BizEliteHSBC",
    includes: "Documents, High Limit",
    balance: "£100,000 - £400,000",
    price: "£1,800",
    status: "Available",
  },
  {
    id: "hs-9",
    name: "HSBC Savings Account",
    vendor: "SaveHSBC",
    includes: "High Yield Savings",
    balance: "£15,000 - £75,000",
    price: "£600",
    status: "Available",
  },
  {
    id: "hs-10",
    name: "HSBC Private Client",
    vendor: "PrivateHSBC",
    includes: "Full Access, Investments",
    balance: "£150,000 - £750,000",
    price: "£2,500",
    status: "Available",
  },
  {
    id: "hs-11",
    name: "HSBC Government Account",
    vendor: "GovHSBC",
    includes: "Verified, High Balance",
    balance: "£30,000 - £200,000",
    price: "£1,200",
    status: "Available",
  },
  {
    id: "hs-12",
    name: "HSBC Crypto Enabled",
    vendor: "CryptoHSBC",
    includes: "BTC/ETH Access",
    balance: "£15,000 - £75,000",
    price: "£700",
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