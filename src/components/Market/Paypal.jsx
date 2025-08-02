import { useCart } from "../../context/CartContext";
import Table from "../UI/Table";
import { useNavigate } from "react-router-dom";

const paypalData = [
  {
    id: "pp-1",
    name: "PayPal Account (Verified)",
    vendor: "PayMaster",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$1,000 - $3,000",
    price: "$200",
    status: "Available",
  },
  {
    id: "pp-2",
    name: "PayPal Account (Unverified)",
    vendor: "QuickPay",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$500 - $1,500",
    price: "$100",
    status: "Available",
  },
  {
    id: "pp-3",
    name: "PayPal Business Account",
    vendor: "BizPay",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$2,000 - $5,000",
    price: "$300",
    status: "Sold Out",
  },
  {
    id: "pp-4",
    name: "PayPal Limited Account",
    vendor: "Limitless",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$500 - $2,000",
    price: "$150",
    status: "Available",
  },
  {
    id: "pp-5",
    name: "PayPal Aged Account",
    vendor: "OldPay",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$3,000 - $7,000",
    price: "$400",
    status: "Available",
  },
  {
    id: "pp-6",
    name: "PayPal High Limit",
    vendor: "HighPay",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$5,000 - $15,000",
    price: "$500",
    status: "Available",
  },
  {
    id: "pp-7",
    name: "PayPal Fullz Package",
    vendor: "FullzPay",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$2,500 - $6,000",
    price: "$350",
    status: "Sold Out",
  },
  {
    id: "pp-8",
    name: "PayPal Government Account",
    vendor: "GovPay",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$10,000 - $25,000",
    price: "$700",
    status: "Available",
  },
  {
    id: "pp-9",
    name: "PayPal Premium Account",
    vendor: "PayPro",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$4,000 - $10,000",
    price: "$450",
    status: "Available",
  },
  {
    id: "pp-10",
    name: "PayPal Business Elite",
    vendor: "BizElite",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$15,000 - $40,000",
    price: "$800",
    status: "Available",
  },
  {
    id: "pp-11",
    name: "PayPal Crypto Enabled",
    vendor: "CryptoPay",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$2,000 - $8,000",
    price: "$300",
    status: "Available",
  },
  {
    id: "pp-12",
    name: "PayPal Student Account",
    vendor: "EduPay",
    includes: "Email access -Dissabled 2FA, Come with cookies",
    balance: "$500 - $2,500",
    price: "$150",
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


export default function Paypal() {
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
        PayPal Accounts
      </h1>
      <Table
        headers={headers}
        data={paypalData.map((item) => ({
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